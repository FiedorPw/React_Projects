import classes from "./ExchangeRate.module.css";
import React, { useState } from "react";
import { DataSourceIndicator } from "./DataSourceIndicator.jsx";
import { ClearCacheButton } from "./ClearCacheButton.jsx";
import CryptoAPI from "./CryptoApi.jsx";

function ExchangeRate() {
  const [isFromLocalStorage, setIsFromLocalStorage] = useState(false);
  const [apiData, setApiData] = useState([]);

  return (
    <div className={classes.mainDiv}>
      <section className="exchange-rate">
        <div className={classes.header}>
          <h2>Exchange Rate</h2>
          <div className={ classes.DataSourceIndicator }>
          <DataSourceIndicator  isFromCache={isFromLocalStorage} />
          </div>
          <ClearCacheButton className={ classes.clearCacheBTN } />

        </div>
          <p>
            Get the latest exchange rate of cryptocurrencies in your favorite
            currency
          </p>

        <CryptoAPI
          setApiData={setApiData}
          setIsFromLocalStorage={setIsFromLocalStorage}
        />

        <div className="App">
          <ul className={classes.cryptoList}>
            {Object.entries(apiData).map(([asset, exchangeRate]) => (
              <li className={classes.cryptoPrices} key={asset}>
                {asset}: $
                {Number(exchangeRate).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ExchangeRate;
