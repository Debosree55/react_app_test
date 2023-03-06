import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
   
    const dateFilter =(event)=>{
        // console.log("dateFilter filter value",event.target.value)
        // console.log("dateFilter filter value",event.target.value)
        props.onfilterDate(event.target.value)
        // props.selected()
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateFilter}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;