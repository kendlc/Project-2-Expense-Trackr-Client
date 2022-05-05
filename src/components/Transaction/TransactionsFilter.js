import React from 'react';
import {} from 'react-bootstrap';

const TransactionsFilter = (props) => {

  const dropdownOptionChangeHandler = (event) => {
    props.onChangeOption(event.target.value);
  };

  return (
    <div className='transactions-filter'>
      <div className='transactions-filter__control'>
        <label className='text-primary px-2'>Filter by</label>
        <select className='form-select' value={props.selected} 
          onChange={dropdownOptionChangeHandler}>
          <option value="-">None</option>
          <option value='0'>Year</option>
          <option value='1'>Month</option>
        </select>
      </div>
    </div>
  );
};
  
export default TransactionsFilter;