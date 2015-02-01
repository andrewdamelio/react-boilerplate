'use strict';

var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var Steps = require('../components/Steps');
var Logo = require('../components/Logo');

var IMAGE_PATH = 'dist/images/';


var Main = React.createClass({
  getInitialState: function () {
    return {
      steps: [{
        key: 0,
        active: true,
        icon: 'github icon',
        title: 'Step 1',
        description: 'git clone'
      }, {
        key: 1,
        active: false,
        icon: 'wizard icon',
        title: 'Step 2',
        description: 'npm install'
      }, {
        key: 2,
        active: false,
        icon: 'checkered flag icon',
        title: 'Step 3',
        description: 'gulp serve'
      }],
      logo: 'dist/images/reactjs.png'
    };
  },
  render: function() {
    return (
      <div className="container">
        <div className="title-text">
          <Link to="yo" params={{name: "(‿ˠ‿)"}}>React.js Boilerplate</Link>
        </div>
        <ul>
          <li><Logo logo={this.state.logo}/></li>
          <li>
            <Steps steps={this.state.steps}/>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Main;
