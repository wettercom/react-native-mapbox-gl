declare module "mapbox__react-native-mapbox-gl";

import { Component } from "react";

declare namespace MapboxGL {
  function setAccessToken(accessToken: string): void;
  function getAccessToken(): Promise<void>;
  function setTelemetryEnabled(telemetryEnabled: boolean): void;

  /**
    
  **/

  class BackgroundLayer extends Component<BackgroundLayerProps> {}

  /**
    Callout that displays information about a selected annotation near the annotation.
  **/

  class Callout extends Component<CalloutProps> {}

  /**
    
  **/

  class Camera extends Component<CameraProps> {
    /**
    Map camera transitions to fit provided bounds
    **/

    fitBounds(
      northEastCoordinates: number[],
      southWestCoordinates: number[],
      padding?: number,
      animationDuration?: number
    ): void;

    /**
    Map camera will fly to new coordinate
    **/

    flyTo(coordinates: [number, number], animationDuration?: number): void;

    /**
    Map camera will move to new coordinate at the same zoom level
    **/

    moveTo(coordinates: [number, number], animationDuration?: number): void;

    /**
    Map camera will zoom to specified level
    **/

    zoomTo(zoomLevel: number, animationDuration?: number): void;

    /**
    Map camera will perform updates based on provided config. Advanced use only!
    **/

    setCamera(config: any /* {"name":"Object"} */): void;
  }

  /**
    CircleLayer is a style layer that renders one or more filled circles on the map.
  **/

  class CircleLayer extends Component<CircleLayerProps> {}

  /**
    FillExtrusionLayer is a style layer that renders one or more 3D extruded polygons on the map.
  **/

  class FillExtrusionLayer extends Component<FillExtrusionLayerProps> {}

  /**
    FillLayer is a style layer that renders one or more filled (and optionally stroked) polygons on the map.
  **/

  class FillLayer extends Component<FillLayerProps> {}

  /**
    HeatmapLayer is a style layer that renders one or more filled circles on the map.
  **/

  class HeatmapLayer extends Component<HeatmapLayerProps> {}

  /**
    ImageSource is a content source that is used for a georeferenced raster image to be shown on the map.
The georeferenced image scales and rotates as the user zooms and rotates the map
  **/

  class ImageSource extends Component<ImageSourceProps> {}

  /**
    Light represents the light source for extruded geometries
  **/

  class Light extends Component<LightProps> {}

  /**
    LineLayer is a style layer that renders one or more stroked polylines on the map.
  **/

  class LineLayer extends Component<LineLayerProps> {}

  /**
    MapView backed by Mapbox Native GL
  **/

  class MapView extends Component<MapViewProps> {
    /**
    Converts a geographic coordinate to a point in the given view’s coordinate system.
    **/

    getPointInView(
      coordinate: [number, number]
    ): Promise<any /* {"name":"Array"} */>;

    /**
    Converts a point in the given view’s coordinate system to a geographic coordinate.
    **/

    getCoordinateFromView(
      point: [number, number]
    ): Promise<any /* {"name":"Array"} */>;

    /**
    The coordinate bounds(ne, sw) visible in the users’s viewport.
    **/

    getVisibleBounds(): Promise<any /* {"name":"Array"} */>;

    /**
    Returns an array of rendered map features that intersect with a given point.
    **/

    queryRenderedFeaturesAtPoint(
      coordinate: [number, number],
      filter?: Expression,
      layerIDs?: any /* {"name":"Array"} */
    ): Promise<any /* {"name":"FeatureCollection"} */>;

    /**
    Returns an array of rendered map features that intersect with the given rectangle,
restricted to the given style layers and filtered by the given predicate.
    **/

    queryRenderedFeaturesInRect(
      bbox: number[],
      filter?: Expression,
      layerIDs?: any /* {"name":"Array"} */
    ): Promise<any /* {"name":"FeatureCollection"} */>;

    /**
    Map camera will perform updates based on provided config. Deprecated use Camera#setCamera.
    **/

    setCamera(config: any /* undefined */): void;

    /**
    Takes snapshot of map with current tiles and returns a URI to the image
@param  {Boolean} writeToDisk If true will create a temp file, otherwise it is in base64
@return {String}
    **/

    takeSnap(writeToDisk: boolean): Promise<string>;

    /**
    Returns the current zoom of the map view.
    **/

    getZoom(): Promise<number>;

    /**
    Returns the map's geographical centerpoint
    **/

    getCenter(): Promise<number[]>;

    /**
    Show the attribution and telemetry action sheet.
If you implement a custom attribution button, you should add this action to the button.
    **/

    showAttribution(): void;
  }

  /**
    PointAnnotation represents a one-dimensional shape located at a single geographical coordinate.
  **/

  class PointAnnotation extends Component<PointAnnotationProps> {}

  /**
    
  **/

  class RasterLayer extends Component<RasterLayerProps> {}

  /**
    RasterSource is a map content source that supplies raster image tiles to be shown on the map.
The location of and metadata about the tiles are defined either by an option dictionary
or by an external file that conforms to the TileJSON specification.
  **/

  class RasterSource extends Component<RasterSourceProps> {}

  /**
    ShapeSource is a map content source that supplies vector shapes to be shown on the map.
The shape may be a url or a GeoJSON object
  **/

  class ShapeSource extends Component<ShapeSourceProps> {}

  /**
    SymbolLayer is a style layer that renders icon and text labels at points or along lines on the map.
  **/

  class SymbolLayer extends Component<SymbolLayerProps> {}

  /**
    
  **/

  class UserLocation extends Component<UserLocationProps> {
    /**
    
    **/

    setLocationManager(): void;

    /**
    
    **/

    needsLocationManagerRunning(): void;

    /**
    
    **/

    userIconLayers(): void;
  }

  /**
    VectorSource is a map content source that supplies tiled vector data in Mapbox Vector Tile format to be shown on the map.
The location of and metadata about the tiles are defined either by an option dictionary or by an external file that conforms to the TileJSON specification.
  **/

  class VectorSource extends Component<VectorSourceProps> {}

  /**
    
  **/

  class Annotation extends Component<AnnotationProps> {
    /**
    
    **/

    onPress(): void;

    /**
    
    **/

    symbolStyle(): void;
  }

  /**
    OfflineManager implements a singleton (shared object) that manages offline packs.
All of this class’s instance methods are asynchronous, reflecting the fact that offline resources are stored in a database.
The shared object maintains a canonical collection of offline packs.
  **/

  class offlineManager extends Component {}

  /**
    The snapshotManager generates static raster images of the map.
Each snapshot image depicts a portion of a map defined by an SnapshotOptions object you provide.
The snapshotter generates the snapshot asynchronous.
  **/

  class snapshotManager extends Component {}
}

export default MapboxGL;

type ExpressionArgument = string | number | boolean | Expression;
type ExpressionName = string;
interface Expression {
  [index: number]: ExpressionArgument;
  0: ExpressionName;
}

interface BackgroundLayerProps {
  /**
    A string that uniquely identifies the source in the style to which it is added.
  **/

  id?: string;

  /**
    The source from which to obtain the data to style. If the source has not yet been added to the current style, the behavior is undefined.
  **/

  sourceID?: string;

  /**
    Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.
  **/

  sourceLayerID?: string;

  /**
    Inserts a layer above aboveLayerID.
  **/

  aboveLayerID?: string;

  /**
    Inserts a layer below belowLayerID
  **/

  belowLayerID?: string;

  /**
    Inserts a layer at a specified index
  **/

  layerIndex?: number;

  /**
    Filter only the features in the source layer that satisfy a condition that you define
  **/

  filter?: Expression;

  /**
    The minimum zoom level at which the layer gets parsed and appears.
  **/

  minZoomLevel?: number;

  /**
    The maximum zoom level at which the layer gets parsed and appears.
  **/

  maxZoomLevel?: number;

  /**
    Customizable style attributes
  **/

  style?: any /* "union" */;
}

interface CalloutProps {
  /**
    String that get's displayed in the default callout.
  **/

  title?: string;

  /**
    Style property for the Animated.View wrapper, apply animations to this
  **/

  style?: any;

  /**
    Style property for the native RCTMGLCallout container, set at your own risk.
  **/

  containerStyle?: any;

  /**
    Style property for the content bubble.
  **/

  contentStyle?: any;

  /**
    Style property for the triangle tip under the content.
  **/

  tipStyle?: any;

  /**
    Style property for the title in the content bubble.
  **/

  textStyle?: any;
}

interface CameraProps {
  /**
    FIX ME NO DESCRIPTION
  **/

  animationDuration?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  animationMode?: any /* "enum" */;

  /**
    FIX ME NO DESCRIPTION
  **/

  defaultSettings?: {
    /**
    Center coordinate on map [lng, lat]
  **/

    centerCoordinate?: [number, number];

    /**
    Heading on map
  **/

    heading?: number;

    /**
    Pitch on map
  **/

    pitch?: number;

    /**
    FIX ME NO DESCRIPTION
  **/

    bounds?: {
      /**
    northEastCoordinates - North east coordinate of bound
  **/

      ne: [number, number];

      /**
    southWestCoordinates - North east coordinate of bound
  **/

      sw: [number, number];

      /**
    Left camera padding for bounds
  **/

      paddingLeft?: number;

      /**
    Right camera padding for bounds
  **/

      paddingRight?: number;

      /**
    Top camera padding for bounds
  **/

      paddingTop?: number;

      /**
    Bottom camera padding for bounds
  **/

      paddingBottom?: number;
    };

    /**
    Zoom level of the map
  **/

    zoomLevel?: number;
  };

  /**
    Center coordinate on map [lng, lat]
  **/

  centerCoordinate?: [number, number];

  /**
    Heading on map
  **/

  heading?: number;

  /**
    Pitch on map
  **/

  pitch?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  bounds?: {
    /**
    northEastCoordinates - North east coordinate of bound
  **/

    ne: [number, number];

    /**
    southWestCoordinates - North east coordinate of bound
  **/

    sw: [number, number];

    /**
    Left camera padding for bounds
  **/

    paddingLeft?: number;

    /**
    Right camera padding for bounds
  **/

    paddingRight?: number;

    /**
    Top camera padding for bounds
  **/

    paddingTop?: number;

    /**
    Bottom camera padding for bounds
  **/

    paddingBottom?: number;
  };

  /**
    Zoom level of the map
  **/

  zoomLevel?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  minZoomLevel?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  maxZoomLevel?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  followUserLocation?: boolean;

  /**
    FIX ME NO DESCRIPTION
  **/

  followUserMode?: any /* "enum" */;

  /**
    FIX ME NO DESCRIPTION
  **/

  followZoomLevel?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  followPitch?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  followHeading?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  triggerKey?: any;

  /**
    FIX ME NO DESCRIPTION
  **/

  alignment?: number[];

  /**
    FIX ME NO DESCRIPTION
  **/

  isUserInteraction?: any /* "FIX ME UNKNOWN TYPE" */;
}

interface CircleLayerProps {
  /**
    A string that uniquely identifies the source in the style to which it is added.
  **/

  id?: string;

  /**
    The source from which to obtain the data to style.
If the source has not yet been added to the current style, the behavior is undefined.
  **/

  sourceID?: string;

  /**
    Identifier of the layer within the source identified by the sourceID property
from which the receiver obtains the data to style.
  **/

  sourceLayerID?: string;

  /**
    Inserts a layer above aboveLayerID.
  **/

  aboveLayerID?: string;

  /**
    Inserts a layer below belowLayerID
  **/

  belowLayerID?: string;

  /**
    Inserts a layer at a specified index
  **/

  layerIndex?: number;

  /**
    Filter only the features in the source layer that satisfy a condition that you define
  **/

  filter?: Expression;

  /**
    The minimum zoom level at which the layer gets parsed and appears.
  **/

  minZoomLevel?: number;

  /**
    The maximum zoom level at which the layer gets parsed and appears.
  **/

  maxZoomLevel?: number;

  /**
    Customizable style attributes
  **/

  style?: any /* "union" */;
}

interface FillExtrusionLayerProps {
  /**
    A string that uniquely identifies the source in the style to which it is added.
  **/

  id?: string;

  /**
    The source from which to obtain the data to style. If the source has not yet been added to the current style, the behavior is undefined.
  **/

  sourceID?: string;

  /**
    Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.
  **/

  sourceLayerID?: string;

  /**
    Inserts a layer above aboveLayerID.
  **/

  aboveLayerID?: string;

  /**
    Inserts a layer below belowLayerID
  **/

  belowLayerID?: string;

  /**
    Inserts a layer at a specified index
  **/

  layerIndex?: number;

  /**
    Filter only the features in the source layer that satisfy a condition that you define
  **/

  filter?: Expression;

  /**
    The minimum zoom level at which the layer gets parsed and appears.
  **/

  minZoomLevel?: number;

  /**
    The maximum zoom level at which the layer gets parsed and appears.
  **/

  maxZoomLevel?: number;

  /**
    Customizable style attributes
  **/

  style?: any /* "union" */;
}

interface FillLayerProps {
  /**
    A string that uniquely identifies the source in the style to which it is added.
  **/

  id?: string;

  /**
    The source from which to obtain the data to style. If the source has not yet been added to the current style, the behavior is undefined.
  **/

  sourceID?: string;

  /**
    Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.
  **/

  sourceLayerID?: string;

  /**
    Inserts a layer above aboveLayerID.
  **/

  aboveLayerID?: string;

  /**
    Inserts a layer below belowLayerID
  **/

  belowLayerID?: string;

  /**
    Inserts a layer at a specified index
  **/

  layerIndex?: number;

  /**
    Filter only the features in the source layer that satisfy a condition that you define
  **/

  filter?: Expression;

  /**
    The minimum zoom level at which the layer gets parsed and appears.
  **/

  minZoomLevel?: number;

  /**
    The maximum zoom level at which the layer gets parsed and appears.
  **/

  maxZoomLevel?: number;

  /**
    Customizable style attributes
  **/

  style?: any /* "union" */;
}

interface HeatmapLayerProps {
  /**
    A string that uniquely identifies the source in the style to which it is added.
  **/

  id?: string;

  /**
    The source from which to obtain the data to style.
If the source has not yet been added to the current style, the behavior is undefined.
  **/

  sourceID?: string;

  /**
    Identifier of the layer within the source identified by the sourceID property
from which the receiver obtains the data to style.
  **/

  sourceLayerID?: string;

  /**
    Inserts a layer above aboveLayerID.
  **/

  aboveLayerID?: string;

  /**
    Inserts a layer below belowLayerID
  **/

  belowLayerID?: string;

  /**
    Inserts a layer at a specified index
  **/

  layerIndex?: number;

  /**
    Filter only the features in the source layer that satisfy a condition that you define
  **/

  filter?: Expression;

  /**
    The minimum zoom level at which the layer gets parsed and appears.
  **/

  minZoomLevel?: number;

  /**
    The maximum zoom level at which the layer gets parsed and appears.
  **/

  maxZoomLevel?: number;

  /**
    Customizable style attributes
  **/

  style?: any /* "union" */;
}

interface ImageSourceProps {
  /**
    A string that uniquely identifies the source.
  **/

  id?: string;

  /**
    An HTTP(S) URL, absolute file URL, or local file URL to the source image.
Gifs are currently not supported.
  **/

  url?: any /* "union" */;

  /**
    The top left, top right, bottom right, and bottom left coordinates for the image.
  **/

  coordinates: [[number, number], [number, number]];
}

interface LightProps {
  /**
    Customizable style attributes
  **/

  style?: any /* "custom" */;
}

interface LineLayerProps {
  /**
    A string that uniquely identifies the source in the style to which it is added.
  **/

  id?: string;

  /**
    The source from which to obtain the data to style.
If the source has not yet been added to the current style, the behavior is undefined.
  **/

  sourceID?: string;

  /**
    Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.
  **/

  sourceLayerID?: string;

  /**
    Inserts a layer above aboveLayerID.
  **/

  aboveLayerID?: string;

  /**
    Inserts a layer below belowLayerID
  **/

  belowLayerID?: string;

  /**
    Inserts a layer at a specified index
  **/

  layerIndex?: number;

  /**
    Filter only the features in the source layer that satisfy a condition that you define
  **/

  filter?: Expression;

  /**
    The minimum zoom level at which the layer gets parsed and appears.
  **/

  minZoomLevel?: number;

  /**
    The maximum zoom level at which the layer gets parsed and appears.
  **/

  maxZoomLevel?: number;

  /**
    Customizable style attributes
  **/

  style?: any /* "union" */;
}

interface MapViewProps {
  /**
    Shows the users location on the map
  **/

  showUserLocation?: boolean;

  /**
    The mode used to track the user location on the map
  **/

  userTrackingMode?: number;

  /**
    The vertical alignment of the user location within in map. This is only enabled while tracking the users location.
  **/

  userLocationVerticalAlignment?: number;

  /**
    The distance from the edges of the map view’s frame to the edges of the map view’s logical viewport.
  **/

  contentInset?: any /* "union" */;

  /**
    Style for wrapping React Native View
  **/

  style?: any;

  /**
    Style URL for map
  **/

  styleURL?: string;

  /**
    Automatically change the language of the map labels to the system’s preferred language,
this is not something that can be toggled on/off
  **/

  localizeLabels?: boolean;

  /**
    Enable/Disable zoom on the map
  **/

  zoomEnabled?: boolean;

  /**
    Enable/Disable scroll on the map
  **/

  scrollEnabled?: boolean;

  /**
    Enable/Disable pitch on map
  **/

  pitchEnabled?: boolean;

  /**
    Enable/Disable rotation on map
  **/

  rotateEnabled?: boolean;

  /**
    The Mapbox terms of service, which governs the use of Mapbox-hosted vector tiles and styles,
[requires](https://www.mapbox.com/help/how-attribution-works/) these copyright notices to accompany any map that features Mapbox-designed styles, OpenStreetMap data, or other Mapbox data such as satellite or terrain data.
If that applies to this map view, do not hide this view or remove any notices from it.

You are additionally [required](https://www.mapbox.com/help/how-mobile-apps-work/#telemetry) to provide users with the option to disable anonymous usage and location sharing (telemetry).
If this view is hidden, you must implement this setting elsewhere in your app. See our website for [Android](https://www.mapbox.com/android-docs/map-sdk/overview/#telemetry-opt-out) and [iOS](https://www.mapbox.com/ios-sdk/#telemetry_opt_out) for implementation details.

Enable/Disable attribution on map. For iOS you need to add MGLMapboxMetricsEnabledSettingShownInApp=YES
to your Info.plist
  **/

  attributionEnabled?: boolean;

  /**
    Enable/Disable the logo on the map.
  **/

  logoEnabled?: boolean;

  /**
    Enable/Disable the compass from appearing on the map
  **/

  compassEnabled?: boolean;

  /**
    [Android only] Enable/Disable use of GLSurfaceView insted of TextureView.
  **/

  surfaceView?: boolean;

  /**
    Map press listener, gets called when a user presses the map
  **/

  onPress?: any /* "func" */;

  /**
    Map long press listener, gets called when a user long presses the map
  **/

  onLongPress?: any /* "func" */;

  /**
    This event is triggered whenever the currently displayed map region is about to change.
  **/

  onRegionWillChange?: any /* "func" */;

  /**
    This event is triggered whenever the currently displayed map region is changing.
  **/

  onRegionIsChanging?: any /* "func" */;

  /**
    This event is triggered whenever the currently displayed map region finished changing
  **/

  onRegionDidChange?: any /* "func" */;

  /**
    This event is triggered when the map is about to start loading a new map style.
  **/

  onWillStartLoadingMap?: any /* "func" */;

  /**
    This is triggered when the map has successfully loaded a new map style.
  **/

  onDidFinishLoadingMap?: any /* "func" */;

  /**
    This event is triggered when the map has failed to load a new map style.
  **/

  onDidFailLoadingMap?: any /* "func" */;

  /**
    This event is triggered when the map will start rendering a frame.
  **/

  onWillStartRenderingFrame?: any /* "func" */;

  /**
    This event is triggered when the map finished rendering a frame.
  **/

  onDidFinishRenderingFrame?: any /* "func" */;

  /**
    This event is triggered when the map fully finished rendering a frame.
  **/

  onDidFinishRenderingFrameFully?: any /* "func" */;

  /**
    This event is triggered when the map will start rendering the map.
  **/

  onWillStartRenderingMap?: any /* "func" */;

  /**
    This event is triggered when the map finished rendering the map.
  **/

  onDidFinishRenderingMap?: any /* "func" */;

  /**
    This event is triggered when the map fully finished rendering the map.
  **/

  onDidFinishRenderingMapFully?: any /* "func" */;

  /**
    This event is triggered when a style has finished loading.
  **/

  onDidFinishLoadingStyle?: any /* "func" */;

  /**
    The emitted frequency of regionwillchange events
  **/

  regionWillChangeDebounceTime?: number;

  /**
    The emitted frequency of regiondidchange events
  **/

  regionDidChangeDebounceTime?: number;
}

interface PointAnnotationProps {
  /**
    A string that uniquely identifies the annotation
  **/

  id: string;

  /**
    The string containing the annotation’s title. Note this is required to be set if you want to see a callout appear on iOS.
  **/

  title?: string;

  /**
    The string containing the annotation’s snippet(subtitle). Not displayed in the default callout.
  **/

  snippet?: string;

  /**
    Manually selects/deselects annotation
@type {[type]}
  **/

  selected?: boolean;

  /**
    The center point (specified as a map coordinate) of the annotation.
  **/

  coordinate: [number, number];

  /**
    Specifies the anchor being set on a particular point of the annotation.
The anchor point is specified in the continuous space [0.0, 1.0] x [0.0, 1.0],
where (0, 0) is the top-left corner of the image, and (1, 1) is the bottom-right corner.
Note this is only for custom annotations not the default pin view.
Defaults to the center of the view.
  **/

  anchor?: {
    /**
    FIX ME NO DESCRIPTION
  **/

    x: number;

    /**
    FIX ME NO DESCRIPTION
  **/

    y: number;
  };

  /**
    This callback is fired once this annotation is selected. Returns a Feature as the first param.
  **/

  onSelected?: any /* "func" */;

  /**
    This callback is fired once this annotation is deselected.
  **/

  onDeselected?: any /* "func" */;
}

interface RasterLayerProps {
  /**
    A string that uniquely identifies the source in the style to which it is added.
  **/

  id?: string;

  /**
    The source from which to obtain the data to style. If the source has not yet been added to the current style, the behavior is undefined.
  **/

  sourceID?: string;

  /**
    Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.
  **/

  sourceLayerID?: string;

  /**
    Inserts a layer above aboveLayerID.
  **/

  aboveLayerID?: string;

  /**
    Inserts a layer below belowLayerID
  **/

  belowLayerID?: string;

  /**
    Inserts a layer at a specified index
  **/

  layerIndex?: number;

  /**
    Filter only the features in the source layer that satisfy a condition that you define
  **/

  filter?: Expression;

  /**
    The minimum zoom level at which the layer gets parsed and appears.
  **/

  minZoomLevel?: number;

  /**
    The maximum zoom level at which the layer gets parsed and appears.
  **/

  maxZoomLevel?: number;

  /**
    Customizable style attributes
  **/

  style?: any /* "union" */;
}

interface RasterSourceProps {
  /**
    A string that uniquely identifies the source.
  **/

  id?: string;

  /**
    A URL to a TileJSON configuration file describing the source’s contents and other metadata.
  **/

  url?: string;

  /**
    An unsigned integer that specifies the minimum zoom level at which to display tiles from the source.
The value should be between 0 and 22, inclusive, and less than
maxZoomLevel, if specified. The default value for this option is 0.
  **/

  minZoomLevel?: number;

  /**
    An unsigned integer that specifies the maximum zoom level at which to display tiles from the source.
The value should be between 0 and 22, inclusive, and less than
minZoomLevel, if specified. The default value for this option is 22.
  **/

  maxZoomLevel?: number;

  /**
    Size of the map tiles.
Mapbox urls default to 256, all others default to 512.
  **/

  tileSize?: number;

  /**
    Influences the y direction of the tile coordinates. (tms inverts y axis)
  **/

  tms?: boolean;

  /**
    An HTML or literal text string defining the buttons to be displayed in an action sheet when the
source is part of a map view’s style and the map view’s attribution button is pressed.
  **/

  attribution?: string;
}

interface ShapeSourceProps {
  /**
    A string that uniquely identifies the source.
  **/

  id?: string;

  /**
    An HTTP(S) URL, absolute file URL, or local file URL relative to the current application’s resource bundle.
  **/

  url?: string;

  /**
    The contents of the source. A shape can represent a GeoJSON geometry, a feature, or a feature colllection.
  **/

  shape?: any /* "object" */;

  /**
    Enables clustering on the source for point shapes.
  **/

  cluster?: boolean;

  /**
    Specifies the radius of each cluster if clustering is enabled.
A value of 512 produces a radius equal to the width of a tile.
The default value is 50.
  **/

  clusterRadius?: number;

  /**
    Specifies the maximum zoom level at which to cluster points if clustering is enabled.
Defaults to one zoom level less than the value of maxZoomLevel so that, at the maximum zoom level,
the shapes are not clustered.
  **/

  clusterMaxZoomLevel?: number;

  /**
    Specifies the maximum zoom level at which to create vector tiles.
A greater value produces greater detail at high zoom levels.
The default value is 18.
  **/

  maxZoomLevel?: number;

  /**
    Specifies the size of the tile buffer on each side.
A value of 0 produces no buffer. A value of 512 produces a buffer as wide as the tile itself.
Larger values produce fewer rendering artifacts near tile edges and slower performance.
The default value is 128.
  **/

  buffer?: number;

  /**
    Specifies the Douglas-Peucker simplification tolerance.
A greater value produces simpler geometries and improves performance.
The default value is 0.375.
  **/

  tolerance?: number;

  /**
    Specifies the external images in key-value pairs required for the shape source.
If you have an asset under Image.xcassets on iOS and the drawables directory on android
you can specify an array of string names with assets as the key `{ assets: ['pin'] }`.
  **/

  images?: any /* "object" */;

  /**
    Source press listener, gets called when a user presses one of the children layers only
if that layer has a higher z-index than another source layers
  **/

  onPress?: any /* "func" */;

  /**
    Overrides the default touch hitbox(44x44 pixels) for the source layers
  **/

  hitbox?: {
    /**
    FIX ME NO DESCRIPTION
  **/

    width: number;

    /**
    FIX ME NO DESCRIPTION
  **/

    height: number;
  };
}

interface SymbolLayerProps {
  /**
    A string that uniquely identifies the source in the style to which it is added.
  **/

  id?: string;

  /**
    The source from which to obtain the data to style. If the source has not yet been added to the current style, the behavior is undefined.
  **/

  sourceID?: string;

  /**
    Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.
  **/

  sourceLayerID?: string;

  /**
    Inserts a layer above aboveLayerID.
  **/

  aboveLayerID?: string;

  /**
    Inserts a layer below belowLayerID
  **/

  belowLayerID?: string;

  /**
    Inserts a layer at a specified index
  **/

  layerIndex?: number;

  /**
    Filter only the features in the source layer that satisfy a condition that you define
  **/

  filter?: Expression;

  /**
    The minimum zoom level at which the layer gets parsed and appears.
  **/

  minZoomLevel?: number;

  /**
    The maximum zoom level at which the layer gets parsed and appears.
  **/

  maxZoomLevel?: number;

  /**
    Customizable style attributes
  **/

  style?: any /* "union" */;
}

interface UserLocationProps {
  /**
    FIX ME NO DESCRIPTION
  **/

  animated?: boolean;

  /**
    FIX ME NO DESCRIPTION
  **/

  renderMode?: any /* "enum" */;

  /**
    FIX ME NO DESCRIPTION
  **/

  visible?: boolean;

  /**
    FIX ME NO DESCRIPTION
  **/

  onPress?: any /* "func" */;

  /**
    FIX ME NO DESCRIPTION
  **/

  onUpdate?: any /* "func" */;

  /**
    FIX ME NO DESCRIPTION
  **/

  children?: any;
}

interface VectorSourceProps {
  /**
    A string that uniquely identifies the source.
  **/

  id?: string;

  /**
    A URL to a TileJSON configuration file describing the source’s contents and other metadata.
  **/

  url?: string;

  /**
    Source press listener, gets called when a user presses one of the children layers only
if that layer has a higher z-index than another source layers
  **/

  onPress?: any /* "func" */;

  /**
    Overrides the default touch hitbox(44x44 pixels) for the source layers
  **/

  hitbox?: {
    /**
    FIX ME NO DESCRIPTION
  **/

    width: number;

    /**
    FIX ME NO DESCRIPTION
  **/

    height: number;
  };
}

interface AnnotationProps {
  /**
    FIX ME NO DESCRIPTION
  **/

  id: string;

  /**
    FIX ME NO DESCRIPTION
  **/

  animated?: boolean;

  /**
    FIX ME NO DESCRIPTION
  **/

  animationDuration?: number;

  /**
    FIX ME NO DESCRIPTION
  **/

  animationEasingFunction?: any /* "func" */;

  /**
    FIX ME NO DESCRIPTION
  **/

  coordinates?: [number, number];

  /**
    FIX ME NO DESCRIPTION
  **/

  onPress?: any /* "func" */;

  /**
    FIX ME NO DESCRIPTION
  **/

  icon?: any /* "union" */;
}
