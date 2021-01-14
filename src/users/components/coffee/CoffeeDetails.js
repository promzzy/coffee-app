import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles/CoffeeDetails.module.css'
import {coffee} from '../../../data/coffees'

export default function CoffeeDetails(){

    const {id} = useParams()


   const [coffees, setCoffees] = useState()

    useEffect(() => {
        setCoffees(coffee)
    },
    [])


    return(
        <div className={styles.coffeeDetailsBanner}>
            {
                coffees && coffees.filter(coffee => coffee.id == id ).map(coffee => (
                    <div className={styles.coffeeDetailsContent}>
                    <div className={styles.title}>{coffee.name}</div>
                    <div className={styles.discription}>{coffee.discription}</div>
                    <div className={styles.details}>{coffee.details}</div>
                    <div className={styles.prize}>{coffee.prize}</div>
                    </div>
                ))
            }
        </div>
    )
}