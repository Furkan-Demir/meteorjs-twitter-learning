import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={submit} className="login-form d-flex flex-column justify-content-center p-3">
        <h2 className="text-center">Login</h2>
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        className="form-control"
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>

      <input
        type="password"
        placeholder="Password"
        name="password"
        className="form-control"
        required
        onChange={e => setPassword(e.target.value)}
      />
      <Link to="/Register">register</Link>
      <button type="submit" className="btn btn-white text-dark mt-3">Log In</button>
    </form>
  );
};