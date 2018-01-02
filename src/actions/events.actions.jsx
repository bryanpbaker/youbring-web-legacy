// action types
export const FETCH_EVENT = 'FETCH_EVENT';
export const CLEAR_EVENT = 'CLEAR_EVENT';

// TODO, use env variable for api url
const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * make a GET request to the API for an event with the given id
 */
export function fetchEvent(user, eventId) {
  const { token, profile } = user;

  return (dispatch) => {
    fetch(`${BASE_URL}user/${profile.userId}/events/${eventId}`, {
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
            type: FETCH_EVENT,
            payload: response.details,
          });
        }
      });
  };
}

/**
 * clears the active event
 */
export function clearActiveEvent() {
  return {
    type: CLEAR_EVENT,
  };
}

/**
 * post a new event to our API
 * if successful, get back a
 * JWT and event object
 * @param {Object} event details from form
 */
export function createEvent(user, values) {
  const { token, profile } = user;

  console.log(values);
  
  return (dispatch) => {
    fetch(`${BASE_URL}user/${profile.userId}/events/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify({ newUser: values }),
    })
      .then(res => res.json())
      .then((response) => {
        console.log('from action response', response);
      })
      .catch((err) => {
        console.error('There was a problem...', err);
      });
  };
}