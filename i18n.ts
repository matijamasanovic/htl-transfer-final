// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import me from "./locales/me/translation.json";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, me: { translation: me } },
  lng: "en", // default
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
