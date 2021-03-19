import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Footer.module.css'
import {Nav} from './NavData/Nav'
import { Contacts } from './NavData/Contacts'
import {coffee} from '../../data/coffees'
export default function Footer(){

	const [ navs, setNavs ] = useState([]);
	const [contact, setContact] = useState([])
	const [coffesProducts, setCoffeeProducts] = useState([])

	const contactusClassN = contact.filter(filteredClassN => (filteredClassN.classN === `contactUs`))

	useEffect(() => {
		setNavs(Nav)
		setContact(Contacts)
		setCoffeeProducts(coffee)
	},[])

    return(
        <>
        <footer>
			
		<div className={styles.footerMenu}>
			<div className={styles.footerItems}>
				<div className={styles.footerHeadings}>quick link</div>
				<ul className={styles.footerNav}>
				{
                        navs.map((nav) => (
							<li>
                            <Link className={styles[`${nav.classN}`]} to={nav.url}>
                            {nav.title}
                            </Link> 
							</li>
                        ))
                    }
				</ul>
			</div>
			<div>
				<h5 class={styles.footerHeadings}>contacts</h5>
				<ul>
					{
						contactusClassN.map((contactus) =>(
							<li className={styles[contactus.classN]}>{contactus.title}</li>
						))
					}
				</ul>
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
					{
						coffesProducts.map(products => (
							<li>
								<Link className={styles.product} to={`/coffee/details/${products.id}`}>
								{products.name}
								</Link>
							</li>
						))
					}
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
	
</footer>
        </>
    )
}