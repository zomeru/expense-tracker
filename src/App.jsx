import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import Expenses from './components/Expenses/Expenses.jsx';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Laptop',
    amount: 22890,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 45990, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'iPhone 12 Pro',
    amount: 62990,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Car Insurance',
    amount: 15000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpense(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
