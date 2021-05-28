import React, { useState } from 'react';
import Card from '../UI/Card.jsx';
import ExpenseFilter from './ExpensesFilter.jsx';
import ExpensesList from './ExpensesList.jsx';
import ExpensesChart from './ExpensesChart.jsx';
import './Expenses.css';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
