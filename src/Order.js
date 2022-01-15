import React from 'react'
import './Orders.css';
import moment from 'moment';
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    const history = useHistory();
   const showProduct = () => {
        history.push({
            pathname: '/orderDetail',
            search: "?"+order.id,
            state: order
        })
    }
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            <div style={{cursor: 'pointer'}} onClick={showProduct}>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
                ))}
                </div>

            <CurrencyFormat
                renderText={(value) => (
                    <React.Fragment>
                        <h3 className='order__total'>
                            Order Total: <strong> {value}</strong>
                        </h3>
                        
                    </React.Fragment>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order
