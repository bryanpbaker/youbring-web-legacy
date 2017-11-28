// action types
export const FETCH_USER = 'FETCH_USER';
export const FACEBOOK_AUTH = 'FACEBOOK_AUTH';

// TODO, use env variable for api url
const BASE_URL = 'http://localhost:5000/auth/';

/**
 * check local storage to see if a user is currently logged in
 * if there is a user, dispatch it to state
 */
export function fetchUser() {
  return (dispatch) => {
    // dispatch user from localStorage
    dispatch({
      type: FETCH_USER,
      payload: JSON.parse(localStorage.getItem('user')),
    });
  };
}

/**
 * post to our API with a facebook access code
 * get back a JWT and a user, save to local storage
 * and dispatch the user
 * @param {String} facebook access token
 */
export function facebookAuth(accessToken) {
  return (dispatch) => {
    // post to API with accessToken
    fetch(`${BASE_URL}facebook?access_token=${accessToken}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then((user) => {
        // save user to localstorage
        localStorage.setItem('user', JSON.stringify(user));

        // dispatch the user from localStorage
        dispatch({
          type: FETCH_USER,
          payload: JSON.parse(localStorage.getItem('user')),
        });
      });
  };
}

/**
 * posts to our API with an email and password
 * get back a JWT and a user, save to localStorage
 * dispatch the user
 * @param {Object} credentials - user login credentials
 */
export function emailAuth(credentials) {
  return (dispatch) => {
    // post to API with credentials
    fetch(`${BASE_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      }),
    })
      .then(res => res.json())
      .then((user) => {
        // save user to localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // dispatch the user
        dispatch({
          type: FETCH_USER,
          payload: JSON.parse(localStorage.getItem('user')),
        })
      });
  };
}

export function createUser(credentials) {
  console.log(credentials);
  // return (dispatch) => {
  //   fetch(`${BASE_URL}new-user`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(credentials),
  //   })
  //     .then(res => console.log('res', res));
  // };
}
