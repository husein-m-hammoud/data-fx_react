
import React from 'react';

const StockTicker = () => {
  // Mock stock data
  const stocks = [
    { symbol: 'AAPL', price: '182.63', change: '+1.25', changePercent: '0.69%', color: 'text-green-400' },
    { symbol: 'MSFT', price: '337.21', change: '-0.85', changePercent: '-0.25%', color: 'text-red-400' },
    { symbol: 'GOOGL', price: '147.60', change: '+0.92', changePercent: '0.63%', color: 'text-green-400' },
    { symbol: 'AMZN', price: '174.46', change: '+1.50', changePercent: '0.87%', color: 'text-green-400' },
    { symbol: 'TSLA', price: '171.05', change: '-3.20', changePercent: '-1.84%', color: 'text-red-400' },
    { symbol: 'META', price: '467.12', change: '+5.26', changePercent: '1.14%', color: 'text-green-400' },
    { symbol: 'BTC/USD', price: '67452.80', change: '+1234.75', changePercent: '1.87%', color: 'text-green-400' },
    { symbol: 'ETH/USD', price: '3325.48', change: '-65.23', changePercent: '-1.93%', color: 'text-red-400' },
  ];

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 text-white">Live Market Data</h3>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-gray-400 uppercase">
            <tr>
              <th className="text-left py-2">Symbol</th>
              <th className="text-right py-2">Price</th>
              <th className="text-right py-2">Change</th>
              <th className="text-right py-2">% Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {stocks.map((stock, index) => (
              <tr key={index}>
                <td className="py-3 text-left font-medium text-white">{stock.symbol}</td>
                <td className="py-3 text-right text-white">{stock.price}</td>
                <td className={`py-3 text-right ${stock.color}`}>{stock.change}</td>
                <td className={`py-3 text-right ${stock.color}`}>{stock.changePercent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTicker;
