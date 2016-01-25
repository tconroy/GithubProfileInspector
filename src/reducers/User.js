/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  login: '',
  avatar_url: '',
  url: '',
  name: '',
  company: '',
  blog: '',
  location: '',
  email: '',
  bio: ''
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = Object.assign({}, state);

  switch(action.type) {
    /*
    case 'YOUR_ACTION': {
      // Modify next state depending on the action and return it
      return nextState;
    } break;
    */
    case 'REQUEST_USER': {
      console.log('User Reducer: REQUEST_USER');
      nextState.isFetching = true;
      return nextState;
    } break;

    case 'RECIEVE_USER': {
      console.log('User Reducer: RECIEVE_USER');
      nextState = action.json;
      nextState.isFetching = false;
      return nextState;
    } break;

    case 'INVALIDATE_USER': {
      console.log('User Reducer: INVALIDATE_USER');
      nextState.isFetching = false;
      return nextState;
    } break;

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    } break;
  }
}
