import * as React from "react";
import ReactDOM from "react-dom";

import { I18nProvider } from "i18n";

import { App } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
