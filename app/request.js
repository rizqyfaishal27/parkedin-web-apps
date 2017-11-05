import defaults from 'superagent-defaults';

let API_PREFIX_URL = 'http://localhost:4040/api/';

if (process.env.NODE_ENV === 'production') {
  API_PREFIX_URL = 'http://10.99.3.59:27689/api/v1';
}

const instance = defaults();

export default instance;
export const API_PREFIX = API_PREFIX_URL;
