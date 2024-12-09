export const saveToLocalStorage = (key, data) => {
  // Save only essential data to reduce storage size
  const simplifiedData = {
    rate: data["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
    lastUpdated: new Date().getTime(),
    fromCurrency:
      data["Realtime Currency Exchange Rate"]["1. From_Currency Code"],
    toCurrency: data["Realtime Currency Exchange Rate"]["3. To_Currency Code"],
  };
  localStorage.setItem(key, JSON.stringify(simplifiedData));
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const isDataStale = (timestamp) => {
  const FIFTEEN_MINUTES = 15 * 60 * 1000; // 15 minutes in milliseconds
  return new Date().getTime() - timestamp > FIFTEEN_MINUTES;
};
