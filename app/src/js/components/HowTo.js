'use strict';

var React = require('react');
var R = require('../core/Ramda');

var HowTo = React.createClass({
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
      }]
    };
  },
  toggleStep: function(e) {
    var updateActiveState = function(step) {
      if (R.propEq('key', e.key, step)) {
        step.active =! step.active;
      }
      return step;
    };
    this.setState({
      steps: R.map(updateActiveState, this.state.steps)
    });
  },
  createStep: function (step) {
    var stepState = step.active ? 'step active' : 'step';

    return (
      <a key={step.key} className={stepState} onClick={this.toggleStep.bind(this, step)}>
        <i className={step.icon}></i>
        <div className="content">
          <div className="title">{step.title}</div>
          <div className="description">{step.description}</div>
        </div>
      </a>
    );
  },
  render: function() {
    return (
      <div className="ui steps">
        {R.map(this.createStep, this.state.steps)}
      </div>
    );
  }
});

module.exports = HowTo;
