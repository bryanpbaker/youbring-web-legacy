import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginPage = () => {
  const facebookResponse = (response) => {
    console.log(response);
  };

  return (
    <div className="login-page">
      Login Page
      <FacebookLogin
        appId="1013591492112556"
        callback={facebookResponse}
      />
    </div>
  );
};

export default LoginPage;
