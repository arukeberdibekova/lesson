import ExpenseItem from "../expense-item/expenseitem"

const Expense=(props)=>{
    return(
        <div style={{
            width:'700px',
            height:'400px',
            border:'1px solid black',
           marginLeft:'300px',
       

        }}>
{props.expenses.map((el)=>{
    return (
    <ExpenseItem
     title={el.title }
      price={el.price} 
      date={el.date}/>
    )
})}
        </div>
    )
}
export default Expense