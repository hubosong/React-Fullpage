import React from 'react'

import './style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

//import 'materialize-css/dist/css/materialize.min.css'

export default props => {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}