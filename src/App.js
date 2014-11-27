var React = require("react/lib/reactWithAddons");
var Dispatcher = require('flux').Dispatcher;
var Amygdala = require('Amygdala');
var Q = require('q');


import Welcome from "./modules/Welcome";

// var AppStore = new Amygdala({
//     'config': {
//       'apiUrl': 'http://rest-backend.dev',
//       'idAttribute': 'url'
//     },
//     'schema': {
//       'users': {
//         'url': '/users/'
//       }
//     }
//   }
// );

// Q.all([
//   AppStore.get("users"),
// ]).done(makeArgFriendly(setup));
setup();

function setup(userList) {
  userList = userList || [];

  var App = React.createFactory(React.createClass({
    render: function() {
      return (
        <div id="app-main">
        <div className="navbar navbar-default">
        <div className="navbar-header">
        <a className="navbar-brand" href="./">React Frontend</a>
        </div>
        </div>

        <div className="container-fluid">
        <div className="row">
        <div className="col-sm-3 col-md-2 sidebar">

        </div>
        <div className="col-sm-9  col-md-10 main">
        <Welcome />
        </div>
        </div>
        </div>
        </div>
      );
    }
  }));

  React.render(
    <App />,
    document.body
  );
}

function makeArgFriendly(fn) {
  return function (a) {
    fn.apply(fn, a)
  }
}
