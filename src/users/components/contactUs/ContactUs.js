import React, { useState} from 'react'
import styles from './styles/ContactUs.module.css'

export default function ContactUs(){
const [contactUs, setContactUs] = useState({
	name: "",
	email: "",
	subject: "",
	message: ""

},)

function handleChange(e){
	const {name, value} = e.target
	setContactUs({...contactUs, [name]: value})
}


    return(
            <>
			
            	<div className={styles.contactUs}>
		<div className={styles.contactUsContainer}>
		<h2>
			WE LOVE TO HEAR FROM YOU
		</h2>
		<form className={styles.inp}>
			<div className={styles.formContent}>
				
				<div>
					<input onChange={handleChange} value={contactUs.name} type="text" name="name" placeholder="Name" className={styles.input} />
				</div>
				<div>
					<input onChange={handleChange} value={contactUs.email} type="email" name="email" placeholder="Email" className={styles.input} />
				</div>
				<div>
					<input onChange={handleChange} value={contactUs.subject} type="text" name="subject" placeholder="Subject" className={styles.input} />
				</div>
				<div>
					<textarea onChange={handleChange} value={contactUs.message} name="message" className={styles.textarea} placeholder="Message" />
				</div>

				<div>
				<button className={styles.submitButton}>submit</button>
				</div>
				
			</div>
		</form>
		</div>
	</div>
            </>
        )
}