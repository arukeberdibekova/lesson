import React, { useState } from "react"
import Form from "../UI/Form"
import Button from '../UI/Batton'
const ExpenseForm=({addExpense,isShowToggle })=>{
  const [title,setTitle]=useState('')
  const [price,setPrice]=useState(0)
  const [date,setDate]=useState(null)

const titleChangeHandler=(event)=>{
  setTitle(event.target.value);
}
const priceChangeHandler=(event)=>{
  setPrice(event.target.value);
}
const dateChangeHandler=(event)=>{
  setDate(event.target.value);
}

  const cancelHandler=()=>{
isShowToggle()
  }
  const submitHandler=(event)=>{
   event.preventDefault()
   let items={
    title,
    price,
    date,
   }
   addExpense(items);
  }
    return(
      <form >
        {/* <input onChange={titleChangeHandler } type="text" /> */}

       <Form
        labelName='Title' 
        id='title' type='text' 
        onChange={titleChangeHandler}
        value={title}
        />
       <Form
        labelName='Amount'
        id='amount' 
        type='number'
         onChange={priceChangeHandler}
        value={price}
        />
       <Form
        labelName='Date'
         id='date'
          type='date'
          onChange={dateChangeHandler}
          value={date}
          />

     <Button title='отмена' onClick={cancelHandler}/>
     <Button title='Add expense' onClick={submitHandler}/>
     </form>
    )
}
export default ExpenseForm 