import React, { useContext } from 'react'
import styles from './paymentsuccess.module.css'
import UserContext from '../../context/userContext';

const PaymentSuccess = () => {
  const { user } = useContext(UserContext);
  console.log("userdata", user);

  return (
    <div className={styles.container}>
    <div className={styles.payment_container}>
      <h2 className={styles.payment_success}>Payment Successful!</h2>
      <p className={styles.payment_message}>
        Thank you for your payment. Your registration is complete.
      </p>
      {/* You can add additional details or actions related to the payment confirmation here */}
    </div>
    </div>
  )
}

export default PaymentSuccess