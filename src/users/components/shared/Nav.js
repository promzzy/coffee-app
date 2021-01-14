import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Nav.module.css'

export default function Nav(){
    return(
        <>
        <div className={styles.nav}>
            <div>LOGO</div>

            <div>
                <ul className={styles.navMenu}>

                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    <Link to="/about/aboutus">
                    <li>About</li>
                    </Link>
                    <Link to="/services/services">
                    <li>Services</li>
                    </Link>
                    <Link to="/contact/contactUs">
                    <li>Contact</li>
                    </Link>
                </ul>
            </div>
            
        </div>
        </>
    )
}