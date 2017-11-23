import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

const LoginPage = () => {
  const BASE_URL = 'http://localhost:5000/auth/facebook?access_token=';

  const apiAuth = (fbResponse) => {
    console.log(fbResponse.accessToken);
    axios.post(`${BASE_URL}${fbResponse.accessToken}`)
      .then((apiResponse) => {
        console.log(apiResponse.data);
      });
  };

  return (
    <div className="login-page">
      Login Page
      <FacebookLogin
        appId="1013591492112556"
        callback={apiAuth}
      />
    </div>
  );
};

export default LoginPage;
