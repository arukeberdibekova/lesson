
import { useState } from 'react';
import './App.css';
import Expense from './components/expenses/Expenses';
import NewExpense from './components/new-expense/NewExpenses';

const expenses=[
  {
    id:'1e',
    title:  'Туалетная бумага',
    price:10,
    date:new Date(),
  },
  {
    id:'2e',
    title:  'Телефон',
    price:1110,
    date:new Date(),
  },
  {
    id:'3e',
    title:  'Mac',
    price:1220,
    date:new Date(),
  }
]
function App() {
  const [expenses,setExpenses]=useState([])
  const addExpense=(items)=>{
   
      setExpenses([...expenses,items])
    
   
  }
  return (
    <div>
     <NewExpense addExpense={addExpense}/>
    <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
