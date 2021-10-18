import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login-section">
      <h1 className="heading">Login</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="your email"
          />
          {errors.email && <span>email is required</span>}
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="your password"
          />

          {errors.password && <span>password is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
