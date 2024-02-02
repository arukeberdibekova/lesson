const Form =({id,labelName,type,onChange,value})=>{
    return(
        <div >
            <label  htmlFor={id}>{ labelName}</label>
            <input style={{
            Width:'340px',
            Height:'64px',
            Top:'271px',
            Left:'370px',
            Radius:'8px'
        }} id={id} type={type} onChange={onChange} value={value}/>
        </div>
    )
}
export default Form