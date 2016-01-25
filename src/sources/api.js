import requestUser from '../actions/User/request';
import recievedUser from '../actions/User/recieve';

module.exports = function(login) {
	return dispatch => {
		dispatch(requestUser(login));

		return fetch(`https://api.github.com/users/${login}`)
			.then(response => response.json())
			.then(json => {
				// can dispatch as many things as we want from here
				dispatch( recievedUser(login, json) );
			})
			.catch(err => {
				// error handling
			});
	};
};