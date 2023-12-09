// RegistrationForm.js
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './registerform.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContext';
import Sponsors from '../Sponsors';

const RegisterForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [age, setAge] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    aadhar: '',
    age: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has not occurred yet in the current year
    const isBirthdayInFuture =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

    if (isBirthdayInFuture) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  const onSubmit = async (data) => {
    const updatedFormData = {...formData, age: age};
    // console.log('age:' , userData);
    setUser(updatedFormData);
    navigate('/payments', { state: { age } });
  };

  return (
    <>
    <div className={styles.registercontainer}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registrationForm}>
      <h2 className={styles.registrationh2}>Registration Form</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          id="name"
          placeholder='Your full name'
          className={styles.formControl}
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          {...register('phoneNumber', {
            required: 'Phone Number is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Invalid phone number',
            },
          })}
          type="tel"
          id="phoneNumber"
          className={styles.formControl}
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        {errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            },
          })}
          type="email"
          id="email"
          placeholder='ex: myname@example.com'
          className={styles.formControl}
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
          <label htmlFor="aadhar">Aadhar Card Number:</label>
          <input
            {...register('aadhar', {
              required: 'Aadhar Card Number is required',
              pattern: {
                value: /^\d{12}$/,
                message: 'Invalid Aadhar Card Number',
              },
            })}
            type="text"
            id="aadhar"
            className={styles.formControl}
            value={formData.aadhar}
            onChange={handleInputChange}
          />
          {errors.aadhar && <p className={styles.error}>{errors.aadhar.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            {...register('dob', {
              required: 'Date of Birth is required',
              // You may use a more specific validation for the date of birth
            })}
            type="date"
            id="dob"
            className={styles.formControl}
            onBlur={(e) => calculateAge(e.target.value, setAge)}
          />
          <p className={styles.warning}><span>Note: </span>Date of Birth should be same as on Aadhar.</p>
          {errors.dob && <p className={styles.error}>{errors.dob.message}</p>}
        </div>

      <div className={styles.formGroup}>
        <div className={styles.registrationh2}>
        <button type="submit" className={styles.submitButton}>Register</button>
        </div>
      </div>

    </form>
    </div>
    <Sponsors/>
   </>
  );
};

export default RegisterForm;
