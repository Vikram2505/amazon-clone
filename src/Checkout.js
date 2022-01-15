import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';
// import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <div >
                    <h5>Hello, {user?.email}</h5>
                    <h2 className='checkout__title'>Shopping Cart</h2>
                    
                       { basket.map(item => (
                           // <FlipMove enterAnimation='fade' leaveAnimation='fade'>
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            //  </FlipMove>
                        )) }
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
