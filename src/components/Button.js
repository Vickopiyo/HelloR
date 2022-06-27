import React from 'react'

const Button = ({color,text,padding}) => {
  return (<div className='btnAll'>
    <button style={{backgroundColor:color,padding:padding}} className='btn'>{text}</button>
  </div>
    
        
  )
}

export default Button