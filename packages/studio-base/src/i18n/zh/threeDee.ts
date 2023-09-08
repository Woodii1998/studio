// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { TypeOptions } from "i18next";

export const threeDee: Partial<TypeOptions["resources"]["threeDee"]> = {
  color: "颜色",
  colorMode: "颜色模式",
  frame: "参考系",
  lineWidth: "线宽",
  position: "位置",
  reset: "重置",
  rotation: "旋转",

  // Frame
  age: "陈旧度",
  axisScale: "轴比例",
  displayFrame: "展示参考系",
  displayFrameHelp: "放置相机用于显示坐标系。相机的位置和方向将相对于该坐标系的原点。",
  editable: "可编辑",
  enablePreloading: "启用预加载",
  fixed: "固定",
  followMode: "跟踪模式",
  followModeHelp: "更改回放期间相机的行为，是否跟踪显示坐标系。",
  frameNotFound: "未找到参考系 {{frameId}}",
  hideAll: "隐藏全部",
  historySize: "历史长度",
  labels: "标签",
  labelSize: "标签大小",
  lineColor: "线颜色",
  noCoordinateFramesFound: "未找到坐标系",
  parent: "父变换",
  pose: "姿态",
  rotationOffset: "旋转偏移",
  settings: "设置",
  showAll: "显示全部",
  transforms: "变换",
  translation: "平移",
  translationOffset: "平移偏移",

  // Scene
  background: "背景",
  debugPicking: "调试拾取",
  ignoreColladaUpAxis: "忽略 COLLADA 的 <up_axis>",
  ignoreColladaUpAxisHelp: "通过忽略 COLLADA 文件中的 <up_axis> 标记，匹配 rviz 的行为",
  labelScale: "标签比例",
  labelScaleHelp: "应用于所有标签的比例因子",
  meshUpAxis: "网格上轴",
  meshUpAxisHelp: "加载缺少方向信息的网格（STL 和 OBJ）时使用的“上”方向",
  renderStats: "渲染统计",
  scene: "场景",
  takeEffectAfterReboot: "此设置需要重新启动以生效",
  YUp: "Y-up",
  ZUp: "Z-up",

  // Camera
  distance: "距离",
  far: "远面",
  fovy: "Y轴视野",
  near: "近面",
  perspective: "透视",
  phi: "方向角",
  planarProjectionFactor: "平面投影因子",
  syncCamera: "同步相机",
  syncCameraHelp: "将相机与其他启用此设置的面板同步。",
  target: "目标",
  theta: "极角",
  view: "视图",

  // Topics
  topics: "话题",

  // Custom layers
  addGrid: "添加网格",
  addURDF: "添加 URDF",
  customLayers: "自定义图层",
  delete: "删除",
  divisions: "划分",
  grid: "网格",
  size: "大小",

  // Image annotations
  imageAnnotations: "图像注释",
  resetView: "重置视图",

  // Images
  cameraInfo: "相机信息",

  // Occupancy Grids
  custom: "自定义",
  frameLock: "锁定参考系",
  invalidColor: "无效值颜色",
  map: "映射",
  maxColor: "最大值颜色",
  minColor: "最小值颜色",
  raw: "原始",
  unknownColor: "未知值颜色",

  // Point Extension Utils
  circle: "圆形",
  decayTime: "衰减时间",
  pointShape: "点形状",
  pointSize: "点大小",
  square: "方形",
  zeroSeconds: "0 秒",

  // Color Mode
  bgraPacked: "BGRA （堆积）",
  bgrPacked: "BGR （堆积）",
  colorBy: "颜色映射",
  colorMap: "颜色映射",
  flat: "单色",
  flatColor: "单色",
  gradient: "渐变",
  opacity: "透明度",
  rgbaSeparateFields: "RGBA （独立字段）",
  valueMax: "最大值",
  valueMin: "最小值",

  // Markers
  selectionVariable: "选择变量",
  selectionVariableHelp: "选择标记时，该全局变量将被设置为标记 ID",
  showOutline: "展示轮廓",

  // Poses
  arrow: "箭头",
  axis: "轴",
  line: undefined,
  covariance: "协方差",
  covarianceColor: "协方差颜色",
  scale: "刻度",
  type: "类型",

  // Publish
  pointOption: "点 (geometry_msgs/Point)",
  poseEstimateOption: "姿态估计 (geometry_msgs/PoseWithCovarianceStamped)",
  poseOption: "姿态 (geometry_msgs/PoseStamped)",
  publish: "发布",
  thetaDeviation: "Theta 偏差",
  thetaDeviationHelp: "与姿势估计值一起发布的 Theta 标准偏差",
  topic: "话题",
  topicHelp: "发布{{type}}的主题",
  typeHelp: "在场景中点击时要发布的信息类型",
  xDeviation: "X 偏差",
  xDeviationHelp: "与姿势估计值一起公布的 X 标准偏差",
  yDeviation: "Y 偏差",
  yDeviationHelp: "与姿势估计值一起发布的 Y 标准偏差",
};
