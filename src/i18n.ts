import { derived, writable } from "svelte/store";
import translations from "./translations";

export const locale = writable("es");

function translate(locale, key, vars) {
  let text = translations[locale][key];

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  locale,
  ($locale) =>
    (key, vars = {}) =>
      translate($locale, key, vars)
);
