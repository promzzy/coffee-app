import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Banner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
export default function Banner(){
    return(
        <>
        	<div className={styles.banner}>
		<div className={styles.bannercube}>
			<div className={styles.break}>
		<span className={styles.bannerText}>
			<h3>
				take a <br /> break
			</h3>
		</span>
             <FontAwesomeIcon icon={faPlay} className={styles.iconBg} />
		</div>
		
			<Link to="/order/createOrder"  className={styles.bannerBtn} > order now </Link>
	
		</div>
	</div>
        </>
    )
}