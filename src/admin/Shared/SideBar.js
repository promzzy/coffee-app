import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faBook, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import styles from "./styles/SideBar.module.css"
// import Logo from "../../assets/logo-image.png"

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            {/* <img src = {Logo} alt="Schoolcare Logo" className={styles.logo} /> */}
            <div>
                <div className={styles.menuHeader}>AWESOME COFFEE</div>
                <ul className={styles.menu}>
                    <li className={`${styles.menuItem} ${styles.menuActive}`}>
                        <Link to="">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faUserFriends} />
                            Dashboard
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faBook} />
                            All Orders
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faBuilding} />
                            Coffees
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faGraduationCap} />
                            Create Order
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}