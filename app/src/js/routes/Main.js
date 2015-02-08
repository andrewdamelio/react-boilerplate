'use strict';

var React = require('react');
var Router = require('react-router');
var Steps = require('../components/Steps');
var Logo = require('../components/Logo');

var { Link } = Router;

var Main = React.createClass({
  // statics: {
  //   willTransitionFrom: function (transition, element) {
  //   },
  //   willTransitionTo: function (transition) {
  //   }
  // },
  render: function() {
    return (
      <div className="container">
        <div className="title-text">
          <Link to="yo" params={{name: "(‿ˠ‿)"}}>React.js Boilerplate</Link>
        </div>
        <ul>
          <li><Logo logo={this.props.data.get('logo')} /></li>
          <li>
            <Steps steps={this.props.data.get('steps')}
                   updateActiveState={this.props.updateActiveState} />
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Main;
