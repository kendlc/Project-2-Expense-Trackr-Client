import React from 'react';

import './TransactionDate.css';

const TransactionDate = (props) => {
  const month = new Date(props.date).toLocaleString('en-US', { month: 'long' });
  const day = new Date(props.date).toLocaleString('en-US', { day: '2-digit' });
  const year = new Date(props.date).getFullYear();

  return (
    <div className='transaction-date'>
      <div className='transaction-date__month'>{month}</div>
      <div className='transaction-date__year'>{year}</div>
      <div className='transaction-date__day'>{day}</div>
    </div>
  );
};

export default TransactionDate;