// RegistrationForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './registerform.module.css'; // Import the CSS module

const RegisterForm = () => {
  const { handleSubmit, control, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.registercontainer}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registrationForm}>
      <h2>Registration Form</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          id="name"
          className={styles.formControl}
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
          className={styles.formControl}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <p>Razor Pay Payment Button</p>
      </div>

      <div className={styles.formGroup}>
        <button type="submit" className={styles.submitButton}>Register</button>
      </div>
    </form>
    </div>
  );
};

export default RegisterForm;
