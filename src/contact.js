import React from 'react'

function contact() {
  return (
    <div  className='contact_outer_div'>
        <div className='contact_main1'></div>
        <div className='contact_main2'>
        <br/>
        <br/>
            <h1>CONTACT US</h1>
            <br/>
            <br/>
            <input placeholder='NAME'></input>
            <br/>
            <br/>
            <input placeholder='EMAIL'></input>
            <br/>
            <br/>
            <input placeholder='CONTACT'></input>
            <br/>
            <br/>
            <input placeholder='MESSAGE'></input>
            <br/>
            <br/>
            <button className='tea_but'>SUBMIT</button>
        </div>
    </div>
  )
}

export default contact