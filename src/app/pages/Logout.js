var React = require("react/lib/reactWithAddons");
import session from "../stores/Session";

export default class Logout extends React.Component {
  componentDidMount () {
    session.logout();
  }

  render () {
    return <p>You are now logged out</p>;
  }
}
