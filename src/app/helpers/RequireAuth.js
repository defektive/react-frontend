var React = require("react/lib/reactWithAddons");
import session from "../stores/Session";


export default (Component) => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {
      if (!session.isLoggedIn()) {
        transition.redirect('/login', {}, {'nextPath' : transition.path});
      }
    }
    render () {
      return <Component {...this.props}/>
    }
  }
};
