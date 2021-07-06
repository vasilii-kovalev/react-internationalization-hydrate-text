const SUPPORTED_LANGUAGES_MAP = {
  en: "en",
  ru: "ru",
  // ... other languages
} as const;

const DEFAULT_SELECTED_LANGUAGE = SUPPORTED_LANGUAGES_MAP.en;

export { DEFAULT_SELECTED_LANGUAGE, SUPPORTED_LANGUAGES_MAP };
