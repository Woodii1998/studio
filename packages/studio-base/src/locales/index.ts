// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { enPreferences, enGeneral } from "./en";
import { zhPreferences, zhGeneral } from "./zh";

export const translations = {
  en: {
    preferences: enPreferences,
    general: enGeneral,
  },
  zh: {
    preferences: zhPreferences,
    general: zhGeneral,
  },
};

export type Locale = keyof typeof translations;