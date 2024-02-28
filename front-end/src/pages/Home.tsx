import React from "react";
import { useIntl } from "react-intl";

import AppBar from "../components/NavBar";

const Home: React.FC = () => {
  const intl = useIntl();
  const locale = intl.locale;
  console.log("Current Locale:", locale);
  console.log("Current:", intl);
  return (
    <div>
      <AppBar />
      <h2>
        {intl.formatMessage({
          id: "home.title",
          defaultMessage: "Home",
        })}
      </h2>
    </div>
  );
};

export default Home;
