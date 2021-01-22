import React, { useEffect, useState } from 'react'
import styles from './styles/OrderStatistic.module.css'
import {order} from '../../../data/order'

export default function Orderstatistic(){
    const [orders, setOrders] = useState([])
    const [pendingOrders, setPendingOrders] = useState([])
    const [deriveredOrder, setDeriveredOrders] = useState([])


    useEffect(() => {
setOrders(order);
    },
    [])

    
        const derivered = orders && orders.filter( pendings => pendings.orderStatus === "derivered" )
        setDeriveredOrders(derivered);
        
        const pending = orders && orders.filter( pendings => pendings.orderStatus !== "derivered" )
        setPendingOrders(pending)
    


    return(
        <>
    <div className={styles.dashboard}>
        <div className={styles.gridBox}>
        <div className={styles.pendingOrderCard}>
            <span className={styles.cardHeader}>Pending Order</span>
            
            {pendingOrders && pendingOrders.length > 0 ? (
                <>
                <span className={styles.count}>{pendingOrders.length}</span>
                <p className={styles.cardText}>You have some pending orders</p>
                </>
            ) : (
                <p className={styles.cardText}> No pending order </p>
            )}
            
        </div>
        <div className={styles.deriverdOrderCard}>
           <span className={styles.cardHeader}> derivered orders </span>

           {pendingOrders && pendingOrders.length > 0 ? (
                <>
                <span className={styles.count}>{deriveredOrder.length}</span>
                <p className={styles.cardText}>You have successfully derivered {deriveredOrder.length}</p>
                </>
            ) : (
                <p className={styles.cardText}>---</p>
            )}
            
            </div>
        <div className={styles.totalOrderCard}>
           <span className={styles.cardHeader}> Total order </span>
           {pendingOrders && pendingOrders.length > 0 ? (
                <>
                <span className={styles.count}>{orders.length}</span>
                <p className={styles.cardText}>Total order Received</p>
                </>
            ) : (
                <p className={styles.cardText}> ---</p>
            )}
            
            </div>
        </div>
    </div>
    </>
    )
}