import { HydrateText, hydrateText } from "hydrate-text";
import get from "lodash/get";

import { SUPPORTED_LANGUAGES_MAP } from "./constants";
import { Dictionary, SupportedLanguage } from "./types";

const textResolver =
  (dictionary: Dictionary): HydrateText =>
  (pathOrText, variables, interpolationOptions) => {
    return hydrateText(
      get(dictionary, pathOrText, pathOrText),
      variables,
      interpolationOptions,
    );
  };

const isSupportedLanguage = (
  language: string | null,
): language is SupportedLanguage => {
  return Object.values(SUPPORTED_LANGUAGES_MAP).includes(
    language as SupportedLanguage,
  );
};

export { textResolver, isSupportedLanguage };
