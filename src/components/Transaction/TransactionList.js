import React from 'react';
import TransactionItem from './TransactionItem';
import './TransactionList.css'


const TransactionList = (props) => {
  // console.log(props)
  if (props.items.length === 0) {
    return <h2>Found no transaction.</h2>;
  } else {
    return (
      <ul className='transaction-list'>
        {props.items.map((transaction) => (
          <div key={transaction.id}>
            <TransactionItem
              id={transaction.id}
              title={transaction.title}
              type={transaction.type_of}
              description={transaction.description}
              amount={transaction.amount}
              date={transaction.date}
              category_id={transaction.category_id}
              onDeleteTransaction={props.onDeleteTransaction}
              onUpdateTransaction={props.onUpdateTransaction}
            />
          </div>
        ))}
      </ul>
    );
  }

};

export default TransactionList;