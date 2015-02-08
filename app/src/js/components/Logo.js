'use strict';

var React = require('react');

var Logo = React.createClass({
  zoomIn: function() {
    var element = this.refs.image.getDOMNode();
    var t = new TimelineMax();
    t.to(element, 0.1, {scaleX: 1.1, scaleY: 1.1, ease: Circ.easeOut});
    t.to(element, 0.5, {rotation: 1080, repeat: -1});
  },
  zoomOut: function() {
    var element = this.refs.image.getDOMNode();
    var t = new TimelineMax();
    t.to(element, 0.0, {rotation: -1080});
    t.to(element, 0.0, {scaleX: 1.0, scaleY: 1.0});
  },
  render: function() {
    return (
      <div className="logo">
        <img ref="image"
             src={this.props.logo}
             className="ui small bordered circular image"
             onMouseEnter={this.zoomIn}
             onMouseLeave={this.zoomOut} />
      </div>
    );
  }
});

module.exports = Logo;
