'use strict';

var React = require('react');

var Label = React.createClass({
  handleImageChange: function() {
    this.props.changeImage(this.props.image);
  },
  render: function() {
    return (
      <div className="ui image label">
        <img src={this.props.image} onClick={this.handleImageChange}/>
        <a href={this.props.link}>{this.props.user}</a>
      </div>
    );
  }
});

module.exports = Label;
