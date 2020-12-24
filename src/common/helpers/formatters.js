export const currencyFormater = (
  number,
  locale = "en-US"
) => {
  return new Intl.NumberFormat(locale).format(
    number
  );
};
