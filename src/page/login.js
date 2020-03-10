import React from 'react';
import auth from '../auth/auth';

const Login = (props) => {

  const handleLogin = () => {
    console.log(props, 'test!')
    auth.login(() => {
      props.history.push("/sales")
    })
  }
    return (
        <div className='login'>
          <h2>Login Page</h2> 
          <form action="">
            <div className="login-input">
              <span>Password</span>
              <input type="password" placeholder='type password'/>
            </div>
          </form>
          <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;