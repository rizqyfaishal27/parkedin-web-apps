import request, { API_PREFIX } from 'request';
import { TOKEN_KEY_ITEM } from 'global-constants';

const token = localStorage.getItem(TOKEN_KEY_ITEM);
let signedRequest;

if (token) {
  signedRequest = request.set('Authorization', `JWT ${token}`);
}

