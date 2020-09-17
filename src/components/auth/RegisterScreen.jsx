import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form className='mt-5'>
        <input
          type='text'
          placeholder='Your name...'
          name='name'
          autoComplete='off'
          className='auth__input'
        />

        <input
          type='text'
          placeholder='Your email...'
          name='email'
          autoComplete='off'
          className='auth__input'
        />

        <input
          type='password'
          placeholder='Your password...'
          name='password'
          className='auth__input'
        />

        <input
          type='password'
          placeholder='Confirm your password...'
          name='passwordCheck'
          className='auth__input'
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
