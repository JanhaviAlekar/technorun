import React from "react";
import AllSponsers from "../components/AllSponsers";
import { HotelsCard } from "../components/HotelsCard";
import Hero from "../components/Hero/Hero";
import CountdownTimer from '../components/count/FlipCountdown'
import img1 from "../assets/homepage.png"

const Home = () => {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return (<>
    <Hero/>
    <div className="register-s">
    <h1 className="register-text heading">Mauris aliquam massa bibendum mi plac</h1>
        <p className="register-text subHeading">Mauris aliquam massa bibendum mi placerat, et dictum metus consectetur.</p>
        <div className="register-section">
      <div className="register">
        <h3 className="register-text">Register here</h3>
        <button className="register-now-btn"><p>REGISTER NOW</p></button>
      </div>
      <div className="time-left">
      <h3 className="register-text" >Register here</h3>
      <CountdownTimer targetDate={dateTimeAfterThreeDays}/>
      </div>
    </div>
    </div>
    <div className="sponsers-section">
        <img className="sponsers-section-img" src={img1} />
        <div className="sponsers-all"> <AllSponsers/></div>
    </div>
    </>   );

}
             
export default Home