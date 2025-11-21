import { useCallback } from "react";

function useCurrencyConverter(baseCurrency, targetCurrency) {
  // Use the following predefined exchange rates for conversion:
  //  - USD to EUR: 0.93
  //  - EUR to USD: 1.07
  //  - GBP to USD: 1.21
  const convert = useCallback(
    (amount) => {
      // Validate amount is a number
      if (typeof amount !== "number" || Number.isNaN(amount)) return null;

      // Normalize currency codes to uppercase for safety
      const base = String(baseCurrency).toUpperCase();
      const target = String(targetCurrency).toUpperCase();

      // Handle supported conversions
      if (base === "USD" && target === "EUR") {
        return amount * 0.93;
      }

      if (base === "EUR" && target === "USD") {
        return amount * 1.07;
      }

      if (base === "GBP" && target === "USD") {
        return amount * 1.21;
      }

      // Unsupported currency pair
      return null;
    },
    [baseCurrency, targetCurrency]
  );

  return convert;
}

export default useCurrencyConverter;
