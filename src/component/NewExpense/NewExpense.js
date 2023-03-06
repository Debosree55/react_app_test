import './NewExpense.css'
import './ExpenseForm'
import ExpenseForm from './ExpenseForm'
import React, {useState} from 'react'

const NewExpense = (props) => {
    const [initialExpense,setInitialExpense]= useState(false)
    const saveFormDataHandler=(expense)=>{
        const expensedata={
            id: Math.random().toString(),
            ...expense,
           
        }
        // console.log("######",expensedata)
        props.onSaveExpense(expensedata)
        
    }
    const showFormState=(event)=>{
        setInitialExpense(true)
        // console.log("showFormState", event)
    }

    const stopEditing=()=>{
        setInitialExpense(false)
    }
    return (
        <div className='new-expense'>
            {initialExpense?<ExpenseForm onSave={saveFormDataHandler} onCancel={stopEditing}/>:
            <button onClick={showFormState}>Add New Expense</button>}
        </div>
    )

}
export default NewExpense