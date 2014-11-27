var React = require("react/lib/reactWithAddons");

import requireAuth from "../helpers/RequireAuth";
import session from "../stores/Session";

export default requireAuth(class extends React.Component {
  render () {
    var token = session.getAccessToken();
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
      </div>
    );
  }
});
