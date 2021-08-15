import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export default RegisterForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();
    acc = Meteor.users.findOne({username:username});
    if (!acc) {
      Accounts.createUser({
        username: username,
        password: password,
        profile: {
          name: name,
          img: "1.png"
        }
      });
    }
    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={submit} className="login-form d-flex flex-column justify-content-center p-3">
        <h2 className="text-center">Register</h2>
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        className="form-control"
        onChange={e => setUsername(e.target.value)}
      />
      <label htmlFor="name">Name</label>

        <input
        type="text"
        placeholder="Name"
        name="name"
        required
        className="form-control"
        onChange={e => setName(e.target.value)}
        />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        className="form-control"
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit" className="btn btn-white text-dark mt-3">Log In</button>
    </form>
  );
};