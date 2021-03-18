import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/NavMenu.module.css'
import { Nav } from './NavData/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavMenu(){

const [ navs, setNavs ] = useState([]);
const [ toggle, setToggle ] = useState(false)



useEffect(() => {
    setNavs(Nav)
},
 [])


    function handleToggle(){
        setToggle(!toggle)
    }

console.log(toggle)

    return(
        <>
        <div className={styles.nav}>
            

            <div className={styles.logo}>
            <span className={styles.logo1}>LOGO</span>
            <span className={styles.logo2}>LG</span>
            </div>

              
            <div onClick={handleToggle} className={styles.toggleBtn}>
                {
                    toggle ? (<FontAwesomeIcon icon={faTimes}  />) : (<FontAwesomeIcon icon={faBars} className={styles.active} />)
                }
            </div>


                <ul className={ toggle ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
                    {
                        navs.map((nav) => (
                            <Link to={nav.url}>
                            <li>{nav.title}</li>
                            </Link> 
                        ))
                    }
                </ul>
            
            
        </div>
        </>
    )
}