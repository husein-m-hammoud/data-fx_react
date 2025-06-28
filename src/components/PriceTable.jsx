import React, { useEffect, useRef } from "react";
import styles from "./PriceTable.module.scss";

const PriceTable = ({ marketType }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = ""; // Clear previous widget

    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";

    let widgetConfig;

    if (
      marketType === "forex" ||
      marketType === "commodities" ||
      marketType === "energies"
    ) {
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
      widgetConfig = {
        width: "100%",
        height: "400",
        currencies: [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD",
          "CNY",
        ],
        isTransparent: false,
        colorTheme: "light",
        locale: "en",
      };
    } else if (marketType === "indices" || marketType === "stocks") {
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      widgetConfig = {
        symbols: [
          ["S&P 500", "OANDA:SPX500USD"],
          ["Nasdaq 100", "OANDA:NAS100USD"],
          ["Dow 30", "OANDA:US30USD"],
          ["FTSE 100", "OANDA:UK100GBP"],
        ],
        colorTheme: "light",
        isTransparent: false,
        width: "100%",
        height: "400",
        locale: "en",
      };
    } else if (marketType === "crypto") {
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      widgetConfig = {
        symbols: [
          ["BTC", "BINANCE:BTCUSDT"],
          ["ETH", "BINANCE:ETHUSDT"],
          ["XRP", "BINANCE:XRPUSDT"],
          ["SOL", "BINANCE:SOLUSDT"],
          ["ADA", "BINANCE:ADAUSDT"],
          ["DOGE", "BINANCE:DOGEUSDT"],
        ],
        colorTheme: "light",
        isTransparent: false,
        width: "100%",
        height: "400",
        locale: "en",
      };
    } else {
      return; // don't embed anything if marketType is unknown
    }

    script.innerHTML = JSON.stringify(widgetConfig);
    container.appendChild(script);
  }, [marketType]); // re-run when marketType changes

  return (
    <section className={styles.tradingViewTableWrapper}>
      <div className={styles.tradingViewTable}>
        <div ref={containerRef} />
      </div>
    </section>
  );
};

export default PriceTable;
