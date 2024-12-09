import React, { useEffect } from "react";

function CryptoAPI({ setApiData, setIsFromLocalStorage }) {
  useEffect(() => {
    async function fetchExchangeRates() {
      const assets = ["BTC", "ETH", "XRP"];
      const STORAGE_KEY = "crypto-portfolio";

      // Always get cached data first
      const cachedData = localStorage.getItem(STORAGE_KEY);
      let savedData = null;

      if (cachedData) {
        try {
          savedData = JSON.parse(cachedData);
          setApiData(savedData.data);
          setIsFromLocalStorage(true);
        } catch (error) {
          console.error("Error parsing cached data:", error);
        }
      }

      try {
        const apiKey = import.meta.env.VITE_COINAPI_KEY;
        const promises = assets.map((asset) =>
          fetch(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD`, {
            headers: {
              "X-CoinAPI-Key": apiKey,
            },
          }).then((response) => response.json())
        );

        const responses = await Promise.all(promises);
        const exchangeRates = responses.reduce((acc, response, index) => {
          if (response && response.rate) {
            acc[assets[index]] = response.rate;
          }
          return acc;
        }, {});

        // Only update if we got valid data
        if (Object.keys(exchangeRates).length > 0) {
          const storageData = {
            data: exchangeRates,
            timestamp: new Date().getTime(),
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
          setApiData(exchangeRates);
          setIsFromLocalStorage(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // If fetch fails, we're already showing cached data
        if (!savedData) {
          setApiData({});
          setIsFromLocalStorage(true);
        }
      }
    }

    fetchExchangeRates();
  }, [setApiData, setIsFromLocalStorage]);

  return null;
}

export default CryptoAPI;
