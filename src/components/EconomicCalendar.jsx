
import React from 'react';
import styles from './EconomicCalendar.module.scss';

const EconomicCalendar = () => {
  // Sample data - in a real app, this would come from an API
  const events = [
    {
      time: '08:30',
      date: '2025-05-20',
      country: 'USA',
      event: 'Non-Farm Payrolls',
      impact: 'high',
      forecast: '180K',
      previous: '175K'
    },
    {
      time: '10:00',
      date: '2025-05-20',
      country: 'EUR',
      event: 'ECB Interest Rate Decision',
      impact: 'high',
      forecast: '4.50%',
      previous: '4.50%'
    },
    {
      time: '13:30',
      date: '2025-05-21',
      country: 'GBP',
      event: 'CPI y/y',
      impact: 'medium',
      forecast: '3.2%',
      previous: '3.4%'
    },
    {
      time: '22:45',
      date: '2025-05-21',
      country: 'NZD',
      event: 'GDP q/q',
      impact: 'high',
      forecast: '0.3%',
      previous: '0.1%'
    },
    {
      time: '02:00',
      date: '2025-05-22',
      country: 'AUD',
      event: 'Employment Change',
      impact: 'medium',
      forecast: '20.0K',
      previous: '18.5K'
    }
  ];

  return (
    <section className={styles.calendar}>
      <div className={styles.container}>
        <h2 className={styles.title}>Economic Calendar</h2>
        <p className={styles.description}>Stay ahead of market-moving events with our comprehensive economic calendar.</p>
        
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th className={styles.headCell}>Date</th>
                <th className={styles.headCell}>Time</th>
                <th className={styles.headCell}>Currency</th>
                <th className={styles.headCell}>Event</th>
                <th className={styles.headCell}>Impact</th>
                <th className={styles.headCell}>Forecast</th>
                <th className={styles.headCell}>Previous</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {events.map((event, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.cell}>{new Date(event.date).toLocaleDateString()}</td>
                  <td className={styles.cell}>{event.time}</td>
                  <td className={styles.cell}>{event.country}</td>
                  <td className={styles.cell}>{event.event}</td>
                  <td className={styles.cell}>
                    <span className={`${styles.impact} ${styles[event.impact]}`}>{event.impact}</span>
                  </td>
                  <td className={styles.cell}>{event.forecast}</td>
                  <td className={styles.cell}>{event.previous}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className={styles.viewMore}>
          <button className={styles.viewMoreButton}>View Full Calendar</button>
        </div>
      </div>
    </section>
  );
};

export default EconomicCalendar;
