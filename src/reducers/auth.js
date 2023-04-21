const authenticationReducerDefaultState = {};

const authenticationReducer = (state = authenticationReducerDefaultState, action) => {
    switch(action.type) {
        
        case 'LOGIN':
            return {
                uid: action.uid
            };
            
        case 'SET_USER_PROFILE':
            return {
                ...state,
                displayName: action.displayName,
                email: action.email,
                photoURL: action.email
            };
        case 'LOGOUT': 
            return {};

        default:
             return state;  
    } 
};

export default authenticationReducer;