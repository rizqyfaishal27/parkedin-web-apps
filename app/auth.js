import request, { API_PREFIX } from './request';
import { TOKEN_KEY_ITEM } from './global-constants';


const auth = {
  login(email, password) {
    if (auth.isLoggedIn()) { return Promise.resolve(true); }
    return request
      .post(`${API_PREFIX}auth/login`)
      .send({ email, password })
      .then((response) => {
        localStorage.setItem(TOKEN_KEY_ITEM, response.body.token);
        localStorage.setItem('user-id', response.body.user.id);
        request.set('Authorization', `Bearer ${response.body.token}`);
        return Promise.resolve(true);
      });
  },
  getUserData() {
    if (!auth.isLoggedIn()) { return Promise.resolve(null); }
    request.set('Authorization', `Bearer ${localStorage.getItem(TOKEN_KEY_ITEM)}`);
    return request.get(`${API_PREFIX}users/${localStorage.getItem('user-id')}`);
  },
  logout() {
    request.unset('Authorization');
    localStorage.removeItem(TOKEN_KEY_ITEM);
  },
  isLoggedIn() {
    return !!localStorage.getItem(TOKEN_KEY_ITEM);
  },

};

export default auth;
