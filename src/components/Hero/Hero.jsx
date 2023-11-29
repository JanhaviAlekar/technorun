import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";
import img1 from '../../assets/homepage.png';
import img2 from '../../assets/mobile-image.png'; // Import your mobile image
import CountdownTimer from "../count/FlipCountdown";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 724); // Set the breakpoint according to your needs
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <>
      <div className={styles['banner-img']}>
        <img src={isMobile ? img2 : img1} alt="Banner" />
      </div>
      <div className={styles['banner-text']}>
        
        <h2>Take the lead in style</h2>
        <p>
          Our latest generation of cars, trucks and SUVs comes loaded with
          upgrades that extend beyond the surface.
        </p>
        <a href="#">Contact Us</a>
        <CountdownTimer targetDate={dateTimeAfterThreeDays}/>
      </div>
    </>
  );
};

export default Hero;
