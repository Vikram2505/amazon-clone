import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { useStateValue } from './StateProvider';
import './OrderDetail.css'
import Email from '@material-ui/icons/EmailOutlined'
import { Twitter, Pinterest, Facebook } from '@material-ui/icons/';
import { FormControl, InputGroup } from 'react-bootstrap';



function OrderDetail({ order }) {
    const [{ user }] = useStateValue();
    const [allData, setAllData] = useState([]);
    const data = window.history.state.state.data.basket;
    data.map(item => console.log(item))
    // console.log(data);
    return (
        <div className='bg-white'>

            {/* {allData?.map(order => ( */}
            <React.Fragment>
                {data.map(item => ( 
                    <div className="container" style={{ maxWidth: 'calc(100% - 2%)' }}>
                        <div className="row m-0 orderDetails orderDetails__heading py-5">
                            <div className="col-lg-5">
                                <div className='sticky-top text-center ' style={{ zIndex: '0' }}>
                                    <img className='img-fluid' src={item.image} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <div className="orderDetails__heading">
                                        <h2>{item.title}</h2>
                                        <span> <a href=""> Visit the Dettol Store </a></span>
                                        <div className='d-flex'>
                                            <div className="orderDetails__rating">
                                            {Array(item.rating)
                                                .fill()
                                                .map((_, i) => (
                                                    <span>⭐</span>
                                                ))}
                                                
                                            </div>
                                            <div className='ml-2'>66,956 ratings | 209 answered questions</div>
                                        </div>
                                        <div style={{ display: 'inline-flex', margin: '5px 0 10px' }}>
                                            <span className='orderDetails__amazonChoice'>
                                                <span className='text-white primaryText'>Amazon's</span>
                                                <span className='secondText'>Choice</span>
                                            </span>
                                            <span className='floatTriangle'></span>
                                            <span>for <span>handwash refill</span> </span>
                                        </div>
                                        <hr className='my-2' />
                                        <div className='orderDetails__pricing ml-3' >
                                            <div className='text-muted'>M.R.P.:
                                                <span className='ml-1 text-decoration-through'>₹209.00</span>
                                            </div>
                                            <div>
                                                Price:
                                                <span className='ml-2' style={{ color: '#B12704', fontSize: '18px' }}>₹{item.price}.00</span>
                                            </div>
                                        </div>

                                        <div className='mb-2'>You Save: <span style={{ color: '#B12704' }}> ₹21.20(10%) </span>
                                            Inclusive of all taxes
                                        </div>

                                        <div className='orderDetails__Emi'>
                                            <div className='orderDetails__EmiHeading d-flex align-items-center'>
                                                <span className='offerBadge'> </span>
                                                <h5 className='mb-0 '>
                                                    <span style={{ color: '#B12704' }}> Save Extra </span> with 3 offers
                                                </h5>
                                            </div>
                                            <div className='orderDetails__offerRow' >
                                                <h5 className='text-truncate mb-0'><span style={{ color: '#B12704' }}>No Cost EMI</span> Avail No Cost EMI on select cards for orders above ₹3000</h5>
                                                <a href="">Details</a>
                                            </div>
                                            <div className='orderDetails__offerRow' >
                                                <h5 className='text-truncate mb-0'><span style={{ color: '#B12704' }}>Bank Offers (2)</span> Flat INR 150 Instant Discount on City Union Bank Debit Mastercard Transactions. Minimum purchase value INR 1500</h5>
                                                <a href="">Details</a>
                                            </div>
                                            <div className='orderDetails__offerRow' >
                                                <h5 className='text-truncate mb-0'><span style={{ color: '#B12704' }}>Partner Offers (2)</span> Get GST invoice and save upto 28% on business purchases.</h5>
                                                <a href="">Details</a>
                                            </div>
                                        </div>

                                        <div className="orderDetails__featureDiv d-flex justify-content-between text-center my-3">
                                            <div>
                                                <div className="image">
                                                    <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" className="a-image-wrapper a-manually-loaded icon-box" id="" alt="Pay on Delivery" />
                                                </div>
                                                <div className="orderDetails__featureDiv_Paylink">
                                                    <a href="">Pay on Delivery</a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="image">
                                                    <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns-struck._CB484058890_.png" className="a-image-wrapper a-manually-loaded icon-box" id="" alt="Pay on Delivery" />
                                                </div>
                                                <div className="orderDetails__featureDiv_Paylink">
                                                    <a href="">Not Returnable</a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="image">
                                                    <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" className="a-image-wrapper a-manually-loaded icon-box" id="" alt="Pay on Delivery" />
                                                </div>
                                                <div className="orderDetails__featureDiv_Paylink">
                                                    <a href="">Amazon Delivered</a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="image">
                                                    <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" className="a-image-wrapper a-manually-loaded icon-box" id="" alt="Pay on Delivery" />
                                                </div>
                                                <div className="orderDetails__featureDiv_Paylink">
                                                    <a href="">No-Contact Delivery</a>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className='my-2' />

                                        <div className='mt-3'>
                                            <h4>About this item</h4>
                                            <div>
                                                <ul>
                                                    <li>Natural cleansers: Contains more than 85% naturally derived ingredients and plant derived cleansers, Contains no TCC or Triclosan</li>
                                                    <li> Antibacterial formula provides 10x better germ protection for hygienically clean hands </li>
                                                    <li>Refill Pack: Value refill pack | For best results, refill in Dettol handwash pump</li>
                                                    <li>Germ Protection: Protects from 100 illness causing germs, Recommended by Indian Medical Association (IMA)</li>
                                                    <li>sun protection: No</li>
                                                    <li>target audience keywords: unisex adult</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div>
                                    <p className='text-center'><span className='mr-3'> <a href=""> Share</a></span>
                                        <Email></Email>
                                        <Facebook></Facebook>
                                        <Twitter></Twitter>
                                        <Pinterest></Pinterest>
                                    </p>
                                    <div className="card p-3">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="opt4" value="exact" name="searchType" className="custom-control-input " />
                                            <label htmlFor="opt4" className="custom-control-label"> 
                                                <span className='font-weight-bold'>One-time purchase</span> 
                                                <div>₹188.00</div>
                                            </label>
                                        </div>
                                        <p><a href="">FREE delivery:</a> <b> Thursday, Dec 16 </b> on orders over ₹499 shipped by Amazon Details
                                        <br />   Fastest delivery: <b> Today </b> <br /> Order within 11 hrs and 40 mins</p>
                                        <button className='commonButton border-0'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        </div>
    )
}

export default OrderDetail
