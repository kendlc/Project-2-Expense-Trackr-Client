import React, { useState } from 'react';
import {} from 'react-bootstrap';
import TransactionList from './TransactionList';
import TransactionsFilter from './TransactionsFilter';
import TransactionsFilterYear from './TransactionsFilterYear';
import TransactionsFilterMonth from './TransactionsFilterMonth';
import Card from '../Card'
import IncomeExpense from './IncomeExpense';

const Transactions = (props) => {
  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth();
  const currentDate = current.getDate();

  const [filterOption, setFilterOption] = useState('1');
  const [filteredYear, setFilteredYear] = useState(currentYear.toString());
  const [filteredMonth, setFilteredMonth] = useState(currentMonth.toString());

  const filterChangeHandlerOption = (selectedOption) => {
    setFilterOption(selectedOption);
  };
  
  const filterChangeHandlerYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterChangeHandlerMonth = (selectedMonth) => {
      setFilteredMonth(selectedMonth);
  };
  
  const filteredTransactions = props.items.filter((transaction) => {
    if (filterOption === '-'){
      return (new Date(transaction.date) )
    } else {
      if (filteredYear === "-" && filteredMonth === '-') {
        return (new Date(transaction.date) )
      } 
      else if (filteredMonth === '-') {
        return new Date(transaction.date).getFullYear().toString() === filteredYear; 
      }
      else {
        return (new Date(transaction.date).getFullYear().toString() === filteredYear && 
        new Date(transaction.date).getMonth().toString() === filteredMonth);
      }
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
          {filterOption === '-' &&
          <TransactionsFilter
            selected={filterOption}
            onChangeOption={filterChangeHandlerOption}
          />}
          {filterOption === '0' &&
          <span className='d-flex flex-row'>
          <TransactionsFilter
            selected={filterOption}
            onChangeOption={filterChangeHandlerOption}
          />
          <TransactionsFilterYear
            selected={filteredYear}
            onChangeFilterYear={filterChangeHandlerYear}
          />
          </span>
          }
          {filterOption === '1' &&
          <span className='d-flex flex-row'>
          <TransactionsFilter
            selected={filterOption}
            onChangeOption={filterChangeHandlerOption}
          />
          <TransactionsFilterYear
            selected={filteredYear}
            onChangeFilterYear={filterChangeHandlerYear}
          />
          <TransactionsFilterMonth
            selected={filteredMonth}
            onChangeFilterMonth={filterChangeHandlerMonth}
          />
          </span>
          }

          <TransactionList
            items={filteredTransactions}
            onDeleteTransaction={props.onDeleteTransaction}
            onUpdateTransaction={props.onUpdateTransaction}
            categories={props.categories}
          />
        </Card>
      </div>
  )}

}
  
export default Transactions;




  // import React, { useState } from 'react';
  // import TransactionList from './TransactionList';
  // import TransactionsFilter from './TransactionsFilter';
  // import Card from '../Card'
  // import IncomeExpense from './IncomeExpense';
  // import createRequest from '../../request';
  
  
  // const Transactions = (props) => {
  //   const current = new Date();
  //   const currentMonth = current.getMonth();
  //   const [filteredMonth, setFilteredMonth] = useState(currentMonth.toString());
  //   // const [isFiltered, setIsFiltered] = useState(false);
  
  //   const filterChangeHandler = (selectedMonth) => {
  //       // setIsFiltered(true);
  //       setFilteredMonth(selectedMonth);
  //   };
  //   console.log(new Date())
  //   const filteredTransactions = props.items.filter((transaction) => {
  //     if (filteredMonth === "-") {
  //       return new Date(transaction.date).getFullYear().toString()==='2022';
  //     } else {
  //       return new Date(transaction.date).getMonth().toString() === filteredMonth;
  //     }
  //   });
  
  //   if (props.items.length === 0) {
  //     return <div>Loading transactions</div>
  //   } else {
  //     return (
  //       <div>
  //         <IncomeExpense items={filteredTransactions}/>
  //         <Card className='Transactions'>
  //           <TransactionsFilter
  //             selected={filteredMonth}
  //             onChangeFilter={filterChangeHandler}
  //           />
  //           {/* {isFiltered && */}
  //           <TransactionList items={filteredTransactions} onDeleteTransaction={props.onDeleteTransaction}
  //           onUpdateTransaction={props.onUpdateTransaction} />
  //           {/* }
  //           {!isFiltered &&
  //           <TransactionList items={props.items}
  //           onDeleteTransaction={props.onDeleteTransaction}
  //           onUpdateTransaction={props.onUpdateTransaction} />
  //           }  */}
  //         </Card>
  //       </div>
  //     )}
  //   }
    
  //   export default Transactions;
  
