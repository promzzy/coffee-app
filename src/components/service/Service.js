import React from 'react'
import styles from './styles/Service.module.css'
import CoffeeNames from '../coffee/CoffeeNames'

export default function Service(){
    return(
        <div className={styles.services}>
			<div className={styles.serviceHead}>OUR SERVICES</div>
			<h3 className={styles.serviceDetail}>We offer different variety of coffee as you demand</h3>
		<div className={styles.container}>
			
			<CoffeeNames />
		
		</div>
	</div>
    )
}