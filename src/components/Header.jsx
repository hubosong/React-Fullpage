import React from 'react'
import '../style.css'

import Slider from './header/Slider'
import Nav from './header/Nav'


export default props => {
    return (
        <div>
            <Nav></Nav>
            <Slider></Slider>   
        </div>
    )
}