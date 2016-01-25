require('normalize.css');
require('styles/App.css');
import React from 'react';
import Profile from './ProfileComponent';

class AppComponent extends React.Component {
  constructor(props) {
  	super(props);
  	let fetchUser = this.props.actions.api;
  	fetchUser('tconroy');
  }
  render() {
    return (
      <Profile userData={this.props.User} />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
