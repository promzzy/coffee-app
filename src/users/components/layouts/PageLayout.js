import React from 'react'
import Nav from '../shared/Nav.js'
import Footer from '../shared/Footer.js'
export default function PageLayout(props){
    return(
        <div>
            <Nav />
            {props.children}
            <Footer />

        </div>
    )
}