/**
 * currencyFormater - Used to format currency
 * @param {number} number - value to be formatted
 * @param {string} locale - locale by default en-US is used.
 */
export const currencyFormater = (number, locale = "en-US") => {
  return new Intl.NumberFormat(locale).format(number);
};
