import { HydrateText } from "hydrate-text";
import * as React from "react";

import { DEFAULT_SELECTED_LANGUAGE } from "./constants";
import { SupportedLanguage } from "./types";
import { isSupportedLanguage, textResolver } from "./utils";
import { dictionaries } from "./dictionaries";

interface I18nContextInterface {
  selectedLanguage: SupportedLanguage;
  setLanguage: (newSelectedLanguage: SupportedLanguage) => void;
  translate: HydrateText;
}

const I18nContext = React.createContext<I18nContextInterface>({
  selectedLanguage: DEFAULT_SELECTED_LANGUAGE,
  setLanguage: () => {
    // no-op
  },
  translate: () => "",
});

const I18nProvider: React.FC = ({ children }) => {
  const [selectedLanguage, setLanguage] = React.useState<SupportedLanguage>(
    DEFAULT_SELECTED_LANGUAGE,
  );

  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const language = searchParams.get("lng");

    if (isSupportedLanguage(language)) {
      setLanguage(language);
    }
  }, []);

  const translate = React.useMemo(
    () => textResolver(dictionaries[selectedLanguage]),
    [selectedLanguage],
  );

  return (
    <I18nContext.Provider
      value={{
        selectedLanguage,
        setLanguage,
        translate,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

const useI18n = (): I18nContextInterface => {
  return React.useContext(I18nContext);
};

export { I18nContext, I18nProvider, useI18n };
