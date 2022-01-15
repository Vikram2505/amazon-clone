import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from './axios';
import { db } from './firebase';
// import Orders from './Orders';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [Succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })

        if (!error) {
            //   console.log("Stripe 23 | token generated!", paymentMethod, paymentMethod.id);
            console.log("Stripe 23 | token generated!", paymentMethod);

            try {
                const { id, created } = paymentMethod;
                const response = await axios.post(
                    //stripe expects the total in a currencies subunits
                    `/payments/create?total=${getBasketTotal(basket) * 100}`,
                    {
                        amount: `${getBasketTotal(basket) * 100}`,
                        id: id,
                        description: 'custom description here'
                    });
                    setClientSecret(response.data.clientSecret)
                
                    setSucceeded(true);
                    setError(null);
                    setProcessing(false);

                    dispatch({
                        type: 'EMPTY_BASKET'
                    })
                    history.replace('/orders')

                console.log("Stripe 35 | data", response);
                if (response.data.success === true) {
                    db
                    .collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentMethod.id)
                    .set({
                        basket: basket,
                        amount: getBasketTotal(basket),
                        created: created
                    })
                    console.log("CheckoutForm.js 25 | payment successful!");
                    alert('payment done successfully!!!!!!!')
                }else{
                    alert('payment failed')
                }
                

            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
                alert(error)
            }
        } else {
            console.log(error.message);
        }
    };

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>Checkout {<Link to='/checkout'>({basket?.length} </Link>}items)</h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <h5>Card Details</h5>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <React.Fragment>
                                            <p>
                                                Order Total: <strong> {value}</strong>
                                            </p>
                                            <small className='subtotal__gift'>
                                            </small>
                                        </React.Fragment>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || Succeeded}>
                                    <span>{processing ? <span>Processing...</span> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>error</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
