import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './Login.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // use history
  const history = useHistory();
  const gotoRegistration = () => {
    history.push('/registration');
  };
  return (
    <div className="section">
      <h1 className="heading">Login</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="your email"
            className="input-field"
          />
          {errors.email && (
            <span className="text-muted">email is required</span>
          )}
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="your password"
            className="input-field"
          />

          {errors.password && (
            <span className="text-muted">password is required</span>
          )}

          <input type="submit" value="login" className="input-btn" />
        </form>
        <div className="other-login">
          <p>
            login with{' '}
            <span className="google-logo">
              <i class="fab fa-google"></i>
            </span>
          </p>
        </div>
        <p onClick={gotoRegistration} className="toggle">
          create new account{' '}
          <span>
            <i class="fas fa-arrow-right arrow-icon"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
