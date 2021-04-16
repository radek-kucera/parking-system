import axios from 'axios';

export const authorizedGet = async (url) => {
  const tokens = JSON.parse(localStorage.getItem('auth'));

  if (!tokens) throw new Error('Unauthorized!');

  if (tokens) {
    return axios.get(url, {
      headers: { 'X-authSessionId': tokens.authSessionId, 'Content-Type': 'application/json' }
    });
  }
};

export const authorizedPost = async (url, body) => {
  const tokens = JSON.parse(localStorage.getItem('auth'));

  if (!tokens) throw new Error('Unauthorized!');

  if (tokens) {
    return axios.post(url, body, {
      headers: {
        'X-authSessionId': tokens.authSessionId,
        'Content-Type': 'application/json'
      }
    });
  }
};

export const authorizedPut = async (url, body) => {
  const tokens = JSON.parse(localStorage.getItem('auth'));

  if (!tokens) throw new Error('Unauthorized!');

  if (tokens) {
    return axios.put(url, body, {
      headers: {
        'X-authSessionId': tokens.authSessionId,
        'Content-Type': 'application/json'
      }
    });
  }
};

export const authorizedDelete = async (url) => {
  const tokens = JSON.parse(localStorage.getItem('auth'));

  if (!tokens) throw new Error('Unauthorized!');

  if (tokens) {
    return axios.delete(url, {
      headers: {
        'X-authSessionId': tokens.authSessionId,
        'Content-Type': 'application/json'
      }
    });
  }
};
