// RegistrationForm.js
import React, {useEffect ,useState} from 'react';
import styles from './registerform.module.css'; // Import the CSS module
const RegisterForm = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  return (
    <>
    <div className={styles.registercontainer}>
    <iframe src="https://formfacade.com/sm/MdSDHvbI5" title="myapp"  name="myiFrame" scrolling="yes" frameborder="0" marginheight="0px" marginwidth="0px" width="375px" height="725px" allowfullscreen></iframe>
    </div>
   </>
  );
};

export default RegisterForm;
