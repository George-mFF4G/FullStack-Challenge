import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router/router";
import { IntlProvider } from "react-intl";
import getIntl from "./i10n";
function App() {
  const locale = navigator.language || "en";
  const intl = getIntl(locale);
  return (
    <Router>
      <IntlProvider locale={locale} messages={intl.messages}>
        <AppRouter />
      </IntlProvider>
    </Router>
  );
}

export default App;
