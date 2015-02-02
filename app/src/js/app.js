'use strict';

var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler } = Router;
var Main = require('./routes/Main');
var Yo = require('./routes/Yo');

React.initializeTouchEvents(true);

var Container = React.createClass({
  render: function() {
    return (
      <div className="container">
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route handler={Container}>
    <Route name="main" path="/" handler={Main} />
    <Route name="yo" path="/yo/:name" handler={Yo} />
  </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});
