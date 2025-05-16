
import React from 'react';
import styles from './StockTicker.module.scss';

const StockTicker = () => {
  // Mock stock data
  const stocks = [
    { symbol: 'AAPL', price: '182.63', change: '+1.25', changePercent: '0.69%', color: 'positive' },
    { symbol: 'MSFT', price: '337.21', change: '-0.85', changePercent: '-0.25%', color: 'negative' },
    { symbol: 'GOOGL', price: '147.60', change: '+0.92', changePercent: '0.63%', color: 'positive' },
    { symbol: 'AMZN', price: '174.46', change: '+1.50', changePercent: '0.87%', color: 'positive' },
    { symbol: 'TSLA', price: '171.05', change: '-3.20', changePercent: '-1.84%', color: 'negative' },
    { symbol: 'META', price: '467.12', change: '+5.26', changePercent: '1.14%', color: 'positive' },
    { symbol: 'BTC/USD', price: '67452.80', change: '+1234.75', changePercent: '1.87%', color: 'positive' },
    { symbol: 'ETH/USD', price: '3325.48', change: '-65.23', changePercent: '-1.93%', color: 'negative' },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Live Market Data</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={styles.headCell}>Symbol</th>
              <th className={`${styles.headCell} ${styles.right}`}>Price</th>
              <th className={`${styles.headCell} ${styles.right}`}>Change</th>
              <th className={`${styles.headCell} ${styles.right}`}>% Change</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {stocks.map((stock, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.symbol}>{stock.symbol}</td>
                <td className={`${styles.price} ${styles.right}`}>{stock.price}</td>
                <td className={`${styles[stock.color]} ${styles.right}`}>{stock.change}</td>
                <td className={`${styles[stock.color]} ${styles.right}`}>{stock.changePercent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTicker;
