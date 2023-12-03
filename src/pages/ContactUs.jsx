import React from "react";
const ContactUs = () => {
   return (
      <div className="contact-us-container">
         <h1>Contact Us</h1>

         {/* Contact Form */}
         <form className="contact-form">

            <label>
               Name:
               <input type="text" name="name" />
            </label>
            <br />
            <label>
               Email:
               <input type="email" name="email" />
            </label>
            <br />
            <label>
               Message:
               <input type="email" name="email" />
            </label>
            <br />
            <button type="submit">Submit</button>
         </form>


         {/* About Us Section */}
         <div className="about-us-section">
            <h2>About Us</h2>
            <p>
               Welcome to TechnoRun - Where Technology Meets Fitness!
            </p>
            <p>
               Event Overview:
               TechnoRun is not just a marathon; it's a celebration of health, technology, and the vibrant spirit of Amravati, Maharashtra. This 5km race brings together individuals from all walks of life to embrace the fusion of cutting-edge technology and the joy of running. As the heart of Maharashtra beats with energy, we invite you to be a part of this exhilarating experience.
            </p>
            <p>
               Date and Location:
               Mark your calendars! TechnoRun is scheduled to take place on [Insert Date] in the beautiful city of Amravati. The marathon route will guide you through the scenic landscapes and iconic landmarks of this historic city, providing a perfect backdrop for an unforgettable journey.
            </p>

               <p>
               Our Mission:
               At TechnoRun, we are committed to promoting a healthy lifestyle and embracing the power of technology in fitness. Our mission is to inspire, motivate, and unite participants in a common goal of well-being and community engagement. Whether you are a seasoned runner or just starting your fitness journey, TechnoRun welcomes all enthusiasts to join the movement.
               </p>
               <p>


               What Sets Us Apart:

               Technological Innovation: Experience the latest advancements in marathon tracking, timing, and participant engagement.
               Community Connection: TechnoRun is more than just a race; it's an opportunity to connect with fellow runners, fitness enthusiasts, and the local community.
               Scenic Route: Enjoy the picturesque beauty of Amravati as you run through its streets, parks, and landmarks.
               How to Participate:
               Register for TechnoRun today to secure your spot in this unique blend of technology and athleticism. Visit our registration page [insert registration link] for details on how to sign up and be a part of this one-of-a-kind event.
               </p>
               <p>

               Contact Information:
               For inquiries, sponsorship opportunities, or any assistance, feel free to reach out to us at [insert email/phone number].

               Join us at TechnoRun - where every step you take brings you closer to a healthier, more connected community. Lace up your running shoes, embrace the technology, and let's run towards a brighter, fitter future together!
               </p>
               <p>

               See you at the starting line!

               </p>
         
         </div>
      </div>
   );
};

export default ContactUs;
