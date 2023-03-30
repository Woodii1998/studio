// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/
import { t } from "i18next";

import { PanelInfo } from "@foxglove/studio-base/context/PanelCatalogContext";
import { TAB_PANEL_TYPE } from "@foxglove/studio-base/util/globalConstants";

import dataSourceInfoThumbnail from "./DataSourceInfo/thumbnail.png";
import gaugeThumbnail from "./Gauge/thumbnail.png";
import imageViewThumbnail from "./Image/thumbnail.png";
import indicatorThumbnail from "./Indicator/thumbnail.png";
import logThumbnail from "./Log/thumbnail.png";
import mapThumbnail from "./Map/thumbnail.png";
import nodePlaygroundThumbnail from "./NodePlayground/thumbnail.png";
import parametersThumbnail from "./Parameters/thumbnail.png";
import plotThumbnail from "./Plot/thumbnail.png";
import publishThumbnail from "./Publish/thumbnail.png";
import rawMessagesThumbnail from "./RawMessages/thumbnail.png";
import stateTransitionsThumbnail from "./StateTransitions/thumbnail.png";
import tabThumbnail from "./Tab/thumbnail.png";
import tableThumbnail from "./Table/thumbnail.png";
import teleopThumbnail from "./Teleop/thumbnail.png";
import threeDeeRenderThumbnail from "./ThreeDeeRender/thumbnail.png";
import topicGraphThumbnail from "./TopicGraph/thumbnail.png";
import variableSliderThumbnail from "./VariableSlider/thumbnail.png";
import diagnosticStatusThumbnail from "./diagnostics/thumbnails/diagnostic-status.png";
import diagnosticSummaryThumbnail from "./diagnostics/thumbnails/diagnostic-summary.png";

export const getBuiltin: () => PanelInfo[] = () => [
  {
    title: t("addPanel:3D"),
    type: "3D",
    description: t("addPanel:3DPanelDescription"),
    thumbnail: threeDeeRenderThumbnail,
    module: async () => ({ default: (await import("./ThreeDeeRender")).ThreeDeePanel }),
    settingsOnboardingTooltip: t("addPanel:3DPanelSettingsOnboardingTooltip"),
  },
  {
    title: t("addPanel:ROSDiagnosticsDetail"),
    type: "DiagnosticStatusPanel",
    description: t("addPanel:ROSDiagnosticsDetailDescription"),
    thumbnail: diagnosticStatusThumbnail,
    module: async () => await import("./diagnostics/DiagnosticStatusPanel"),
    hasCustomToolbar: true,
  },
  {
    title: t("addPanel:ROSDiagnosticSummary"),
    type: "DiagnosticSummary",
    description: t("addPanel:ROSDiagnosticSummaryDescription"),
    thumbnail: diagnosticSummaryThumbnail,
    module: async () => await import("./diagnostics/DiagnosticSummary"),
    hasCustomToolbar: true,
  },
  {
    title: t("addPanel:image"),
    type: "ImageViewPanel",
    description: t("addPanel:imageDescription"),
    thumbnail: imageViewThumbnail,
    module: async () => await import("./Image"),
  },
  {
    title: t("addPanel:indicator"),
    type: "Indicator",
    description: t("addPanel:indicatorDescription"),
    thumbnail: indicatorThumbnail,
    module: async () => await import("./Indicator"),
  },
  {
    title: t("addPanel:gauge"),
    type: "Gauge",
    description: t("addPanel:gaugeDescription"),
    thumbnail: gaugeThumbnail,
    module: async () => await import("./Gauge"),
  },
  {
    title: t("addPanel:teleop"),
    type: "Teleop",
    description: t("addPanel:teleopDescription"),
    thumbnail: teleopThumbnail,
    module: async () => await import("./Teleop"),
  },
  {
    title: t("addPanel:map"),
    type: "map",
    description: t("addPanel:mapDescription"),
    thumbnail: mapThumbnail,
    module: async () => await import("./Map"),
  },
  {
    title: t("addPanel:parameters"),
    type: "Parameters",
    description: t("addPanel:parametersDescription"),
    thumbnail: parametersThumbnail,
    module: async () => await import("./Parameters"),
  },
  {
    title: t("addPanel:plot"),
    type: "Plot",
    description: t("addPanel:plotDescription"),
    thumbnail: plotThumbnail,
    module: async () => await import("./Plot"),
  },
  {
    title: t("addPanel:publish"),
    type: "Publish",
    description: t("addPanel:publishDescription"),
    thumbnail: publishThumbnail,
    module: async () => await import("./Publish"),
  },
  {
    title: t("addPanel:rawMessages"),
    type: "RawMessages",
    description: t("addPanel:rawMessagesDescription"),
    thumbnail: rawMessagesThumbnail,
    module: async () => await import("./RawMessages"),
    hasCustomToolbar: true,
  },
  {
    title: t("addPanel:log"),
    type: "RosOut",
    description: t("addPanel:logDescription"),
    thumbnail: logThumbnail,
    module: async () => await import("./Log"),
    hasCustomToolbar: true,
  },
  {
    title: t("addPanel:stateTransitions"),
    type: "StateTransitions",
    description: t("addPanel:stateTransitionsDescription"),
    thumbnail: stateTransitionsThumbnail,
    module: async () => await import("./StateTransitions"),
  },
  {
    title: t("addPanel:table"),
    type: "Table",
    description: t("addPanel:tableDescription"),
    thumbnail: tableThumbnail,
    module: async () => await import("./Table"),
    hasCustomToolbar: true,
  },
  {
    title: t("addPanel:topicGraph"),
    type: "TopicGraph",
    description: t("addPanel:topicGraphDescription"),
    thumbnail: topicGraphThumbnail,
    module: async () => await import("./TopicGraph"),
  },
  {
    title: t("addPanel:dataSourceInfo"),
    type: "SourceInfo",
    description: t("addPanel:dataSourceInfoDescription"),
    thumbnail: dataSourceInfoThumbnail,
    module: async () => await import("./DataSourceInfo"),
  },
  {
    title: t("addPanel:variableSlider"),
    type: "GlobalVariableSliderPanel",
    description: t("addPanel:variableSliderDescription"),
    thumbnail: variableSliderThumbnail,
    module: async () => await import("./VariableSlider"),
  },
  {
    title: t("addPanel:userScripts"),
    type: "NodePlayground",
    description: t("addPanel:userScriptsDescription"),
    thumbnail: nodePlaygroundThumbnail,
    module: async () => await import("./NodePlayground"),
  },
  {
    title: t("addPanel:tab"),
    type: TAB_PANEL_TYPE,
    description: t("addPanel:tabDescription"),
    thumbnail: tabThumbnail,
    module: async () => await import("./Tab"),
    hasCustomToolbar: true,
  },
];

export const getDebug: () => PanelInfo[] = () => [
  {
    title: t("addPanel:studioPlaybackPerformance"),
    type: "PlaybackPerformance",
    description: t("addPanel:studioPlaybackPerformanceDescription"),
    module: async () => await import("./PlaybackPerformance"),
  },
];

export const getLegacyPlot: () => PanelInfo = () => ({
  title: t("addPanel:legacyPlot"),
  type: "LegacyPlot",
  module: async () => await import("./LegacyPlot"),
});

export const getNewImage: () => PanelInfo = () => ({
  title: t("addPanel:3DImage"),
  type: "Image",
  module: async () => ({ default: (await import("./ThreeDeeRender")).ImagePanel }),
});
