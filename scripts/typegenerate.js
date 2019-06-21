const fs = require('fs');

const prettier = require('prettier');

const config = require('../docs/docs.json');

// TODO: Provide array length information in docs.json
const coordinatesTypes = [
  'ne',
  'sw',
  'centerCoordinate',
  'coordinates',
  'coordinate',
];

// TODO: Mark expressions not as any
const expressionTypes = ['filter'];

/**
 * Print Preude
 *
 *   - Module Deklaration
 *   - Imports from React Types
 *   - Begin Scoped Part
 *
 * @returns {string}
 */
function getPrelude() {
  return `
    declare module 'mapbox__react-native-mapbox-gl';
    
    import {
      Component
    } from 'react';
              
    declare namespace MapboxGL {  
        function setAccessToken(accessToken: string): void;
        function getAccessToken(): Promise<void>;
        function setTelemetryEnabled(telemetryEnabled: boolean): void;        
  `;
}

/**
 * Format Component
 *
 * Generating the DTS Type is divided into 2 parts:
 *   - we generate the class definition in the scoped part of the dts
 *   - following the namespace we orint the required interfaces for Props
 *
 * @param name
 * @param props
 * @param description
 *
 * @param methods
 * @returns {string}
 */
function getComponentHead({name, props, description, methods}) {
  if (props && props.length) {
    return `
  /**
    ${description}
  **/ 
  class ${name} extends Component<${name}Props> { 
    ${methods.map(method => getMethod(method)).join('')}
  };
    `;
  }
  return `
  /**
    ${description}
  **/ 
  class ${name} extends Component { };
    `;
}

/**
 * Get the DTS type for an docs.json type
 *
 * @param name
 * @param type
 *
 * @returns {string}
 */
function getInterfaceType({name, type}) {
  if (typeof type === 'object' && !type) {
    return `any /* ${JSON.stringify(type)}*/`;
  }

  if (typeof type === 'object' && type.name === 'shape') {
    return `{
    ${type.value.map(prop => getProperty(prop)).join('')}
  }`;
  }

  if (
    typeof type === 'object' &&
    type.name === 'array' &&
    coordinatesTypes.includes(name)
  ) {
    const subType = getInterfaceType({name, type: type.value.type});

    return `[${subType}, ${subType}]`;
  }
  if (typeof type === 'object' && type.name === 'array') {
    return `${getInterfaceType({name, type: type.value.type})}[]`;
  }
  if (typeof type === 'object' && type.name === 'Array' && type.elements) {
    return `${getInterfaceType({name, type: type.elements.name})}[]`;
  }

  if (
    (typeof type === 'object' && type.name === 'String') ||
    type === 'string'
  ) {
    return 'string';
  }
  if (
    (typeof type === 'object' && type.name === 'Boolean') ||
    type === 'bool'
  ) {
    return 'boolean';
  }
  if (
    (typeof type === 'object' && type.name === 'Number') ||
    type === 'number'
  ) {
    return 'number';
  }
  if (
      (typeof type === 'object' && type.name === 'void') ||
      type === 'void'
  ) {
    return 'void';
  }

  if (expressionTypes.includes(name)) {
    return 'Expression';
  }

  if (type === 'any') {
    return 'any';
  }

  return `any /* ${JSON.stringify(type)} */`;
}

/**
 * Format method to DTS
 *
 * @param name
 * @param description
 * @param required
 * @param type
 *
 * @returns {string}
 */
function getMethod({name, docblock, params, modifiers, returns}) {
  const [description] = docblock ? docblock.split('\n\n') : [''];

  if (returns === null) {
    return `
  /**
    ${description}
    **/ 
  ${name}(${params
      .filter(prop => prop.type !== null)
      .map(prop => getParam(prop))
      .join(', ')}): void;
    `;
  }

  if (modifiers.includes('async')) {
    return `
  /**
    ${description}
    **/ 
  ${name}(${params
      .filter(prop => prop.type !== null)
      .map(prop => getParam(prop))
      .join(', ')}): Promise<${getInterfaceType({name, type: returns.type})}>;
    `;
  }

  return `
  /**
    ${description}
    **/ 
  ${name}(${params
    .filter(prop => prop.type !== null)
    .map(prop => getParam(prop))
    .join(', ')}): ${getInterfaceType({name, type: returns.type})};
    `;
}

/**
 * Format param to DTS
 *
 * @param name
 * @param optional
 * @param type
 *
 * @returns {string}
 */
function getParam({name, optional, type}) {
  return `${name}${optional ? '?' : ''}: ${getInterfaceType({
    name,
    type,
  })}`;
}

/**
 * Format property to DTS
 *
 * @param name
 * @param description
 * @param required
 * @param type
 *
 * @returns {string}
 */
function getProperty({name, description, required, type}) {
  return `
  /**
    ${description}
  **/ 
  ${name}${required ? '' : '?'}: ${getInterfaceType({name, type})};
    `;
}

/**
 * Print special filter type (is annotaed as any, but we try to specify it a litte bit better)
 *
 * TODO: ongoing work
 */
function getExpressionType() {
  return `
        type ExpressionArgument = string | number | boolean | Expression;
        type ExpressionName = string;
        interface Expression {
            [index: number]: ExpressionArgument;
            0: ExpressionName;
        }
    `;
}

/**
 *
 * @param name
 * @param props
 * @returns {string}
 */
function getComponentBody({name, props}) {
  if (!props.length) {
    return '';
  }

  return `
  interface ${name}Props {
    ${props.map(prop => getProperty(prop)).join('')}
  };
    `;
}

/**
 * End Scoped Part
 *
 * @returns {string}
 */
function getPostlude() {
  return `
    }
    
    export default MapboxGL;
  `;
}

function getOutput() {
  return (
    getPrelude() +
    Object.values(config)
      .map(c => getComponentHead(c))
      .join('') +
    getPostlude() +
    getExpressionType() +
    Object.values(config)
      .map(c => getComponentBody(c))
      .join('')
  );
}

const output = prettier.format(getOutput(), {
  parser: 'typescript',
});

fs.writeFile('index.d.ts', output, err => {
  if (err) throw err;
});
