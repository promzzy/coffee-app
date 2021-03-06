import React, { useState, useEffect } from 'react'
import styles from './styles/CoffeeNames.module.css'
import { Link } from 'react-router-dom'
import {coffee} from '../../data/coffees'


export default function CoffeeNames(){
    const [coffees, setCoffees] = useState()

    useEffect(() =>{
        setCoffees(coffee)
    },
    [])
    return(
        <>
            {
                coffees && coffees.length > 0 ? (<div className={styles.gridBody}>
                    {coffees.map((coffee) => (

                        
                      	<div className={styles.productsCard}>
                          <div className={styles.cardBody}>
                              <h3 className={styles.coffeeTitle}>{coffee.name}</h3>
                              <span className={styles.coffeePrize}> ₦{coffee.prize}</span>
                              <span className={styles.coffeeDiscription}>{coffee.discription}....</span>
                          </div>
                          <Link className={styles.link}  to={`/coffee/details/${coffee.id}`}>
                              More Details...
                          </Link>
                      </div>
                      
                    ))}
                </div>) : (<div>hello</div>)
            }
        </>
    )
}