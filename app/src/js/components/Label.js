'use strict';

var React = require('react');

var Label = React.createClass({
  handleImageChange: function() {
    this.props.changeImage(this.props.image);
  },
  componentDidUpdate: function(nextProps, nextState) {
    var element = this.refs.image.getDOMNode();
    var t = new TimelineMax();

    t.to(element, 0.3, {rotationY: 180});
    t.to(element, 0.3, {rotationY: -180});
  },
  render: function() {
    return (
      <div className="ui image label">
        <img ref="image"
             src={this.props.image}
             onClick={this.handleImageChange}
             onMouseEnter={this.zoomIn}
             onMouseLeave={this.zoomOut} />
        <a href={this.props.link}>{this.props.user}</a>
      </div>
    );
  }
});

module.exports = Label;
