var Config = require('../config');
var AxiosStore = require('axios-store');
var User = AxiosStore.createStore({
  endpoint: Config.BASE_API_URL + 'users/',
  idAttribute: 'id',
  postKeyName: 'user'
});
export default User;
