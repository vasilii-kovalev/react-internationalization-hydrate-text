import { SUPPORTED_LANGUAGES_MAP } from "./constants";
import { dictionary } from "./dictionary";

type Keys<Type> = keyof Type;

type Values<Type> = Type[Keys<Type>];

/*
  Turns particular string values into abstract 'string' type.
  It allows to type translations with I18nPaths subtypes, because otherwise
  TypeScript will be complaining that values of translations are not the same
  as paths ones.
*/
type GetDictionary<Type> = Type extends string
  ? string
  : { [Path in Keys<Type>]: GetDictionary<Type[Path]> };

type Dictionary = GetDictionary<typeof dictionary>;

type SupportedLanguage = Values<typeof SUPPORTED_LANGUAGES_MAP>;

type Dictionaries = {
  [Language in SupportedLanguage]: Dictionary;
};

export type { Dictionaries, Dictionary, SupportedLanguage };
