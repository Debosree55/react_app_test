import React, { useState } from 'react'
import './ExpenseReport.css'
import ExpenseDate from './ExpensDate.js'
import Card from '../UI/Card'

function ExpenseItem (props){

  // console.log(props.title)
    return (
      <div>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price"> ${props.amount}</div>  
      </div>
    </Card>
    </div>
    )
}

export default ExpenseItem