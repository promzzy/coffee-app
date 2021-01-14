import React from 'react'
import styles from './styles/AboutUs.module.css'

export default function AboutUs(){
    return(
    <>    
            <div className={styles.aboutUs}>
		<div className={styles.aboutUsHeader}>
			<h2>WHO WE ARE</h2>
		</div>

		<span className={styles.aboutUsBody}>
			<h4 className={styles.aboutUsbodyContents}>
			It is not about the break<br /> rather what makes it a break
			<p>
				We believe you have <br /> an amazing break time <br /> with a cup of cofee to help <br /> you relax always.
			
			</p>
            </h4>
		</span>
	</div>
    </>
    )
}