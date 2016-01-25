module.exports = function(login, json) {
  return {
  	type: 'RECIEVE_USER',
  	recievedAt: Date.now(),
  	login,
  	json
  }
};
