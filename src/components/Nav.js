import React from 'react'
import Button from './Button'
import './Nav.css'

const Nav = ({onShowAbout, onShowContact,setHome}) => {
  return (
    <nav className='navigation-menu'>
    <Button onClick={onShowAbout} text="About" onDoubleClick={setHome}/>
    <Button onClick={onShowContact} text="Contact" onDoubleClick={setHome}/>
    </nav>
  )
}

export default Nav