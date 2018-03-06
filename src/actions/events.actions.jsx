// action types
export const FETCH_ALL_EVENTS = 'FETCH_ALL_EVENTS';
export const FETCH_EVENT = 'FETCH_EVENT';
export const CLEAR_EVENT = 'CLEAR_EVENT';
export const CLEAR_ALL_EVENTS = 'CLEAR_ALL_EVENTS';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';
export const EVENT_CREATED = 'EVENT_CREATED';

// TODO, use env variable for api url
const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * fetch all events
 */
export function fetchAllEvents() {
  // const { token, profile } = user;

  return (dispatch, getState) => {
    const { token } = getState().user;
    
    fetch(`${BASE_URL}events`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then((response) => {
        if (response.success) {
          dispatch({
            type: FETCH_ALL_EVENTS,
            payload: response.events,
          });
        }
      });
  };
}

/**
 * make a GET request to the API for an event with the given id
 */
export function fetchEvent(eventId) {
  return (dispatch, getState) => {
    const { token, profile } = getState().user;

    fetch(`${BASE_URL}events/${eventId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
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
 * @name createEvent
 * @description post a new event to our API
 * if successful, get back a
 * JWT and event object
 * @param {Object} values :: details from form
 */
export function createEvent(values) {
  return (dispatch, getState) => {
    const { token } = getState().user;

    fetch(`${BASE_URL}events/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ newEvent: values }),
    })
      .then(res => res.json())
      .then((response) => {
        dispatch({
          type: EVENT_CREATED,
          payload: response.events,
        });
      })
      .catch((err) => {
        console.error('There was a problem...', err);
      });
  };
}

/**
 * make a GET request to the API for an event with the given id
 */
export function updateEvent(user, eventId, values) {
  const { token, profile } = user;
  
  return (dispatch) => {
    fetch(`${BASE_URL}events/${eventId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ updatedEvent: values }),
    })
      .then(res => res.json())
      .then((response) => {
        let user = JSON.parse(localStorage.getItem('user'));
        user.profile.events = response.events;
        localStorage.setItem('user', JSON.stringify(user));

        dispatch({
          type: UPDATE_EVENTS,
          payload: JSON.parse(localStorage.getItem('user')),
        });
      })
      .catch((err) => {
        console.error('There was a problem...', err);
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
 * clears the active event
 */
export function clearAllEvents() {
  return {
    type: CLEAR_ALL_EVENTS,
  };
}

/**
 * delete event by id
 */
export function deleteEvent(user, eventId) {
  const { token, profile } = user;

  return (dispatch) => {
    fetch(`${BASE_URL}events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then((response) => {
        let user = JSON.parse(localStorage.getItem('user'));
        user.profile.events = response.events;
        localStorage.setItem('user', JSON.stringify(user));

        dispatch({
          type: UPDATE_EVENTS,
          payload: JSON.parse(localStorage.getItem('user')),
        });
      })
      .catch((err) => {
        console.error('There was a problem...', err);
      });
  };
}