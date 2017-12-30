// action types
export const FETCH_USER = 'FETCH_USER';
export const FACEBOOK_AUTH = 'FACEBOOK_AUTH';
export const AUTH_ERROR = 'AUTH_ERROR';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const USER_AUTH = 'USER_AUTH';

// TODO, use env variable for api url
const BASE_URL = 'http://localhost:5000/';

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

export function authorizeUser() {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const { profile, token } = user;
    
      fetch(`${BASE_URL}user/${profile.userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      })
        .then(res => res.json())
        .then((response) => {
          if (response.success) {
            dispatch({
              type: USER_AUTH,
              payload: true,
            });
          }
        });
    };
    }
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
    fetch(`${BASE_URL}auth/facebook?access_token=${accessToken}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then((response) => {
        // save user to localstorage
        localStorage.setItem('user', JSON.stringify({ profile: response.user, token: response.token }));

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
    fetch(`${BASE_URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      }),
    })
      .then(res => res.json())
      .then((response) => {
        if (response.success) {
          // save user to localStorage
          localStorage.setItem('user', JSON.stringify({ profile: response.user, token: response.token }));

          // dispatch the user
          dispatch({
            type: FETCH_USER,
            payload: JSON.parse(localStorage.getItem('user')),
          });
        } else {
          dispatch({
            type: AUTH_ERROR,
            payload: { status: response.status, message: response.message },
          });
        }
      })
      .catch((err) => {
        console.error('There was a problem...', err);
      });
  };
}

/**
 * post a new user to our API
 * if successful, get back a
 * JWT and user object
 * @param {Object} credentials from form
 */
export function createUser(credentials) {
  return (dispatch) => {
    fetch(`${BASE_URL}auth/new-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res => res.json())
      .then((response) => {
        if (response.success) {
          // save user to localStorage
          localStorage.setItem('user', JSON.stringify({ profile: response.user, token: response.token }));

          // dispatch the user
          dispatch({
            type: FETCH_USER,
            payload: JSON.parse(localStorage.getItem('user')),
          });
        } else {
          dispatch({
            type: CREATE_USER_ERROR,
            payload: { status: response.status, message: response.message },
          });
        }
      })
      .catch((err) => {
        console.error('There was a problem...', err);
      });
  };
}
