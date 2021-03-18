import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Footer.module.css'
import {Nav} from './NavData/Nav'
export default function Footer(){

	const [ navs, setNavs ] = useState([]);

	useEffect(() => {
		setNavs(Nav)
	},[])

    return(
        <>
        <footer>
	<div className={styles.container}>
		<div className={styles.footerMenu}>
			<div>
				<span class={styles.footerHeadings}>quick link</span>
				<ul>
				{
                        navs.map((nav) => (
                            <Link to={nav.url}>
                            <li>{nav.title}</li>
                            </Link> 
                        ))
                    }
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