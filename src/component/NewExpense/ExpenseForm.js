import React, { useState } from 'react'

const ExpenseForm = () => {
    const [updateTitle, setUpdateTitle]=useState('')
    const [updateAmount, setupdateAmount]=useState('')
    const [updateDate, setupdateDate]=useState('')

    const changeTitle=(event) =>{
        setUpdateTitle(event.target.value)
        console.log(event.target.value)
        // setUpdateTitle((prevstate, event)=>{
        //     return {...prevstate, updateTitle:event.target.value}
        // })
    }
    const changeAmount=(event) =>{
        setupdateAmount(event.target.value)
        console.log(event.target.value)
    }
    const changeDate=(event) =>{
        setupdateDate(event.target.value)
        console.log(event.target.value)
    }

    const submithandler =(event) =>{
        event.preventDefault();
        const expenseData ={
            title: updateTitle,
            amount: updateAmount,
            date: updateDate
        }
        setUpdateTitle('')
        setupdateAmount('')
        setupdateDate('')
        console.log("Expense data", expenseData)

    }
    return (
        <form onSubmit={submithandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label> Title </label>
                <input type="text" onChange={changeTitle} value={updateTitle}></input>
            </div>
            <div className='new-expense__controls'>
                <label> Amount </label>
                <input type="number" onChange={changeAmount} value={updateAmount}></input>
            </div>
            <div className='new-expense__controls'>
                <label> Date </label>
                <input type="date" onChange={changeDate} value={updateDate}></input>
            </div>
            <div className='new-expense__action'>
                <button type='submit'>Submit Expesnse</button>
            </div>
            </div>
        </form>
    )
}

export default ExpenseForm