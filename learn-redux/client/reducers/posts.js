// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

// In Redux we use functional programming. 
// We should not mutate state, ie functions should always be pure functions 
// (given the same input should always produce the same output)
// ie we should not mutate something outside the function
// we do this by making a copy of the old state (array, object,etc), modify that, and return that copy

// set state to empty array using es6 default parameters
// as the first time function runs state won't be equal to anything
function posts(state = [], action) {
    // need to use a switch statement because all the reducers run for each action
    switch (action.type) {
        case 'INCREMENT_LIKES':
        const i = action.index;
            console.log("incrementing likes")
            // return the updated state
            return [
                ...state.slice(0,i), //everything before the object at index we are updating
                {...state[i], likes: state[i].likes + 1}, // updates just the one post we want to update
                ...state.slice(i + 1), //everything after the object at index we are updating
            ]    
        default:
            return state;
    }

}

export default posts;

