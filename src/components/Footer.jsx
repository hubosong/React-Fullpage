import React from 'react'
import '../style.css'

import Footer from './footer/Footer'
import Copyright from './footer/Copyright'
import Maps from './footer/Maps'

export default props => {
    return (
        <div>
            <footer class="page-footer purple darken-4">
                <Footer></Footer>
                <Maps></Maps>
                <Copyright></Copyright>
            </footer>
        </div>
    )
}