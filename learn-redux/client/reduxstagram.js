import React from 'react';

import { render } from 'react-dom';

import css from './styles/style.styl';

// Import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';  //exposes store to application
// use curly braces when it is a named export, don't use them when it is a default export
// "Named exports are useful to export several values. During the import, one will be able to use the same name to refer to the corresponding value.
// Concerning the default export, there is only a single default export per module. 
// A default export can be a function, a class, an object or anything else. 
//This value is to be considered as the "main" exported value since it will be the simplest to import."
// eg. If you need to export multiple objects use named exports(without default keyword), otherwise use default

import store, { history } from './store';
// $r.store.getState(); in console will show you current state

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
