'use strict';

var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var HowTo = require('../components/HowTo');
var Logo = require('../components/Logo');

var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="title-text">
          <Link to="yo" params={{name: "(‿ˠ‿)"}}>React.js Boilerplate</Link>
        </div>
          <ul>
            <li><Logo /></li>
            <li><HowTo /></li>
          </ul>
      </div>
    );
  }
});

module.exports = Main;
