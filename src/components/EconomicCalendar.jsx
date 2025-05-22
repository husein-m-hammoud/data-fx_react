
import React, { useState, useEffect } from 'react';
import styles from './EconomicCalendar.module.scss';
import axios from 'axios';

const EconomicCalendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample fallback data in case API fails
  const fallbackEvents = [
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

  useEffect(() => {
    const fetchEconomicCalendar = async () => {
      try {
        // Using Finnhub for economic calendar data (they offer economic calendar endpoint)
        // Note: This would need a real API key in production
        const API_KEY = 'demo'; // Replace with your actual API key
        
        // Get today's date and 7 days from now for the calendar range
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);
        
        const formatDate = (date) => {
          return date.toISOString().split('T')[0];
        };
        
        // For demo purposes, we're using a simulated response
        // as Finnhub's economic calendar endpoint requires a paid plan
        
        // In a real implementation, you would use:
        // const response = await axios.get(
        //   `https://finnhub.io/api/v1/calendar/economic?from=${formatDate(today)}&to=${formatDate(nextWeek)}&token=${API_KEY}`
        // );
        
        // Simulate API response with current date-aware data
        const simulatedResponse = {
          data: {
            economicCalendar: [
              {
                time: '08:30',
                date: formatDate(today),
                country: 'USA',
                event: 'Non-Farm Payrolls',
                impact: 'high',
                forecast: '185K',
                previous: '175K'
              },
              {
                time: '10:00',
                date: formatDate(today),
                country: 'EUR',
                event: 'ECB Interest Rate Decision',
                impact: 'high',
                forecast: '4.50%',
                previous: '4.50%'
              }
            ]
          }
        };
        
        // Add some future events
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        
        simulatedResponse.data.economicCalendar.push(
          {
            time: '13:30',
            date: formatDate(tomorrow),
            country: 'GBP',
            event: 'CPI y/y',
            impact: 'medium',
            forecast: '3.2%',
            previous: '3.4%'
          }
        );
        
        const dayAfterTomorrow = new Date();
        dayAfterTomorrow.setDate(today.getDate() + 2);
        
        simulatedResponse.data.economicCalendar.push(
          {
            time: '22:45',
            date: formatDate(dayAfterTomorrow),
            country: 'NZD',
            event: 'GDP q/q',
            impact: 'high',
            forecast: '0.3%',
            previous: '0.1%'
          },
          {
            time: '02:00',
            date: formatDate(dayAfterTomorrow),
            country: 'AUD',
            event: 'Employment Change',
            impact: 'medium',
            forecast: '20.0K',
            previous: '18.5K'
          }
        );
        
        // Process the economic calendar events
        if (simulatedResponse.data.economicCalendar && simulatedResponse.data.economicCalendar.length > 0) {
          const formattedEvents = simulatedResponse.data.economicCalendar.map(item => ({
            time: item.time,
            date: item.date,
            country: item.country,
            event: item.event,
            impact: item.impact.toLowerCase(),
            forecast: item.forecast,
            previous: item.previous
          }));
          
          setEvents(formattedEvents);
        } else {
          // Use fallback data if no results
          setEvents(fallbackEvents);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching economic calendar:", err);
        setError("Failed to load economic calendar. Please try again later.");
        setEvents(fallbackEvents);
        setLoading(false);
      }
    };
    
    fetchEconomicCalendar();
    
    // Refresh data daily
    const interval = setInterval(fetchEconomicCalendar, 86400000); // 24 hours
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.calendar}>
      <div className={styles.container}>
        <h2 className={styles.title}>Economic Calendar</h2>
        <p className={styles.description}>Stay ahead of market-moving events with our comprehensive economic calendar.</p>
        
        <div className={styles.tableWrapper}>
          {loading && events.length === 0 ? (
            <div className={styles.loading}>Loading economic calendar...</div>
          ) : error ? (
            <div className={styles.error}>{error}</div>
          ) : (
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
          )}
        </div>
        
        <div className={styles.viewMore}>
          <button className={styles.viewMoreButton}>View Full Calendar</button>
        </div>
      </div>
    </section>
  );
};

export default EconomicCalendar;
