import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import Order from './Order';
import OrderDetail from './OrderDetail';
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const [{ user }] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            // .orderBy('orders','desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }else{
            setOrders([])
        }
    }, [user])

    return (
        <div className='orders'>
            <h2>Order History</h2>
            {orders?.map(order => (
                <>
                    <Order order={order} /> 
                </>
            ))}
        </div>
    )
}

export default Orders
