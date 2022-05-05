import React, { useState } from 'react';
import TransactionList from './TransactionList';
import TransactionsFilter from './TransactionsFilter';
import Card from '../Card'
import IncomeExpense from './IncomeExpense';



const Transactions = (props) => {
  const current = new Date();
  const currentMonth = current.getMonth();
  const [filteredMonth, setFilteredMonth] = useState(currentMonth.toString());
  // const [isFiltered, setIsFiltered] = useState(false);

  const filterChangeHandler = (selectedMonth) => {
      // setIsFiltered(true);
      setFilteredMonth(selectedMonth);
  };

  const filteredTransactions = props.items.filter((transaction) => {
    if (filteredMonth === "-") {
      return new Date(transaction.date).getFullYear().toString()==='2022';
    } else {
      return new Date(transaction.date).getMonth().toString() === filteredMonth;
    }
  });

  if (props.items.length === 0) {
    return <div>Loading transactions</div>
  } else {
    return (
      <div>
        <div className='Transactions balance-chart'>
          <IncomeExpense items={filteredTransactions}/>
        </div>
        <Card className='Transactions'>
          <TransactionsFilter
            selected={filteredMonth}
            onChangeFilter={filterChangeHandler}
          />
          {/* {isFiltered && */}
          <TransactionList items={filteredTransactions} onDeleteTransaction={props.onDeleteTransaction}
          onUpdateTransaction={props.onUpdateTransaction} />
          {/* }
          {!isFiltered &&
          <TransactionList items={props.items}
          onDeleteTransaction={props.onDeleteTransaction}
          onUpdateTransaction={props.onUpdateTransaction} />
          }  */}
        </Card>
      </div>
    )}
  }
  
  export default Transactions;

  