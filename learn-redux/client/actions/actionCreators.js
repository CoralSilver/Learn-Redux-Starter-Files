// an action is just an object with some info about what happened and what needs to change
// actually making the change is done through reducers

// you cannot put async actions in your reducers
// if you need support for async actions you can use something like: 
// Redux Thunk: https://github.com/gaearon/redux-thunk
// Redux Saga: https://github.com/redux-saga/redux-saga

// Utility to help working with JSON with deeply nested data:
// https://github.com/paularmstrong/normalizr


// increment number of likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index  // want to send as little info with action as possible. All we need is index as identifier.
    }
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId, 
        author, 
        comment
    }
}

// remove comment
export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        postId, 
        index
    }
}
