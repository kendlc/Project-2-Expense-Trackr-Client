import React from 'react';
import TransactionItem from './TransactionItem';
import './TransactionList.css'

const TransactionList = (props) => {

  console.log(props.categories)
  console.log(props.items)

  if (props.items.length === 0) {
    return <h2>Found no transaction.</h2>;
  } else {
    return (
      <ul className='transaction-list'>
         {props.categories.map((category) => {
          return  <div key={category.id}>
                    {/* Category: {category.name} */}

                    {props.items.map((transaction) => {
                      if (transaction.category_id === category.id) {
                        return  <div key={transaction.id}>
                                  <TransactionItem
                                    category_name={category.name}
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
                      }
                    })}

                  </div>
          })}
      </ul>
    );
  }

  // if (props.items.length === 0) {
  //   return <h2>Found no transaction.</h2>;
  // } else {
  //   return (
  //     <ul className='transaction-list'>
  //       {props.items.map((transaction) => {
  //         return <div key={transaction.id}>
  //                   <TransactionItem
  //                     id={transaction.id}
  //                     title={transaction.title}
  //                     type={transaction.type_of}
  //                     description={transaction.description}
  //                     amount={transaction.amount}
  //                     date={transaction.date}
  //                     category_id={transaction.category_id}
  //                     onDeleteTransaction={props.onDeleteTransaction}
  //                     onUpdateTransaction={props.onUpdateTransaction}
  //                   />
  //                 </div>
  //         })}
  //     </ul>
  //   );
  // }

};

export default TransactionList;