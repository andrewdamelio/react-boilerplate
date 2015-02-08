'use strict';

var React = require('react/addons');
var PureRenderMixin = require('react').addons.PureRenderMixin;
var Router = require('react-router');
var Label = require('../components/Label');

var { Link } = Router;

var Yo = React.createClass({
  mixins: [ Router.State, PureRenderMixin ],
  // statics: {
  //   willTransitionFrom: function (transition, element) {
  //   },
  //   willTransitionTo: function (transition) {
  //   }
  // },
  componentDidMount: function () {
    var intro = this.refs.intro.getDOMNode();

    var t = new TimelineMax({repeat:-1, yoyo:true});
    t.to(intro, 0.5, {y:'-=100'});
  },
  render: function() {
    var name = this.getParams().name;
    return (
      <div className="container">
        <div className="Aligner">
          <h2 ref="intro">ᕙ༼ຈل͜ຈ༽ᕗ {name}</h2>
        </div>
        <div className="jsx-label">
          <Label user={this.props.data.get('githubUser')}
                 link={this.props.data.get('githubLink')}
                 image={this.props.data.get('githubImage')}
                 changeImage={this.props.changeImage} />
          <ul>
            <li>
              <Link to="main"><i className="long arrow left icon"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Yo;
