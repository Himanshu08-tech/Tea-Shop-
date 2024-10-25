import React from 'react'
import { Carousel } from 'antd'
import Photo1 from './p1.png'
import Photo2 from './p2.png'
import Photo3 from './p3.png'
import Photo4 from './p4.png'
import Photo5 from './p5.png'
import Photo6 from './p10.png'
import Photo7 from './p7.png'
import Photo8 from './p8.png'

function greatest_tea() {
    return (
        <div className='greatest_outer_div'>
            <h1>Experience the greatest<br />
                taste of Tea</h1>
            <br />
         

            <Carousel  autoplay autoplaySpeed={1430}>
                <div >
                    <div className='greatest_card_outer'>
                        <div className='greatest_card'>
                            <img src={Photo1} />
                            <h2>Paque vitae</h2>
                            <h3>$225.00 – $825.00</h3>
                            <button>Select Option</button></div>
                        <div className='greatest_card'>
                            <img src={Photo2} />
                            <h2>Red justo donew</h2>
                            <h3>$225.00 – $825.00</h3>
                            <button>Select Option</button>
                        </div>
                        <div className='greatest_card'>
                            <img src={Photo3} />
                            <h2>Gusteo donece</h2>
                            <h3>$225.00 – $825.00</h3>
                            <button>Select Option</button>
                        </div>
                        <div className='greatest_card'>
                            <img src={Photo4} />
                            <h2>Erat scelerisque</h2>
                            <h3>$225.00 – $825.00</h3>
                            <button>Select Option</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='greatest_card_outer'>
                        <div className='greatest_card'>
                            <img src={Photo5} />
                            <h2>Sed tempus</h2>
                            <h3>$225.00 – $825.00</h3>
                            <button>Select Option</button></div>
                        <div className='greatest_card'><img src={Photo6} />
                            <h2>Morbi tempusd</h2>
                            <h3>$225.00 – $825.00</h3>
                            <button>Select Option</button></div>
                        <div className='greatest_card'><img src={Photo7} />
                            <h2>Donec ultricesd</h2>
                            <h3>$225.00 – $825.00</h3>
                            <button>Select Option</button></div>
                        <div className='greatest_card'><img src={Photo8} />
                        <h2>Disus feugiat</h2>
                            <h3>$225.00 – $825.00</h3>
                            <button>Select Option</button> </div>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default greatest_tea