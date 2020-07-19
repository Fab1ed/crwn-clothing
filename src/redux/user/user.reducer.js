const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {//ES6 feature, if state isn't defined it'll have default value of initial state
    switch (action.type) {
        case 'SET_CURRENT_USER': 
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;