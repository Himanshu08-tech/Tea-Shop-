import React from 'react'
import  Photo1  from './blog1.jpg'
import  Photo2  from './blog2.jpg'
import  Photo3  from './blog3.jpg'
function blog() {
  return (
    <div  >
        <div className='blog_most_div'> <h1>Recent Blog Post</h1></div>
    <div  className='blog_outer_div'>
       
        <div className='blog_main1'>
            <img src={Photo1}/>
            <h2>Aenean varius risus luctus</h2>
            <p>wpthemes | June16,2023 | No Comment<br/>
            <br/>
            Duis vehicula purus nisl, vel finibus eros lobortis a.<br/>
             Aenean sed augue rhoncus, mollis libero</p>
        </div>
        <div className='blog_main1'>
        <img src={Photo2}/>
        <h2>Donec pharetra lacinia</h2>
        <p>wpthemes | June16,2023 | No Comment<br/>
            <br/>
            Duis vehicula purus nisl, vel finibus eros lobortis a.<br/>
             Aenean sed augue rhoncus, mollis libero</p>
        </div>
        <div className='blog_main1'>
        <img src={Photo3}/>
        <h2>Aenean sed augue rhoncus</h2>
        <p>wpthemes | June16,2023 | No Comment<br/>
            <br/>
            Duis vehicula purus nisl, vel finibus eros lobortis a.<br/>
             Aenean sed augue rhoncus, mollis libero</p>
        </div>
    </div>
    </div>
  )
}

export default blog