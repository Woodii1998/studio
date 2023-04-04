// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { t } from "i18next";
import { cloneDeep, set } from "lodash";

import { SettingsTreeAction } from "@foxglove/studio";

import { Renderer } from "../Renderer";
import { SceneExtension } from "../SceneExtension";
import { SettingsTreeEntry } from "../SettingsManager";
import { DEFAULT_CAMERA_STATE } from "../camera";
import { PRECISION_DEGREES, PRECISION_DISTANCE } from "../settings";

export class CameraStateSettings extends SceneExtension {
  public constructor(renderer: Renderer) {
    super("foxglove.CameraStateSettings", renderer);

    renderer.on("cameraMove", this.handleCameraMove);
    renderer.settings.errors.on("update", this.handleErrorChange);
    renderer.settings.errors.on("clear", this.handleErrorChange);
    renderer.settings.errors.on("remove", this.handleErrorChange);
  }

  public override dispose(): void {
    this.renderer.off("cameraMove", this.handleCameraMove);
    this.renderer.settings.errors.off("update", this.handleErrorChange);
    this.renderer.settings.errors.off("clear", this.handleErrorChange);
    this.renderer.settings.errors.off("remove", this.handleErrorChange);
    super.dispose();
  }

  public override settingsNodes(): SettingsTreeEntry[] {
    const config = this.renderer.config;
    const { cameraState: camera } = config;
    const handler = this.handleSettingsAction;

    return [
      {
        path: ["cameraState"],
        node: {
          label: t("camera:view"),
          actions: [{ type: "action", id: "reset-camera", label: t("camera:reset") }],
          handler,
          fields: {
            syncCamera: {
              label: t("camera:syncCamera"),
              input: "boolean",
              error: this.renderer.cameraSyncError(),
              value: config.scene.syncCamera ?? false,
              help: t("camera:syncCameraHelp"),
            },
            distance: {
              label: t("camera:distance"),
              input: "number",
              step: 1,
              precision: PRECISION_DISTANCE,
              value: camera.distance,
            },
            perspective: {
              label: t("camera:perspective"),
              input: "boolean",
              value: camera.perspective,
            },
            targetOffset: {
              label: t("camera:target"),
              input: "vec3",
              labels: ["X", "Y", "Z"],
              precision: PRECISION_DISTANCE,
              value: [...camera.targetOffset],
            },
            thetaOffset: {
              label: t("camera:theta"),
              input: "number",
              step: 1,
              precision: PRECISION_DEGREES,
              value: camera.thetaOffset,
            },
            ...(camera.perspective && {
              phi: {
                label: t("camera:phi"),
                input: "number",
                step: 1,
                precision: PRECISION_DEGREES,
                value: camera.phi,
              },
              fovy: {
                label: t("camera:fovy"),
                input: "number",
                step: 1,
                precision: PRECISION_DEGREES,
                value: camera.fovy,
              },
            }),
            near: {
              label: t("camera:near"),
              input: "number",
              step: DEFAULT_CAMERA_STATE.near,
              precision: PRECISION_DISTANCE,
              value: camera.near,
            },
            far: {
              label: t("camera:far"),
              input: "number",
              step: 1,
              precision: PRECISION_DISTANCE,
              value: camera.far,
            },
          },
        },
      },
    ];
  }

  public override handleSettingsAction = (action: SettingsTreeAction): void => {
    if (action.action === "perform-node-action" && action.payload.id === "reset-camera") {
      this.renderer.updateConfig((draft) => {
        draft.cameraState = cloneDeep(DEFAULT_CAMERA_STATE);
      });
      this.updateSettingsTree();
      return;
    }

    if (action.action !== "update" || action.payload.path.length === 0) {
      return;
    }

    const path = action.payload.path;
    const category = path[0]!;
    const value = action.payload.value;
    if (category === "cameraState") {
      if (path[1] === "syncCamera") {
        // Update the configuration. This is done manually since syncCamera is under `scene`, not `cameraState`
        this.renderer.updateConfig((draft) => {
          draft.scene.syncCamera = value as boolean;
        });
      } else {
        this.renderer.updateConfig((draft) => set(draft, path, value));
      }
    } else {
      return;
    }

    // Update the settings sidebar
    this.updateSettingsTree();
  };

  private handleCameraMove = (): void => {
    this.updateSettingsTree();
  };
  private handleErrorChange = (): void => {
    this.updateSettingsTree();
  };
}
