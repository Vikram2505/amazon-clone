import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket, user }] = useStateValue();

    const checkItems = () => {
        if(basket.length === 0){
            alert("Shopping cart is empty! Add some products");
        }else if(!user){
            history.push('/login')
        }else{
            history.push('/payment')
        }
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <React.Fragment>
                        <p>
                            Subtotal ({basket.length} items) : <strong> {` ${value} `}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />This order contains a gift
                        </small>
                    </React.Fragment>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}

            />
            <button onClick={checkItems }>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal
