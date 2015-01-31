'use strict';

var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var Label = require('../components/Label');

var IMAGE_PATH = 'dist/images/';

var Yo = React.createClass({
  mixins: [ Router.State ],
  getInitialState: function() {
    return {
      githubUser: '@andrewdamelio',
      githubLink: 'https://github.com/andrewdamelio/react-boilerplate',
      githubImage: IMAGE_PATH + 'avatar.jpg'
    };
  },
  changeImage: function(image) {
    var newImage ='';
    if (image === IMAGE_PATH + 'avatar.jpg') {
      newImage = IMAGE_PATH + 'haters.png';
    } else {
      newImage = IMAGE_PATH + 'avatar.jpg';
    }
    this.setState({
      githubImage: newImage
    });
  },
  render: function() {
    var name = this.getParams().name;
    return (
      <div className="container">
        <div className="Aligner">
          <h2>ᕙ༼ຈل͜ຈ༽ᕗ {name}</h2>
        </div>
        <div className="jsx-label">
          <Label user={this.state.githubUser}
                 link={this.state.githubLink}
                 image={this.state.githubImage}
                 changeImage={this.changeImage}/>
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
