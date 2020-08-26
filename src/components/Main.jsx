import React from 'react'
import '../style.css'

import News from './main/News'
import Sidebar from './main/Sidebar'

export default props => {
    return (
        <div className="row container">
            <News></News>
            <Sidebar></Sidebar>
        </div>
    )
}