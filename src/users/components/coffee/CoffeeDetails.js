import React, { useEffect, useState} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import styles from './styles/CoffeeDetails.module.css'
import {coffee} from '../../../data/coffees'

export default function CoffeeDetails(){

    const {id} = useParams()

    const history = useHistory()

   const [coffees, setCoffees] = useState()

    useEffect(() => {
        setCoffees(coffee)
    },
    [])

    function handleGoBack(){
        history.goBack()
    }


    return(
        <div className={styles.coffeeDetailsBanner}>
            {
                coffees && coffees.filter(coffee => coffee.id == id ).map(coffee => (
                    <div className={styles.coffeeDetailsContent}>
                        
                <button className={styles.goBackBtn} onClick={handleGoBack}>Go Back</button>
                        
                    <div className={styles.title}>{coffee.name}</div>
                    <div className={styles.discription}>{coffee.discription}</div>
                    <div className={styles.details}>{coffee.details}</div>
                    <div className={styles.prize}>{coffee.prize}</div>

             <Link className={styles.link} to={`/order/createOrder/${coffee.id}`}>
            Place Order
            </Link>
            
                    </div>
                ))
            }
           
        </div>
    )
}