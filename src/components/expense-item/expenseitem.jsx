const ExpenseItem=({date,title,price})=>{
    return(
        <div style={{
            border:'1px solid blue',
             width:'499px',
             height:'89px',
             display:"flex",
             marginLeft:'100px',
            
             }}>
        <p>{date.toString()}</p>
        <p>{title}</p>
        <p>{price}$</p>
        </div>
    )
}
export default ExpenseItem