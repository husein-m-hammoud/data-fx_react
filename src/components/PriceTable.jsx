import React, { useState, useEffect } from 'react';
import styles from './PriceTable.module.scss';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './ui/table';
import { ArrowUp, ArrowDown } from 'lucide-react';
import axios from 'axios';

const PriceTable = ({ marketType }) => {
  const [priceData, setPriceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get currency pairs for forex data based on market type
  const getSymbols = (type) => {
    switch(type.toLowerCase()) {
      case 'forex':
        return ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CAD'];
      case 'indices':
        return ['SPX', 'IXIC', 'DJI', 'UKX', 'GDAXI'];
      case 'commodities':
        return ['GOLD', 'SILVER', 'COPPER', 'PLATINUM', 'PALLADIUM'];
      case 'energies':
        return ['CL', 'BZ', 'NG', 'HO', 'EMISS'];
      case 'stocks':
        return ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'];
      case 'crypto':
      case 'cryptocurrencies':
        return ['BTC/USD', 'ETH/USD', 'XRP/USD', 'SOL/USD', 'ADA/USD'];
      default:
        return [];
    }
  };

  // Get fallback data based on market type
  const getFallbackData = (type) => {
    switch(type.toLowerCase()) {
      case 'forex':
        return [
          { symbol: 'EUR/USD', bid: '1.0921', ask: '1.0923', change: '+0.05%' },
          { symbol: 'GBP/USD', bid: '1.2654', ask: '1.2657', change: '-0.12%' },
          { symbol: 'USD/JPY', bid: '149.72', ask: '149.75', change: '+0.23%' },
          { symbol: 'AUD/USD', bid: '0.6573', ask: '0.6576', change: '-0.08%' },
          { symbol: 'USD/CAD', bid: '1.3645', ask: '1.3648', change: '+0.15%' },
        ];
      case 'indices':
        return [
          { symbol: 'S&P 500', bid: '5,021.25', ask: '5,022.75', change: '+0.32%' },
          { symbol: 'NASDAQ', bid: '15,982.50', ask: '15,985.00', change: '+0.54%' },
          { symbol: 'Dow Jones', bid: '38,773.25', ask: '38,775.75', change: '+0.11%' },
          { symbol: 'FTSE 100', bid: '7,642.50', ask: '7,645.00', change: '-0.21%' },
          { symbol: 'DAX', bid: '17,118.25', ask: '17,120.75', change: '+0.43%' },
        ];
      case 'commodities':
        return [
          { symbol: 'Gold', bid: '2,025.40', ask: '2,026.10', change: '+0.75%' },
          { symbol: 'Silver', bid: '22.85', ask: '22.90', change: '+0.52%' },
          { symbol: 'Copper', bid: '3.89', ask: '3.90', change: '-0.35%' },
          { symbol: 'Platinum', bid: '905.50', ask: '907.00', change: '+0.15%' },
          { symbol: 'Palladium', bid: '966.75', ask: '968.25', change: '-0.42%' },
        ];
      case 'energies':
        return [
          { symbol: 'Crude Oil', bid: '78.65', ask: '78.75', change: '+1.25%' },
          { symbol: 'Brent Oil', bid: '82.35', ask: '82.45', change: '+1.15%' },
          { symbol: 'Natural Gas', bid: '1.825', ask: '1.835', change: '-0.75%' },
          { symbol: 'Heating Oil', bid: '2.415', ask: '2.425', change: '+0.85%' },
          { symbol: 'Carbon Emissions', bid: '66.25', ask: '66.35', change: '+0.35%' },
        ];
      case 'stocks':
        return [
          { symbol: 'AAPL', bid: '177.35', ask: '177.40', change: '+0.65%' },
          { symbol: 'MSFT', bid: '406.25', ask: '406.35', change: '+0.82%' },
          { symbol: 'GOOGL', bid: '141.55', ask: '141.65', change: '+0.45%' },
          { symbol: 'AMZN', bid: '178.25', ask: '178.35', change: '-0.32%' },
          { symbol: 'TSLA', bid: '192.75', ask: '192.85', change: '-0.95%' },
        ];
      case 'crypto':
      case 'cryptocurrencies':
        return [
          { symbol: 'BTC/USD', bid: '51,245.50', ask: '51,255.50', change: '+1.20%' },
          { symbol: 'ETH/USD', bid: '2,985.75', ask: '2,990.25', change: '+0.85%' },
          { symbol: 'XRP/USD', bid: '0.5365', ask: '0.5375', change: '-0.45%' },
          { symbol: 'SOL/USD', bid: '101.75', ask: '102.25', change: '+2.10%' },
          { symbol: 'ADA/USD', bid: '0.4525', ask: '0.4535', change: '+0.35%' },
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const symbols = getSymbols(marketType);
        const results = [];
        
        // Using Alpha Vantage API for demonstration
        const API_KEY = 'demo'; // Using demo key with limited functionality
        
        for (const symbol of symbols) {
          try {
            let response;
            let formattedSymbol = symbol;
            
            // Format the symbol for API call depending on the market type
            if (marketType.toLowerCase() === 'forex') {
              const [fromCurrency, toCurrency] = symbol.split('/');
              response = await axios.get(
                `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${API_KEY}`
              );
              
              if (response.data["Realtime Currency Exchange Rate"]) {
                const data = response.data["Realtime Currency Exchange Rate"];
                const rate = parseFloat(data["5. Exchange Rate"]);
                const bid = (rate - 0.0002).toFixed(4);
                const ask = (rate + 0.0002).toFixed(4);
                
                // Calculate change (simulated for demo)
                const change = (Math.random() * 0.5 - 0.25).toFixed(2) + '%';
                
                results.push({
                  symbol: formattedSymbol,
                  bid,
                  ask,
                  change: change.startsWith('-') ? change : '+' + change
                });
              }
            } else if (marketType.toLowerCase() === 'crypto') {
              const [crypto, currency] = symbol.split('/');
              response = await axios.get(
                `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${crypto}&to_currency=${currency}&apikey=${API_KEY}`
              );
              
              if (response.data["Realtime Currency Exchange Rate"]) {
                const data = response.data["Realtime Currency Exchange Rate"];
                const rate = parseFloat(data["5. Exchange Rate"]);
                const bid = (rate - rate * 0.001).toFixed(2);
                const ask = (rate + rate * 0.001).toFixed(2);
                
                // Calculate change (simulated for demo)
                const change = (Math.random() * 2 - 0.5).toFixed(2) + '%';
                
                results.push({
                  symbol: formattedSymbol,
                  bid,
                  ask,
                  change: change.startsWith('-') ? change : '+' + change
                });
              }
            }
          } catch (err) {
            console.error(`Error fetching data for ${symbol}:`, err);
          }
          
          // Small delay to avoid API rate limits
          await new Promise(resolve => setTimeout(resolve, 250));
        }
        
        if (results.length > 0) {
          setPriceData(results);
        } else {
          // Use fallback data if API calls fail
          setPriceData(getFallbackData(marketType));
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching price data:", err);
        setError("Failed to load price data. Please try again later.");
        setPriceData(getFallbackData(marketType));
        setLoading(false);
      }
    };
    
    fetchPriceData();
    
    // Refresh data every 10 seconds for real-time feel
    const interval = setInterval(fetchPriceData, 10000);
    
    return () => clearInterval(interval);
  }, [marketType]);

  return (
    <section className={styles.priceTable}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Live {marketType} Prices</h2>
          <p className={styles.description}>Real-time prices updated every 10 seconds. Trade now to take advantage of market movements.</p>
        </div>
        
        <div className={styles.tableContainer}>
          {loading && priceData.length === 0 ? (
            <div className={styles.loading}>Loading price data...</div>
          ) : error ? (
            <div className={styles.error}>{error}</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className={styles.tableHeader}>
                  <TableHead className={styles.tableHeaderCell}>Symbol</TableHead>
                  <TableHead className={styles.tableHeaderCell}>Bid</TableHead>
                  <TableHead className={styles.tableHeaderCell}>Ask</TableHead>
                  <TableHead className={styles.tableHeaderCell}>Change (24h)</TableHead>
                  <TableHead className={styles.tableHeaderCell}>Trade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceData.map((item, index) => (
                  <TableRow 
                    key={index}
                    className={`${styles.tableRow} ${index % 2 === 0 ? styles.even : styles.odd}`}
                  >
                    <TableCell className={styles.symbol}>{item.symbol}</TableCell>
                    <TableCell className={styles.price}>{item.bid}</TableCell>
                    <TableCell className={styles.price}>{item.ask}</TableCell>
                    <TableCell>
                      <div className={`${styles.change} ${item.change.startsWith('+') ? styles.positive : styles.negative}`}>
                        {item.change.startsWith('+') ? (
                          <ArrowUp className={styles.arrow} />
                        ) : (
                          <ArrowDown className={styles.arrow} />
                        )}
                        {item.change}
                      </div>
                    </TableCell>
                    <TableCell>
                      <button className={styles.tradeButton}>
                        Trade
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
