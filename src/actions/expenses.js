import { db } from '../firebase/firebase';
import { ref, update, remove, onValue, push } from "firebase/database";


export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid;

        onValue(ref(db, `users/${uid}/expenses`), (snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        }, { onlyOnce: true }); 
    };
};

const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0 
        } = expenseData;
        const expense = {description, note, amount, createdAt};

        push(ref(db, `users/${uid}/expenses`), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });
    }
};

const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});


export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid;
        update(ref(db, `users/${uid}/expenses/${id}`), updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    };
};

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});


export const startRemoveExpense = ( {id} = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid;
        remove(ref(db, `users/${uid}/expenses/${id}`)).then(() => {
            dispatch(removeExpense({id}));
        })
    };
};

const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});


export const clearExpensesAfterLogout = () => ({
    type: 'CLEAR_EXPENSES_AFTER_LOGOUT'
});

