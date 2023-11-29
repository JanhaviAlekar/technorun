import React, { useState, useEffect } from 'react';
import styles from './flipcount.module.css';

const FlipCountdown = ({ targetDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeToTarget = targetDate - now;

      const days = Math.floor(timeToTarget / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeToTarget % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeToTarget % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeToTarget % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.flipCountdown}>
      <div className={styles.flipContainer}>
        <div className={styles.flip}>
          <div className={styles.front}>{days}</div>
          <div className={styles.back}>{days}</div>
        </div>
        <p>Days</p>
      </div>
      <div className={styles.flipContainer}>
        <div className={styles.flip}>
          <div className={styles.front}>{hours}</div>
          <div className={styles.back}>{hours}</div>
        </div>
        <p>Hours</p>
      </div>
      <div className={styles.flipContainer}>
        <div className={styles.flip}>
          <div className={styles.front}>{minutes}</div>
          <div className={styles.back}>{minutes}</div>
        </div>
        <p>Minutes</p>
      </div>
      <div className={styles.flipContainer}>
        <div className={styles.flip}>
          <div className={styles.front}>{seconds}</div>
          <div className={styles.back}>{seconds}</div>
        </div>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default FlipCountdown;
