import './Expensedate.css'

function ExpenseDate (props) {
    // console.log("Expense ", props)
const [year, month,date]=props.date.split('-')
    // console.log("Expense date ", month,year,date)

    return (
        <div>
             <div className="expense-date__year">{year}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__date">{date}</div>
        </div>  
    )
}

export default ExpenseDate