// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

export const threeDee = {
  color: "Color",
  colorMode: "Color mode",
  frame: "Frame",
  lineWidth: "Line width",
  position: "Position",
  reset: "Reset",
  rotation: "Rotation",

  // Frame
  age: "Age",
  axisScale: "Axis scale",
  displayFrame: "Display frame",
  displayFrameHelp:
    "The coordinate frame to place the camera in. The camera position and orientation will be relative to the origin of this frame.",
  editable: "Editable",
  enablePreloading: "Enable preloading",
  fixed: "Fixed",
  followMode: "Follow mode",
  followModeHelp: "Change the camera behavior during playback to follow the display frame or not.",
  frameNotFound: "Frame {{frameId}} not found",
  hideAll: "Hide all",
  historySize: "History size",
  labels: "Labels",
  labelSize: "Label size",
  lineColor: "Line color",
  noCoordinateFramesFound: "No coordinate frames found",
  parent: "Parent",
  pose: "Pose",
  rotationOffset: "Rotation offset",
  settings: "Settings",
  showAll: "Show all",
  transforms: "Transforms",
  translation: "Translation",
  translationOffset: "Translation offset",

  // Scene
  background: "Background",
  debugPicking: "Debug picking",
  ignoreColladaUpAxis: "Ignore COLLADA <up_axis>",
  ignoreColladaUpAxisHelp:
    "Match the behavior of rviz by ignoring the <up_axis> tag in COLLADA files",
  labelScale: "Label scale",
  labelScaleHelp: "Scale factor to apply to all labels",
  meshUpAxis: "Mesh up axis",
  meshUpAxisHelp:
    "The direction to use as “up” when loading meshes without orientation info (STL and OBJ)",
  renderStats: "Render stats",
  scene: "Scene",
  takeEffectAfterReboot: "This setting requires a restart to take effect",
  YUp: "Y-up",
  ZUp: "Z-up",

  // Camera
  distance: "Distance",
  far: "Far",
  fovy: "Y-Axis FOV",
  near: "Near",
  perspective: "Perspective",
  phi: "Phi",
  planarProjectionFactor: "Planar projection factor",
  syncCamera: "Sync camera",
  syncCameraHelp: "Sync the camera with other panels that also have this setting enabled.",
  target: "Target",
  theta: "Theta",
  view: "View",

  // Topics
  topics: "Topics",

  // Custom layers
  addGrid: "Add Grid",
  addURDF: "Add URDF",
  customLayers: "Custom layers",
  delete: "Delete",
  divisions: "Divisions",
  grid: "Grid",
  size: "Size",

  // Image annotations
  imageAnnotations: "Image annotations",
  resetView: "Reset view",

  // Images
  cameraInfo: "Camera info",

  // Occupancy Grids
  custom: "Custom",
  frameLock: "Frame lock",
  invalidColor: "Invalid color",
  map: "Map",
  maxColor: "Max color",
  minColor: "Min color",
  raw: "Raw",
  unknownColor: "Unknown color",

  // Point Extension Utils
  circle: "Circle",
  decayTime: "Decay time",
  pointShape: "Point shape",
  pointSize: "Point size",
  square: "Square",
  zeroSeconds: "0 seconds",

  // Color Mode
  bgraPacked: "BGRA (packed)",
  bgrPacked: "BGR (packed)",
  colorBy: "Color by",
  colorMap: "Color map",
  flat: "Flat",
  flatColor: "Flat color",
  gradient: "Gradient",
  opacity: "Opacity",
  rgbaSeparateFields: "RGBA (separate fields)",
  valueMax: "Value max",
  valueMin: "Value min",

  // Markers
  selectionVariable: "Selection variable",
  selectionVariableHelp:
    "When selecting a marker, this global variable will be set to the marker ID",
  showOutline: "Show outline",

  // Poses
  arrow: "Arrow",
  axis: "Axis",
  line: "Line",
  covariance: "Covariance",
  covarianceColor: "Covariance color",
  scale: "Scale",
  type: "Type",

  // Publish
  pointOption: "Point (geometry_msgs/Point)",
  poseEstimateOption: "Pose estimate (geometry_msgs/PoseWithCovarianceStamped)",
  poseOption: "Pose (geometry_msgs/PoseStamped)",
  publish: "Publish",
  thetaDeviation: "Theta deviation",
  thetaDeviationHelp: "The theta standard deviation to publish with pose estimates",
  topic: "Topic",
  topicHelp: "The topic on which to publish {{type}}",
  typeHelp: "The type of message to publish when clicking in the scene",
  xDeviation: "X deviation",
  xDeviationHelp: "The X standard deviation to publish with pose estimates",
  yDeviation: "Y deviation",
  yDeviationHelp: "The Y standard deviation to publish with pose estimates",
};
