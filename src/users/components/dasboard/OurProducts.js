import React from 'react'
import styles from './styles/OurProducts.module.css'
import CoffeeNames from '../coffee/CoffeeNames'
export default function Products(){
    return(
        <div className={styles.ProductsBg}>
            {/* <div className={styles.ProductsHead}>Our Coffee Products</div> */}
            <CoffeeNames />
        </div>
    )
}