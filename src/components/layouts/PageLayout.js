import React from 'react'
import NavMenu from '../shared/NavMenu.js'
import Footer from '../shared/Footer.js'
export default function PageLayout(props){
    return(
        <div>
            <NavMenu />
            {props.children}
            <Footer />

        </div>
    )
}