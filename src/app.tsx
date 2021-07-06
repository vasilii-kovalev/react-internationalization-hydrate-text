import * as React from "react";

import { dictionary, useI18n } from "i18n";

const { field } = dictionary.errors.validation;

const App: React.VFC = () => {
  const { translate } = useI18n();

  /*
    "This field should contain at least 10 characters" for English.
    "Это поле должно состоять минимум из 10 символов" for Russian.
  */
  const translatedText = translate(field.length.lessThan, {
    minLength: 10,
  });

  return <h1>{translatedText}</h1>;
};

export { App };
