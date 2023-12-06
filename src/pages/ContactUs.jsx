import React, { useEffect } from "react";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ALL-Pages-height">
      <div className="about-us-section">
        <div className="about-us-s">
          <h2>About Us</h2>
          <p>Welcome to TechnoRun - Where Technology Meets Fitness!</p>
        </div>

        <p>
          <span className="bold-text"> Event Overview : </span>
          TechnoRun is not just a marathon; it's a celebration of health,
          technology, and the vibrant spirit of Amravati, Maharashtra. This 5km
          race brings together individuals from all walks of life to embrace the
          fusion of cutting-edge technology and the joy of running. As the heart
          of Maharashtra beats with energy, we invite you to be a part of this
          exhilarating experience.
        </p>
        <p>
          <span className="bold-text"> Date and Location : </span>
          Mark your calendars! TechnoRun is scheduled to take place on [Insert
          Date] in the beautiful city of Amravati. The marathon route will guide
          you through the scenic landscapes and iconic landmarks of this
          historic city, providing a perfect backdrop for an unforgettable
          journey.
        </p>

        <p>
          <span className="bold-text"> Our Mission : </span>
          At TechnoRun, we are committed to promoting a healthy lifestyle and
          embracing the power of technology in fitness. Our mission is to
          inspire, motivate, and unite participants in a common goal of
          well-being and community engagement. Whether you are a seasoned runner
          or just starting your fitness journey, TechnoRun welcomes all
          enthusiasts to join the movement.
        </p>
        <p>
          <span className="bold-text"> What Sets Us Apart : </span>
          Technological Innovation: Experience the latest advancements in
          marathon tracking, timing, and participant engagement. Community
          Connection: TechnoRun is more than just a race; it's an opportunity to
          connect with fellow runners, fitness enthusiasts, and the local
          community. Scenic Route: Enjoy the picturesque beauty of Amravati as
          you run through its streets, parks, and landmarks. How to Participate:
          Register for TechnoRun today to secure your spot in this unique blend
          of technology and athleticism. Visit our registration page. for details on how to sign up and be a part of this
          one-of-a-kind event.
        </p>
  
        <p>See you at the starting line!</p>

        <p>
         <div className="about-us-s">
          <h3> Contact Us</h3>
        
        <p>
We're here to assist you!
<br/> If you have any questions or need assistance, please feel free to reach out to us.
<br/>
You can also email us on
<br/><span>  info@technorun.co.in</span>
<br/>
<b> Contact No. :+918010117421</b>
</p>
</div>
</p>
      </div>
    </div>
  );
};

export default ContactUs;
