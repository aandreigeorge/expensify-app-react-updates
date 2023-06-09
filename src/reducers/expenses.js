const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {

        case 'SET_EXPENSES':
            return action.expenses;

        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });   
            
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id !== action.id );
            
        case 'CLEAR_EXPENSES_AFTER_LOGOUT':
            return [];    

        default: return state;
    }
};

export default expensesReducer;