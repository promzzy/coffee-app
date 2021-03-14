import React from 'react'
import styles from './styles/Footer.module.css'
export default function Footer(){
    return(
        <>
        <footer>
	<div className={styles.container}>
		<div className={styles.footerMenu}>
			<div>
				<span class={styles.footerHeadings}>quick link</span>
				<ul>
					<li>home</li>
					<li>about</li>
					<li>services</li>
					<li>contact</li>
				</ul>
			</div>
			<div>
				<h5 class={styles.footerHeadings}>location</h5>
				<p>NO.35 BANEX PLAZA WUSE 2, ABUJA.</p>
			</div>
			<div>
				<h5 class={styles.footerHeadings}>SERVICES</h5>
				<ul>
					<li>coffe production</li>
					<li>coffe delivery</li>
					<li>coffe innovation</li>
				</ul>
			</div>
			<div>
				<h5 class={styles.footerHeadings}>PRODUCTION CHAIN</h5>
				<ul>
					<li>MOBI-CAFE</li>
					<li>COFFE BLACK</li>
					<li>COFFE WHITE</li>
					<li>COFFE CREAM</li>
				</ul>
			</div>
			<div>
				<h5 class={styles.footerHeadings}>SOCIAL PLATFORMS</h5>
				<div className={styles.socialPlatformIcon}>
				<span className={styles.iconBg}>
					
				</span>
				<span class={styles.iconBg}>
				
				</span>
				<span className={styles.iconBg}>

				</span>
				</div>
			</div>
		</div>
		<div>
			<form>
				<h3 className={styles.footerHeadings}>SUBSCIBE TO GET UPDATE ON COFFEE INNOVATIONS</h3>
				<div>
					<div>
					<input type="text" name="" className={styles.formInput} />
					
				</div>
				
					<input className={styles.formSubmitBtn} type="submit" name="" />
				
				</div>

			</form>
		</div>
	</div>
</footer>
        </>
    )
}