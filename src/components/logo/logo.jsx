import React from 'react'
import Logo from './logo.png'
import './logo.css'

function logo() {
  return(
    <div className='logo-container'>
      <img src={Logo} alt="logo" className='logo-img'/>
    </div>
  )
}

export default logo