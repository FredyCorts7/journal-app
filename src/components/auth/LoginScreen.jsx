import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (formValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const formValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('Email invalid'));
      return false;
    } else if (password.trim().length < 6) {
      dispatch(setError('Password should be at least 6 characters'));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const handleAuthGoogle = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form
        className='mt-5 animate__animated animate__fadeIn animate__faster'
        onSubmit={handleLogin}
      >
        {msgError && <div className='auth__alert-error'>{msgError}</div>}

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

        <button
          type='submit'
          className='btn btn-primary btn-block mt-5'
          disabled={loading}
        >
          Log In
        </button>

        <div className='auth__sso'>
          <p>Single Sign On</p>
          <div className='google-btn' onClick={handleAuthGoogle}>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to='/auth/register' className='link'>
          Create new account
        </Link>
      </form>
    </>
  );
};
