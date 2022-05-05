import React from 'react';
import {} from 'react-bootstrap';

const TransactionsFilter = (props) => {

    const dropdownOptionChangeHandler = (event) => {
      props.onChangeOption(event.target.value);
    };

    return (
      <div className='transactions-filter'>
        <div className='transactions-filter__control'>
          <label className='text-primary px-2'> Filter by</label>
          <label></label>
          <select className='form-select' value={props.selected} onChange={dropdownOptionChangeHandler}>
            <option value="-">None</option>
            <option value='0'>Year</option>
            <option value='1'>Month</option>
          </select>
        </div>
      </div>
    );
  };
  
export default TransactionsFilter;





  // import React from 'react';


  // const TransactionsFilter = (props) => {
  
  //     const dropdownMonthChangeHandler = (event) => {
  //       props.onChangeFilter(event.target.value);
  //     };
  
  //     return (
  //       <div className='transactions-filter'>
  //         <div className='transactions-filter__control'>
  //           <label> Filter by Month</label>
  //           <select value={props.selected} onChange={dropdownMonthChangeHandler}>
  //             <option value="-">All</option>
  //             <option value='0'>Jan</option>
  //             <option value='1'>Feb</option>
  //             <option value='2'>Mar</option>
  //             <option value='3'>Apr</option>
  //             <option value='4'>May</option>
  //             <option value='5'>Jun</option>
  //             <option value='6'>Jul</option>
  //             <option value='7'>Aug</option>
  //             <option value='8'>Sep</option>
  //             <option value='9'>Oct</option>
  //             <option value='10'>Nov</option>
  //             <option value='11'>Dec</option>
  //           </select>
  //         </div>
  //       </div>
  //     );
  //   };
    
  //   export default TransactionsFilter;