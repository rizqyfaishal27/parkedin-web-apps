import defaults from 'superagent-defaults';

let API_PREFIX_URL = 'http://localhost:4040/api/';

if (process.env.NODE_ENV === 'production') {
  API_PREFIX_URL = 'http://128.199.247.77/api/';
}

const instance = defaults();

export default instance;
export const API_PREFIX = API_PREFIX_URL;
