// action types
export const FETCH_CONTACTS = 'FETCH_EVENT';

// TODO, use env variable for api url
const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * make a GET request to the API for an event with the given id
 */
export function fetchContacts(user) {
  const { token, profile } = user;

  return (dispatch) => {
    fetch(`${BASE_URL}contacts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    })
      .then(res => res.json())
      .then((response) => {
        console.log('contacts action', response);
      });
  };
}