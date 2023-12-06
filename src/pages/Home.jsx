import React ,{useEffect,useState} from "react";
import Hero from "../components/Hero/Hero";
import CountdownTimer from "../components/count/FlipCountdown";
import map from "../assets/map.jpg";
import { NavLink } from "react-router-dom";
import img1 from "../assets/map.jpg";
import img2 from '../assets/map.png'; // Import your mobile image
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 724); // Set the breakpoint according to your needs
    };


    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };


  }, []);
  const THREE_DAYS_IN_MS = 18 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <>
      <Hero />
      <div className="register-s">
        <h1 className="register-text heading">
          TechnoRun 2023:
          <br /> Unleash Your Energy, Embrace the Beat in Every Stride!
        </h1>
        <p className="register-text-para">
          {" "}
          Where rhythm meets the road, and every step becomes a dance." Join us
          for TechnoRun 2023 - an exhilarating fusion of music and athleticism
          that'll set your pulse racing!
        </p>
        <div className="register-section">
          <div className="register">
            <h3 className="register-text">REGISTER NOW</h3>
            <NavLink to="/tutorial" className="reg-link">
              <button className="register-now-btn">
                <p className="reg-link">Register here</p>
              </button>
            </NavLink>
          </div>
          <div className="time-left">
            <h3 className="register-text">TIME LEFT</h3>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </div>
        </div>
      </div>
      <div className="route-register ">
        <p className="register-text subHeading">
          <p>
            <h1 className="heading">ROUTE</h1>
            <div className="route-register-detail">
            <p>
              <b>GCOEA Start Point :</b> Kick off your Technorun adventure from
              the prestigious Government College of Engineering, Amravati,
              soaking in the academic ambiance before hitting the streets.
            </p>
            <p>
              <b>Shegao Naka- Kathora Naka - Jakat Naka:</b> Navigate through
              the bustling streets of Shegao Naka, Kathora Naka, and Jakat Naka,
              each step resonating with the dynamic energy of Amravati's urban
              life.
            </p>
            <p>
              <b>Kathora Naka-GCOEA Finish Line:</b> Conclude your journey at
              the Government College of Engineering, Amravati, completing the
              loop and achieving a triumphant finish. Feel the camaraderie and
              accomplishment as you cross the finish line surrounded by cheers
              and applause.
            </p>
            </div>
          </p>
          <p>
          <h3 className="heading">Event details :  </h3>
            <p>
              <b>Venue:</b> Amravati, Maharashtra
            </p>
            <p>
              <b>Date:</b> 24 December 2023
            </p>
          </p>
          <p>
            Technorun isn't just a marathon
            <br/>
            it's a fusion of technology,
            athleticism, and community spirit. Lace up your running shoes and be
            part of this extraordinary experience!
          </p>
        </p>
      </div>
      <div className="map-section">
         <img className="map-img" src={isMobile ? img2 : img1} alt="Map" />
    </div>
    </>
  );
};

export default Home;
