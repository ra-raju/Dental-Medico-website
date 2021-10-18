import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // use history

  const history = useHistory();

  const gotoLogin = () => {
    history.push('/login');
  };
  return (
    <div className="section">
      <h1 className="heading">Registration</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            type="text"
            {...register('name')}
            placeholder="your name"
            className="input-field"
          />
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

          <input type="submit" value="Registration" className="input-btn" />
        </form>
        <div className="other-login">
          <p onClick={gotoLogin} className="toggle">
            Already have an account?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
