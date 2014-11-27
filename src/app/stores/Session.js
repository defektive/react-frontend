var Config = require('../config');
var axios = require('axios');
var DataStore = require('defektive-data-store');

var USER_ID_KEY = 'user_id',
    ACCESS_TOKEN_KEY = 'access_token';


function Session(){  DataStore.apply(this, arguments)  }

function login(response){
  response.data[LOGGED_IN_KEY] = true;
  this.attrs(response.data);
}

Session.prototype = Object.create(DataStore.prototype);

Session.prototype.signIn = function (email, password) {
  axios.post(Config.BASE_API_URL +'login', {
    email: email,
    password: password
  })
  .then(login.bind(this))
  .catch(function (response) {
    this.logout();
    this.handleErrorResponse(response);
  }.bind(this));
}

Session.prototype.isLoggedIn = function () {
  return !!this.attr(ACCESS_TOKEN_KEY)
}

Session.prototype.getAccessToken = function () {
  return this.attr(ACCESS_TOKEN_KEY)
}

Session.prototype.logout = function () {
  this.attr(ACCESS_TOKEN_KEY, null);
  this.attr(LOGGED_IN_KEY, false);
}

Session.prototype.handleErrorResponse = function (response) {
  var error = {
    status: response.status,
    statusText: response.statusText,
    description: response.data
  }

  this.emitError(error);
}

var session = new Session
export default session
