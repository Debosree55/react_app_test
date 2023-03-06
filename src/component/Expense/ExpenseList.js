import React from "react"
import ExpenseItem from "./ExpenseReport"
import './ExpenseList.css'


const ExpenseList = (props) =>{
    // console.log("!!!!!!!!!!!!", props.item.length)
if(props.item.length ===0)
{
    return (<h2 className="expenses-list__fallback">No record found</h2>)
}

return (
    <div>
    <li className='expenses-list'>
    {props.item.map((prop)=>
        <ExpenseItem
            key={prop.id}
            title={prop.title}
            amount={prop.amount}
            date={prop.date}
          />    
    )}
    </li>
    </div>
)
}

export default ExpenseList