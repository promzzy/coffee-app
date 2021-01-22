import React, { useEffect, useState} from 'react'
import styles from './styles/CreateOrderForm.module.css'
import {coffee} from '../../../data/coffees'
import { useParams, useHistory } from 'react-router-dom'



export default function CreateOrderForm(){


const [coffees, setCoffees] = useState([])
const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    type: "",
    quantity: "",
    address: "",
},)
const { id } = useParams();

const history = useHistory();

function handleGoBack(){
    history.goBack()
}

const handleFilter = coffees && coffees.filter(coffee => coffee.id === id)
const priceInButton = coffees && coffees.filter(coffee => coffee.name === inputs.type)

console.log(priceInButton)

console.log(handleFilter)

  
  useEffect(() => {
      setCoffees(coffee)
  },
  [])

   function handleChange(e){
    const {name, value} = e.target
    setInputs({...inputs, [name]: value})

}
    return(
        <>

        <div className={styles.orderbg}>
            
            <div className={styles.formContent}>
                <div>
            <button onClick={handleGoBack}>Go Back</button>
            </div>
                <h1 className={styles.orderHeader}>Place Your oder</h1>
                <form>
                    <div className={styles.formInputs}>
                        <div>
                            <input className={styles.input} onChange={handleChange} name="name" value={inputs.name} placeholder="Full Name" type="text" />
                        </div>
                        <div>
                            <input type="email" onChange={handleChange} placeholder="Email Address" name="email" value={inputs.email} className={styles.input} />
                        </div>
                        <div>
                            <input type="phone" onChange={handleChange} placeholder="Phone Number" name="mobile" value={inputs.mobile} className={styles.input} />
                        </div>
                        <div>
                            <select className={styles.input} onChange={handleChange} name="type" value={inputs.type}>
                           
                                
                    {
                       handleFilter && handleFilter.length > 0 ? (handleFilter.map(coffee =>  (
                           
                            <option>{coffee.name}</option>
                            
                        ) ) ) : (
                            
                            coffees && coffees.map(coffee => (
                                <>
                                <option> Choose your Coffee Type</option>
                                <option className={styles.selectOption }>{coffee.name}</option>
                                </>
                            ))
                             )
                    }
                            </select>
                        </div>
                <div className={styles.prize}>
                            {
                                coffees && coffees.filter(coffee => coffee.name === inputs.type).map(coffee =>(
                                    <div className={styles.selectedPrize}>{`the prize for 1 cup of ${inputs.type} is ₦${coffee.prize}`}</div>
                                )) 
                            }
                </div>
                    
                        <div>
                            <input type="number" onChange={handleChange} name="quantity" value={inputs.quantity} placeholder="How many Cup of coffee do you need" className={styles.input}/>
                        </div>
                        <div>
                            <textarea type="text" onChange={handleChange} placeholder="Derivery Address" name="address" value={inputs.address} className={styles.input} />
                        </div>
                    </div>
                    <button className={styles.orderButton}>
                        {
                           priceInButton && priceInButton.length > 0 && inputs.quantity? (priceInButton && priceInButton.map(coffee =>(
                        <span>{`₦${coffee.prize * inputs.quantity}`} </span>
                            )) 
    ) : (<span>Enter Order</span>)
                        }
                        </button>
                </form>
            </div>
            

            </div>
    </>
    )
}