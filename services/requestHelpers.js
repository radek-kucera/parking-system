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
