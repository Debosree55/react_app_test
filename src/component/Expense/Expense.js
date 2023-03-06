// import React from 'react';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensFilter';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    // console.log("!!!!", JSON.stringify(props))
    const [filteredDate, setFilteredDate]= useState('2022')
    const selectDate = (date)=>{
        setFilteredDate(date)
        // console.log("%%%",date)
      }
    const filterYear = props.item.filter((value)=>
    {
    // console.log("value",value)
    const [year, , ]=value.date.split('-')
    // console.log("value1",filteredDate, year); 
    return filteredDate===year.toString()}
    )
      // console.log("filteredDate",filterYear)

  return ( 
    <div>
      <ExpenseChart expenses={filterYear}/>
      <div>
      
    <Card className="expenses">
    <ExpensesFilter onfilterDate={selectDate}/>
    
    <ExpenseList item={filterYear}/>   
    </Card>
    </div>  
    </div>
  );
}

export default Expenses;