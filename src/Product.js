import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, key, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log('this is the basket >>>', basket)
    const addToBasket = () => {

        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    }
    return (
        <div className='product'>
            <div className="product__info">
                <p className='product__name mb-0'>{title} </p>
                <p className="product__price">
                    <small className='font-weight-bold'>$</small>
                    <strong>{price} </strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
