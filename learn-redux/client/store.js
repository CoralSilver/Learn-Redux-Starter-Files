import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import data

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
    posts, 
    comments
}

// above is same as below in es6 (can only be done if property key and variable name are the same)
// const defaultState = {
//     posts: posts, 
//     comments: comments
// }

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const store = createStore(
    rootReducer, 
    defaultState,
    enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('./reducers/', () => {
        // must use CommonJS require syntax here because you can't use ES6 imports inside of a function
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
