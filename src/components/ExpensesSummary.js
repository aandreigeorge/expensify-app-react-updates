import React from 'react';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';    
import expensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const ExpensesSummary = ({ allExpensesCount, visibleExpensesCount, expensesTotal}) => {
    const visibleExpensesWord = visibleExpensesCount === 1 ? 'expense' : 'expenses';
    const hiddenExpenseCount = allExpensesCount - visibleExpensesCount;
    const hiddenExpensesWord = hiddenExpenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing <span>{visibleExpensesCount}</span> {visibleExpensesWord} totalling <span>{formattedExpensesTotal}</span></h1>
                {hiddenExpenseCount !== 0 && <p>Not showing {hiddenExpenseCount} {hiddenExpensesWord} due to current filters</p>}
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    const allExpensesCount = state.expenses.length;
    
    return {
        allExpensesCount,
        visibleExpensesCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses) 
    }
};

export default connect(mapStateToProps)(ExpensesSummary);

