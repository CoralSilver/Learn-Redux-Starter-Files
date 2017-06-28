function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // return existing state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            // return without the removed comment
            let newState = [
                // from the start of the array to the comment we want to delete
                ...state.slice(0, action.index),
                // everything after the comment we want to delete
                ...state.slice(action.index + 1)
            ];
            return newState;
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            // using square brackets so key can be a variable
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;
