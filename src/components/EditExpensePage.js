import ExpenseForm from './ExpenseForm';
import ConfirmationModal from './ConfirmationModal';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { history } from '../routers/AppRouter';


const EditExpensePage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const expenses = useSelector(state => state.expenses);
    const expense = expenses.find((expense) => expense.id === id);
    const [modalVisibility, setModalVisibility] = useState(false);

  
    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Edit Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm 
                    expense={expense}
                    onSubmit={(expense) => {
                        dispatch(startEditExpense(id, expense));
                        history.push('/dashboard')
                    }}
                />
                <button 
                    className='button button--secondary' 
                    onClick={() => {setModalVisibility(!modalVisibility)}}  
                > Remove Expense </button>
                <ConfirmationModal 
                    isOpen={modalVisibility}
                    closeModal={() => {setModalVisibility(!modalVisibility)}}
                    expenseData={expense}
                    deleteExpense={() => {
                        dispatch(startRemoveExpense({id}));
                        history.push('/dashboard')
                    }}
                />
            </div>
        </div>
    );
}

export default EditExpensePage;