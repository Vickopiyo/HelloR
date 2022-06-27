import React from 'react'
import PropTypes from "prop-types"
import button from "./Button"
import Button from './Button'


const Header = ({title}) => {
  return (
    <header className='header'>
        <h1 className='header1'>Hello my name is Victor</h1>
        <Button color="green" text="Hello" padding = "10px"/>
        <Button color="yellow" text="Hello2" padding = "15px"/>
        <Button color="white" text="Hello3" padding = "10px"/>
        <h2 >{title}</h2>
        
        
    </header>
  )
}
Header.defaultProps = {
    title:"React is awesome"
}
Header.propTypes = {
    title : PropTypes.string
}

export default Header
