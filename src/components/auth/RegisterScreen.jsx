import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const { name, email, password, passwordCheck } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log('Validado');
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password !== passwordCheck || password.length < 5) {
      dispatch(
        setError(
          'Password should be at least six characters and match each other'
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form className='mt-5' onSubmit={handleRegister}>
        {msgError && <div className='auth__alert-error'>{msgError}</div>}

        <input
          type='text'
          placeholder='Your name...'
          name='name'
          autoComplete='off'
          className='auth__input'
          value={name}
          onChange={handleInputChange}
        />

        <input
          type='text'
          placeholder='Your email...'
          name='email'
          autoComplete='off'
          className='auth__input'
          value={email}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder='Your password...'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder='Confirm your password...'
          name='passwordCheck'
          className='auth__input'
          value={passwordCheck}
          onChange={handleInputChange}
        />

        <button type='submit' className='btn btn-primary btn-block mb-5 mt-5'>
          Register
        </button>

        <Link to='/auth/login' className='link'>
          Do you already have an account?
        </Link>
      </form>
    </>
  );
};
