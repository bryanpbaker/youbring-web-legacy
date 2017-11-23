import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginPage = () => {
  const BASE_URL = 'http://localhost:5000/auth/facebook?access_token=';

  const apiAuth = (fbResponse) => {
    console.log(fbResponse.accessToken);
    fetch(`${BASE_URL}${fbResponse.accessToken}`, {
      method: 'POST',
    })
      .then((apiResponse) => {
        return apiResponse.json();
      })
      .then((res) => {
        console.log(res);
      })
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
