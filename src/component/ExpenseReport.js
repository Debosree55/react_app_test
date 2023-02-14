import './ExpenseReport.css'
import ExpenseDate from './ExpensDate.js'

function ExpenseItem (props){
    return (<div className="expense-item">
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
        </div>
        <div className="expense-item__description">
          <h1> {props.title} </h1>
          <div className="expense-item__price"> {props.amount}</div>  
        </div>
        </div>)
}

export default ExpenseItem