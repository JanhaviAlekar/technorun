import React from "react";
import AllSponsers from "../components/AllSponsers";
import { HotelsCard } from "../components/HotelsCard";
import Hero from "../components/Hero/Hero";
import CountdownTimer from '../components/count/FlipCountdown'
import sponimg from "../assets/sponsor.jpg";
import map from "../assets/map.jpg";
import { NavLink } from 'react-router-dom';
const Home = () => {

    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return (<>
    <Hero/>
    <div className="register-s">
    <h1 className="register-text heading">TechnoRun 2023: Unleash Your Energy, Embrace the Beat in Every Stride!</h1>
        <p className="register-text subHeading"><p><b>Route </b>
<p>
 <b>GCOEA Start Point :</b> Kick off your Technorun adventure from the prestigious Government College of Engineering, Amravati, soaking in the academic ambiance before hitting the streets.
</p>
<p>
<b>Shegao Naka- Kathora Naka - Jakat Naka:</b> Navigate through the bustling streets of Shegao Naka, Kathora Naka, and Jakat Naka, each step resonating with the dynamic energy of Amravati's urban life.
</p>
<p>
<b>Kathora Naka-GCOEA Finish Line:</b> Conclude your journey at the Government College of Engineering, Amravati, completing the loop and achieving a triumphant finish. Feel the camaraderie and accomplishment as you cross the finish line surrounded by cheers and applause.
</p>
</p>
<p>

<b>Event Details:</b>
<p>
<b>Venue:</b> Amravati, Maharashtra
</p>
<p>
<b>Date:</b> 24 December 2023
</p>
</p>
<p>
  
Technorun isn't just a marathon; it's a fusion of technology, athleticism, and community spirit. Lace up your running shoes and be part of this extraordinary experience!</p>
</p>
        <div className="register-section">
      <div className="register">
        <h3 className="register-text">Register here</h3>
        <NavLink to="/register" className="reg-link">
        <button className="register-now-btn">
    <p className="reg-link">Register Now</p>
</button>
</NavLink>
      </div>
      <div className="time-left">
      <h3 className="register-text" >Register here</h3>
      <CountdownTimer targetDate={dateTimeAfterThreeDays}/>
      </div>
    </div>
    </div>
    <div className="map-section">
        <img className="map-img" src={map} alt="image" />
    </div>
    </>   );

}
             
export default Home