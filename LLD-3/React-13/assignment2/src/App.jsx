import React, { useState } from "react";
import "./App.css";
import useCurrencyConverter from "./CurrencyConverter";

function App() {
  // States for USD to EUR conversion
  const [usdAmount, setUsdAmount] = useState("");
  const [convertedEur, setConvertedEur] = useState("");

  // States for EUR to USD conversion
  const [eurAmount, setEurAmount] = useState("");
  const [convertedUsdFromEur, setConvertedUsdFromEur] = useState("");

  // States for GBP to USD conversion
  const [gbpAmount, setGbpAmount] = useState("");
  const [convertedUsdFromGbp, setConvertedUsdFromGbp] = useState("");

  // Create hook instances
  // Ex :- const convertUsdToEur = useCurrencyConverter("USD", "EUR");

  const convertUsdToEur = useCurrencyConverter("USD", "EUR");
  const convertEurToUsd = useCurrencyConverter("EUR", "USD");
  const convertGbpToUsd = useCurrencyConverter("GBP", "USD");

  // Create event handlers

  const handleUsdAmountChange = (event) => {
    const value = event.target.value;
    setUsdAmount(value);
    if (value === "") {
      setConvertedEur("");
      return;
    }

    const num = Number(value);
    if (Number.isNaN(num)) {
      setConvertedEur("");
      return;
    }

    const result = convertUsdToEur(num);
    setConvertedEur(result === null ? "" : Number(result.toFixed(2)).toString());
  };

  const handleEurAmountChange = (event) => {
    const value = event.target.value;
    setEurAmount(value);
    if (value === "") {
      setConvertedUsdFromEur("");
      return;
    }

    const num = Number(value);
    if (Number.isNaN(num)) {
      setConvertedUsdFromEur("");
      return;
    }

    const result = convertEurToUsd(num);
    setConvertedUsdFromEur(result === null ? "" : Number(result.toFixed(2)).toString());
  };

  const handleGbpAmountChange = (event) => {
    const value = event.target.value;
    setGbpAmount(value);
    if (value === "") {
      setConvertedUsdFromGbp("");
      return;
    }

    const num = Number(value);
    if (Number.isNaN(num)) {
      setConvertedUsdFromGbp("");
      return;
    }

    const result = convertGbpToUsd(num);
    setConvertedUsdFromGbp(result === null ? "" : Number(result.toFixed(2)).toString());
  };

  // do not edit the return statement

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div>
        <label>USD to EUR:</label>
        <input
          type="number"
          value={usdAmount}
          onChange={handleUsdAmountChange}
          placeholder="Enter USD amount"
        />
        <p>Converted to EUR: {convertedEur}</p>
      </div>
      <div>
        <label>EUR to USD:</label>
        <input
          type="number"
          value={eurAmount}
          onChange={handleEurAmountChange}
          placeholder="Enter EUR amount"
        />
        <p>Converted to USD: {convertedUsdFromEur}</p>
      </div>
      <div>
        <label>GBP to USD:</label>
        <input
          type="number"
          value={gbpAmount}
          onChange={handleGbpAmountChange}
          placeholder="Enter GBP amount"
        />
        <p>Converted to USD: {convertedUsdFromGbp}</p>
      </div>
    </div>
  );
}

export default App;
