import React from 'react';
import { useState } from 'react';
import classes from './Form.module.css'

const Form = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [fNameError, setFNameError] = useState('');
  const [lNameError, setLNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailVerification, setEmailVerification] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailVError, setEmailVError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVError, setPasswordVError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (fName.trim() === '') {
      setFNameError('please fill out field');
      return;
    } else {
      setFNameError('');
    }

    if (lName.trim() === '') {
      setLNameError('please fill out field');
      return;
    } else {
      setLNameError('');
    }

    if ('' === email) {
      setEmailError('Please enter your email');
      return;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    } else {
      setEmailError('');
    }

    if (emailVerification !== email) {
      setEmailVError("Oops! Emails don't match!");
      return;
    } else {
      setEmailVError('');
    }

    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    } else if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    } else {
      setPasswordError('');
    }

    if (passwordVerification !== password) {
      setPasswordVError('Passwords do not match');
      return;
    } else {
      setPasswordVError('');
    }

    console.log('Wooo');
  };

  return (
    <form
      className="flex flex-col justify-items-center mx-auto"
      style={{ width: '30vw' }}
    >
      <div className="flex flex-row justify-center w-full gap-2">
        <div className="flex flex-col items-start ">
          <label>First Name</label>
          <input
            className="border border-black rounded-md w-48"
            type="text"
            name="firstName"
            value={fName}
            onChange={(event) => setFName(event.target.value)}
          />
          {fNameError && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {fNameError}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start">
          <label>Last Name</label>
          <input
            className="border border-black rounded-md w-full w-48"
            type="text"
            name="lastName"
            value={lName}
            onChange={(event) => setLName(event.target.value)}
          />
          {lNameError && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {lNameError}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-start" style={{ width: '24.3vw' }}>
          <label>Email</label>
          <input
            className="border border-black rounded-md w-full"
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {emailError}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start" style={{ width: '24.3vw' }}>
          <label>Confirm Email</label>
          <input
            className="border border-black rounded-md w-full"
            type="text"
            name="emailConfirm"
            value={emailVerification}
            onChange={(event) => setEmailVerification(event.target.value)}
          />
          {emailVError && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {emailVError}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start" style={{ width: '24.3vw' }}>
          <label>Password</label>
          <input
            className="border border-black rounded-md w-full"
            type="text"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {passwordError}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start" style={{ width: '24.3vw' }}>
          <label>Confirm Password</label>
          <input
            className="border border-black rounded-md w-full"
            type="text"
            name="passwordConfirm"
            value={passwordVerification}
            onChange={(event) => setPasswordVerification(event.target.value)}
          />
          { passwordVError && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {passwordVError}
            </span>
          )}
        </div>
        <button
          className="border border-black rounded-md bg-blue-400 p-1 px-44"
          style={{ width: '24.3vw' }}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;