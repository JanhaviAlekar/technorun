import React, { useEffect } from 'react'
import styles from './tutorial.module.css';
import reg from '../../assets/tutorialphotos/reg.jpeg';
import done from '../../assets/tutorialphotos/done.jpeg';
import last from '../../assets/tutorialphotos/last.jpeg';
import method from '../../assets/tutorialphotos/method.jpeg';
import successful from '../../assets/tutorialphotos/successful.jpeg';
import paynow from '../../assets/tutorialphotos/paynow.jpeg';
import paydetails from '../../assets/tutorialphotos/paydetails.jpeg';
import redirect from '../../assets/tutorialphotos/redirect.jpeg';
import { useNavigate } from 'react-router-dom';



function Tutorial() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('../Register');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
        <div className={styles.container}>
        <div className={styles.tutorial_content}>
          <h2 className={styles.warning}>Warning don't skip this tutorial otherwise your registration may not complete properly.</h2>

          <h4>Go below and click Register if you have already read it.</h4>

          <div className={styles.tutorial_step}>
            <div className={styles.centermaker}>
            <h3>Step 1: Complete the Registration Form</h3>
            <img src={reg} alt="Payment Form" />
            </div>
          </div>

          <div className={styles.tutorial_step}>
          <div className={styles.centermaker}>
            <h3>Step 2: Click on the RazorPay paynow button</h3>
            <img src={paynow} alt="Confirmation Page" />
            </div>
          </div>

          <div className={styles.tutorial_step}>
          <div className={styles.centermaker}>
            <h3>Step 3: Fill your payment details.</h3>
            <img src={paydetails} alt="Error Handling" />
            </div>
          </div>

          <div className={styles.tutorial_step}>
          <div className={styles.centermaker}>
            <h3>Step 4: Choose your payment method.</h3>
            <img src={method} alt="Error Handling" />
            </div>
          </div>

          <div className={styles.tutorial_step}>
          <div className={styles.centermaker}>
            <h3>Step 5: Wait 5 seconds till you redirect.</h3>
            <img src={redirect} alt="Error Handling" />
            </div>
          </div>

          <div className={styles.tutorial_step}>
          <div className={styles.centermaker}>
            <h3>Step 6: Click on done.</h3>
            <img src={done} alt="Error Handling" />
            </div>
          </div>

          <div className={styles.tutorial_step}>
          <div className={styles.centermaker}>
            <h3>Step 7: If your payment was successful click on green successful button. If the button has not appeared wait atleast 30 seconds.</h3>
            <img src={successful} alt="Error Handling" />
            </div>
          </div>

          <div className={styles.tutorial_step}>
          <div className={styles.centermaker}>
            <h3>Step 8: You are registered for Technorun Half Marathon.</h3>
            <img src={last} alt="Error Handling" />
            </div>
          </div>
          <div className={styles.tutorial_step}>
          <div className={styles.centermaker}>
            <h2>If you have read the steps carefully click the button below to start registrations.</h2>
            <div className={styles.button_fail} onClick={handleSubmit}>Register</div>
            </div>
        </div>
        </div>
        
        </div>
        
  )
}

export default Tutorial