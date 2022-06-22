import React, { useState } from 'react';

import sty from './Auth.module.css';

import { StickyNote2 } from '@styled-icons/material';

const Auth = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');

  const onSubmithandler = () => {
    console.log(email, password, cnfPassword);
  };

  return (
    <div className={sty.auth}>
      <div className={sty.logo}>
        <StickyNote2 className={sty.icon} />
        final<span>note</span>
      </div>
      <div className={sty.block}>
        <h3>{!authStatus ? 'Sign-In' : 'Sign-Up'}</h3>
        <p>(fill account credentials to proceed)</p>
        <div className={sty.inputBox}>
          <label className={sty.label}>Email</label>
          <input
            className={sty.input}
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className={sty.inputBox}>
          <label className={sty.label}>Password</label>
          <input
            className={sty.input}
            placeholder="Password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        {authStatus && (
          <div className={sty.inputBox}>
            <label className={sty.label}>Password</label>
            <input
              className={sty.input}
              placeholder="Confirm Password"
              type="password"
              value={cnfPassword}
              onChange={event => setCnfPassword(event.target.value)}
            />
          </div>
        )}
        <button onClick={onSubmithandler}>
          {!authStatus ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
      <div className={sty.footnote}>
        <p>
          {authStatus ? 'Already have an Account ' : "Don't have a account "}
          <span onClick={() => setAuthStatus(!authStatus)}>
            {authStatus ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;