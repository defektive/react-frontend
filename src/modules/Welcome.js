var React = require("react/lib/reactWithAddons");

export default  React.createFactory(React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Sample modules</h1>
        <p>
          you can do lots of stuff
        </p>
        <p>
          <a className="btn btn-primary btn-lg">Fantastic!!</a>
          <a className="btn btn-lg">Meh</a>
        </p>
      </div>
    );
  }
}));
