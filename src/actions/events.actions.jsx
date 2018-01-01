// action types
export const FETCH_EVENT = 'FETCH_EVENT';

// TODO, use env variable for api url
const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * check local storage to see if a user is currently logged in
 * if there is a user, dispatch it to state
 */
export function fetchEvent(user, eventId) {
  const { token, profile } = user;

  return (dispatch) => {
    fetch(`${BASE_URL}user/${profile.userId}/events`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    })
      .then(res => res.json())
      .then((response) => console.log(response));

    // dispatch user from localStorage
    dispatch({
      type: FETCH_EVENT,
      payload: JSON.parse(localStorage.getItem('user')),
    });
  };
}