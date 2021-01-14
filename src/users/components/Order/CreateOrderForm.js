import React, { useState} from 'react'
import styles from './styles/CreateOrderForm.module.css'
import {
    Form,
    Input,
    Button,
    Select,
    InputNumber,
  } from 'antd';

export default function CreateOrderForm(){




  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
    return(
        <>

        <div className={styles.OrderForm}>
             <form
             
            >
                <Form.Item
                    label="Full name"
                    name="name"
                >
                    <Input  size="large" name="name" />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                >
                    <Input type="phone" size="large"  name="phone" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input type="email" size="large"  name="email" />
                </Form.Item>

                <Form.Item
                    label="Delivery Address"
                    name="text"
                >
                    <Input type="email" size="large"  name="text" />
                </Form.Item>

                <Form.Item
                    label="Quantity"
                    name="quantity"
                >
                    <Input type="text"  size="large" name="quantity" />
                </Form.Item>
              
                <Form.Item
                    label="Coffee Type"
                    name="type"
                >
                    <select name="type" className="ant-input ant-input-lg" size="large">
                        <option value="">Select Coffee Type</option>
                        {/* {
                            departments && departments.map(department => (
                                <option key={department.id} value={department.id}>{department.name}</option>
                            ))
                        } */}
                    </select>
                </Form.Item>
                <Button type="primary" size="large" htmlType="submit">Order</Button>
            </form>

            </div>
    </>
    )
}