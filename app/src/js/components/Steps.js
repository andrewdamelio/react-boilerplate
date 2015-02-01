'use strict';

var React = require('react');
var R = require('../core/Ramda');

var Steps = React.createClass({
  toggleStep: function(e) {
    var updateActiveState = function(step) {
      if (R.propEq('key', e.key, step)) {
        step.active =! step.active;
      }
      return step;
    };
    this.setState({
      steps: R.map(updateActiveState, this.props.steps)
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
        {R.map(this.createStep, this.props.steps)}
      </div>
    );
  }
});

module.exports = Steps;
