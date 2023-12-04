// PaymentsPage.js
import React, {useContext, useState, useEffect} from 'react';
import styles from './payments.module.css';
import RazorPayButtonBelow15 from '../../components/RazorPayButtonBelow15';
import RazorPayButtonAbove15 from '../../components/RazorPayButtonAbove15';
import {useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { getDatabase, ref, push, set, get } from 'firebase/database';
import firebaseApp from '../../components/firebase'


const PaymentsPage = () => {
  const location = useLocation();
  const age = location.state.age;
  console.log(age);
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 45000);

    // Clear the timer if the component unmounts or the dependency changes
    return () => clearTimeout(timer);
  }, []);

  const { user } = useContext(UserContext);
  console.log("userdata", user);


  const handleSubmit = async (e) => {
      e.preventDefault();
      const database = getDatabase(firebaseApp);
      const aadharKey = user.aadhar;
      const usersRef = ref(database, `registrations/${aadharKey}`);
      const snapshot = await get(usersRef);
      if(snapshot.exists()){
        alert('Registration with the same Aadhar number already exists!');
      }else{
        const newUserDataRef = push(usersRef);
        set(newUserDataRef, {
          name: user.name,
          phoneNumber: user.phoneNumber,
          email: user.email,
          aadhar: user.aadhar,
          age: user.age,
        });

        alert('Registration successful!');
        navigate('/payments-success')
      }
  }

  return (
    <div className={styles.container}>
    <div className={styles.payment_container}>
      {age && age < 15 && <RazorPayButtonBelow15/>}
      {age && age >= 15 && <RazorPayButtonAbove15/>}
      {showButton && (
      <div>
        <p>If your payment was successful please click the button below</p>
      <div onClick={handleSubmit} className={styles.button_fail}>Successfull
      </div>
        <p>If you payment failed please contact us through whatsapp.</p>
      </div>)}
      {/* You can add additional details or actions related to the payment confirmation here */}
    </div>
    </div>
  );
};

export default PaymentsPage;
