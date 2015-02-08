'use strict';

var React = require('react');
var R = require('Ramda');
var Immutable = require('Immutable');
var stepState = Immutable.OrderedMap();

var Steps = React.createClass({
  toggleStep: function(step) {
    this.props.updateActiveState(step);
  },
  createStep: function (step) {
    stepState = stepState.set('step', step.active ? 'step active' : 'step');

    return (
      <a key={step.key}
         className={stepState.get('step')}
         onClick={this.toggleStep.bind(null, step)}>
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
