'use strict';

var GSAP = require('gsap');
var R = require('Ramda');
var Immutable = require('Immutable');
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler } = Router;
var Main = require('./routes/Main');
var Yo = require('./routes/Yo');

var IMAGE_PATH = 'dist/images/';

React.initializeTouchEvents(true);

var Container = React.createClass({
  getInitialState: function () {
    var data = Immutable.OrderedMap();
    data = data.set('steps', Immutable.List.of({
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
      }).toArray());
    data = data.set('logo', IMAGE_PATH + 'reactjs.png');
    data = data.set('githubUser', '@andrewdamelio');
    data = data.set('githubLink', 'https://github.com/andrewdamelio/react-boilerplate');
    data = data.set('githubImage', 'dist/images/avatar.jpg');
    return {
      data : data
    };
  },
  updateActiveState : function(step) {
    var newStep = this.state.data.get('steps');
    newStep[step.key].active =! newStep[step.key].active;

    this.setState({
       data: this.state.data.set('steps', newStep)
     });
  },
  changeImage: function(image) {
    var newImage ='';
    if (image === IMAGE_PATH + 'avatar.jpg') {
      newImage = IMAGE_PATH + 'haters.png';
    } else {
      newImage = IMAGE_PATH + 'avatar.jpg';
    }
    this.setState({
      data: this.state.data.set('githubImage', newImage)
    });
  },
  render: function() {
    return (
      <div className="container">
        <RouteHandler changeImage={this.changeImage}
                      data={this.state.data}
                      updateActiveState={this.updateActiveState} />
      </div>
    );
  }
});

var routes = (
  <Route handler={Container}>
    <Route name="main" path="/" handler={Main} />
    <Route name="yo" path="/yo/:name" handler={Yo} />
  </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});
