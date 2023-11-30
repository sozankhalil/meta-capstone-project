import React from 'react'
import Nav from './Nav'
import logo from '../images/Logo .svg'

function Header() {
  return (
    <header>
        <img src={logo} alt=''/>
        <Nav/>
    </header>
  )
}

export default Header