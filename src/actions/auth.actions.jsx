// action types
export const FETCH_USER = 'FETCH_USER';
export const FACEBOOK_AUTH = 'FACEBOOK_AUTH';

// TODO, use env variable for api url
const BASE_URL = 'http://localhost:5000/auth/facebook?access_token=';

/**
 * check local storage to see if a user is currently logged in
 * if there is a user, dispatch it to state
 */
export function fetchUser() {
  return (dispatch) => {
    // get user from localstorage
    const user = JSON.parse(localStorage.getItem('user'));

    // dispatch the user
    dispatch({
      type: FETCH_USER,
      payload: user,
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
    fetch(`${BASE_URL}${accessToken}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then((user) => {
        // save user to localstorage
        localStorage.setItem('user', JSON.stringify(user));

        // dispatch the user
        dispatch({
          type: FETCH_USER,
          payload: JSON.parse(localStorage.getItem('user')),
        });
      });
  };
}
