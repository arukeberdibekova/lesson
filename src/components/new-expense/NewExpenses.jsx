import { useState } from "react"
import ExpenseForm from "../expense-form/expenseForm"
import Button from "../UI/Batton"
const NewExpense=({addExpense})=>{
    console.log(addExpense);
    const [isToggle, setIsToggle]=useState(false)
    function isShowToggle(){
setIsToggle((prevState)=> !prevState)
    }
    console.log('RENDER');
return(
    <div 
    style={{
        width:'500px',
        height:'150px',
         border:'1px solid red',
          marginLeft:'400px' ,
           background:' #AD9BE9'
          }}>
{  <Button title='Добавить новый расход' onClick={isShowToggle}/>}    
{ isToggle &&< ExpenseForm  addExpense={addExpense} isShowToggle={isShowToggle}/>}
    </div>
)
}
export default NewExpense