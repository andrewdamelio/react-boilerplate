'use strict';

var React = require('react');

var Logo = React.createClass({
  getDefaultProps: function(){
    return {
      logo: 'dist/images/reactjs.png'
    };
  },
  render: function() {
    return (
      <div className="logo">
        <img src={this.props.logo} className="ui small bordered circular image"/>
      </div>
    );
  }
});

module.exports = Logo;
