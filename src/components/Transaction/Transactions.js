import React, { useState } from 'react';
import TransactionList from './TransactionList';
import TransactionsFilter from './TransactionsFilter';
import Card from '../Card'
import IncomeExpense from './IncomeExpense';
import createRequest from '../../request';


const Transactions = (props) => {
    const current = new Date();
    const currentMonth = current.getMonth();
    const [filteredMonth, setFilteredMonth] = useState();
    const [isFiltered, setIsFiltered] = useState(false);

    // createRequest(`/users.json`).then((reps)=>{
    //   setTransactions(reps.data.transactions);
    // })
    const filterChangeHandler = (selectedMonth) => {
        setIsFiltered(true);
        setFilteredMonth(selectedMonth);
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
            <div className='Transactions balance-chart'>
            {isFiltered &&
            <IncomeExpense items={filteredTransactions}/>
            }
            {!isFiltered&&
            <IncomeExpense items={props.items}/>            
            }
            </div>
            <Card className='Transactions'>
              <TransactionsFilter
                selected={filteredMonth}
                onChangeFilter={filterChangeHandler}
              />
              {isFiltered &&
              <TransactionList items={filteredTransactions} onDeleteTransaction={props.onDeleteTransaction}
              onUpdateTransaction={props.onUpdateTransaction} />
              }
              {!isFiltered &&
              <TransactionList items={props.items}
              onDeleteTransaction={props.onDeleteTransaction}
              onUpdateTransaction={props.onUpdateTransaction} />
              } 
            </Card>
      </div>
    );
  };
  
  export default Transactions;

  