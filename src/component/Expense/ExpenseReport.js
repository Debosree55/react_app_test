import React, { useState } from 'react'
import './ExpenseReport.css'
import ExpenseDate from './ExpensDate.js'
import Card from '../UI/Card'

function ExpenseItem (props){
  console.log(props.title)
  const [title, setTitle]=useState(props.title);
  const clicked = ()=>{
    if(title===props.title)
    setTitle(' Sanitizer ')
    else 
    setTitle(' Cotton ')

  }
    return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
          <h2> {title} </h2>
          <div className="expense-item__price"> ${props.amount}</div>  
      </div>
      <button onClick={clicked}>Change title</button>
    </Card>)
}

export default ExpenseItem