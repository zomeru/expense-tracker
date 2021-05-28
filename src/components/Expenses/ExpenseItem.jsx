import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItem = props => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{`PHP ${props.amount}`}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
