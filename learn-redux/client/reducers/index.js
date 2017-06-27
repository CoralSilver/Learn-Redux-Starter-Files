import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

// reducers do the actual editing of state

// they listen to actions and handle updating state based on an action
// every time you dispatch an action every single reducer is going to run
// whether or not something changes in state is determined by logic of action 
//(ie need to write logic if action is one you are interested in update state)

const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;
