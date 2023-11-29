import React from "react";
import styles from "./hero.module.css";
import img1 from '../../assets/homepage.jpg'

const Hero = () => {
  return (
    <>
      <div className={styles['banner-img']}>
        <img src={img1} alt="Banner" />
      </div>
      <div className={styles['banner-text']}>
        <h2>Take the lead in style</h2>
        <p>
          Our latest generation of cars, trucks and SUVs comes loaded with
          upgrades that extend beyond the surface.
        </p>
        <a href="#">Contact Us</a>
      </div>
    </>
  );
};

export default Hero;
