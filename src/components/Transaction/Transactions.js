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

  if (props.items.length === 0) {
    return <div>Add Transaction</div>
  } else {
    const filteredTransactions = props.items.filter((transaction) => {
      if (filterOption === '-') {
        return (new Date(transaction.date) )
      }
      if (filterOption === '0') {
        return new Date(transaction.date).getFullYear().toString() === filteredYear;
      } else {
        return (new Date(transaction.date).getFullYear().toString() === filteredYear && 
        new Date(transaction.date).getMonth().toString() === filteredMonth);
      }
  });
    
return (
  <div>
    <div className='Transactions balance-chart'>
      <IncomeExpense items={filteredTransactions}/>
    </div>
    
    <Card className='Transactions'>
      {filterOption === '-' &&
      <span className='d-flex flex-row'>
      <TransactionsFilter
        selected={filterOption}
        onChangeOption={filterChangeHandlerOption}
      /></span>}
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