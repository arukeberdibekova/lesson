import React from 'react'
const Button=(props)=>{
    return(
        <button 
            onClick={props.onClick}
        style={{
            padding:'10px 15px',
            backgroundColor:'blueviolet',
            color:'white'
        }}>
            {props.title}{' '}
            </button>
    )
}
export default Button