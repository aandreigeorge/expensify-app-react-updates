const expensesTotal = (expenses) => expenses.reduce((sum, {amount: value}) => sum + value, 0);

export default expensesTotal;