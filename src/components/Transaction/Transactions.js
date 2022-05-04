import React, { useState } from 'react';
import TransactionList from './TransactionList';
import TransactionsFilter from './TransactionsFilter';
import Card from '../Card'
import IncomeExpense from './IncomeExpense';
import createRequest from '../../request';


const Transactions = (props) => {
    const current = new Date();
    const currentMonth = current.getMonth();
    const [filteredMonth, setFilteredMonth] = useState(currentMonth);


    // createRequest(`/users.json`).then((reps)=>{
    //   setTransactions(reps.data.transactions);
    //   console.log(reps.data);
    // })
    const filterChangeHandler = (selectedMonth) => {
        setFilteredMonth(selectedMonth);
        // console.log(selectedMonth);
    };

    const filteredTransactions = props.items.filter((transaction) => {
      if (filteredMonth === "-") {
        return new Date(transaction.date).getFullYear().toString()==='2022';
      } else {
        return new Date(transaction.date).getMonth().toString()===filteredMonth;
      }
  });
  
    return (
      <div>
            <IncomeExpense items={filteredTransactions}/>
            <Card className='Transactions'>
              <TransactionsFilter
                selected={filteredMonth}
                onChangeFilter={filterChangeHandler}
              />
              <TransactionList items={filteredTransactions} onDeleteTransaction={props.onDeleteTransaction}
              onUpdateTransaction={props.onUpdateTransaction} />
            </Card>
      </div>
    );
  };
  
  export default Transactions;
