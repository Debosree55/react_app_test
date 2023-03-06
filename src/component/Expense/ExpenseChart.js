import React from "react";
import Chart from "./Chart";

const ExpenseChart =(props)=>{
    const chartExpense =[
        {label: "0", value: 0},
        {label: "1", value: 0},
        {label: "2", value: 0},
        {label: "3", value: 0},
        {label: "4", value: 0},
        {label: "5", value: 0},
        {label: "6", value: 0},
        {label: "7", value: 0},
        {label: "8", value: 0},
        {label: "9", value: 0},
        {label: "10", value: 0},
        {label: "11", value: 0}
        
    ]
    for (const expense of props.expenses) {
        console.log("expense!!",expense)
        const [year,month,date]=expense.date.split('-')
        const expenseMonth = new Date(year,month,date).getMonth(); // starting at 0 => January => 0
        chartExpense[expenseMonth].value += expense.amount;
      }
    console.log("chartExpense",chartExpense)

return (

<div>
<Chart dataPoints={chartExpense}/>
</div>
    
)

}
export default ExpenseChart