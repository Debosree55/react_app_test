// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from './component/Expense/Expense';
let initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: '2020-7-14'
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: '2021-7-14' },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: '2019-7-14'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: '2021-7-14'
  },
];
function App() {
  const [oldExpenses, setExpenses]= useState(initialExpenses)

  const dynamicExpense = (expense) =>{
    // console.log("@@@@", expense)
    setExpenses((preExpenses)=>{
      return [expense, ...preExpenses]
    })
  }
  return (
<div>
  <Expenses item={oldExpenses} />
  <NewExpense onSaveExpense={dynamicExpense}/>
</div>
  );
}

export default App;
