import { createIntl, createIntlCache } from "react-intl";

const cache = createIntlCache();

const messages: Record<string, Record<string, string>> = {
  en: require("./languages/en.json"),
  es: require("./languages/ar.json"),
};

const getIntl = (locale: string) =>
  createIntl(
    {
      locale,
      messages: messages[locale],
    },
    cache
  );

export default getIntl;
