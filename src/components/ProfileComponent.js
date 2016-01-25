'use strict';

import React from 'react';

require('styles//Profile.scss');

class ProfileComponent extends React.Component {
  constructor(props) {
  	super(props);
  	// console.log(this);
  }
  renderProfileData() {
  	const user = this.props.userData;
  	return(
  		<div className="profile-component">
  		  <ul>
  		  	<li>avatar URL: {user.avatar_url}</li>
  		  	<li>Bio: {user.bio}</li>
  		  	<li>Blog: {user.blog}</li>
  		  	<li>Company: {user.company}</li>
  		  	<li>Email: {user.email}</li>
  		  	<li>Location: {user.location}</li>
  		  	<li>Login: {user.login}</li>
  		  	<li>Name: {user.name}</li>
  		  	<li>Url: {user.url}</li>
  		  </ul>
  		</div>
	);
  }
  renderNoData() {
  	return (
  		<div>NO DATA TO RENDER DAWG!</div>
	);
  }
  renderFetchingData() {
  	return (
  		<div>Fetching Data...</div>
	);
  }
  render() {
    if (this.props.userData.isFetching) {
    	return this.renderFetchingData();
    } else if (this.props.userData.login) {
    	return this.renderProfileData();
    } else {
    	return this.renderNoData();
    }
  }
}

ProfileComponent.displayName = 'ProfileComponent';

// Uncomment properties you need
// ProfileComponent.propTypes = {};
// ProfileComponent.defaultProps = {};

export default ProfileComponent;
