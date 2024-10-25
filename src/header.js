import React from 'react'
import Logo from './tea logo.png'
import { Link } from 'react-router-dom'
import './App.css'
function header() {
  return (
    <div className='header_outer_div'>
      <div className='header_main1'>
      <img src={Logo} alt=''/>
      </div>
      <div className='header_main2'>
      <div><Link className='design' to='/'>HOME</Link></div> 
     <div><Link className='design' to='/Greatest'>GREATEST</Link></div>
     <div><Link className='design' to='/Shop'>SHOP</Link></div> 
     <div><Link className='design' to='/Know'>KNOW</Link></div> 
     <div><Link className='design' to='/Blog'>BLOG</Link></div> 
     <div><Link className='design' to='/Contact'>CONTACT</Link></div> 
      </div>
    </div>
  )
}

export default header