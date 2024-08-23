import currencyFmt, { Options } from "currency.js";

export const Numerics = {
  format(value: string | number, options: Options = {}) {
    if (!options.symbol) {
      options.symbol = "";
    }

    return currencyFmt(value.toString(), options).format();
  },
};
