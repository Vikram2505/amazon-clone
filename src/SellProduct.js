import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { db } from './firebase';
import './SellProduct.css';

function SellProduct() {

    const [productName, setProductName] = useState('');
    const [storeName, setStoreName] = useState('');
    const [mrp, setMrp] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [aboutProduct, setAboutProduct] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState();

    const base64Img = (image) => {
        var reader = new FileReader();
        var fileImage = image.files[0];
        reader.addEventListener("load", () => {
            setImage(reader.result)
        });
        if (fileImage) {
            reader.readAsDataURL(fileImage);
        }else{
        }
    }

    const submitForm = (event) => {
        event.preventDefault();
        
        db
            .collection('list_of_product')
            .add({
                productName: productName,
                storeName: storeName,
                mrp: mrp,
                price: price,
                address: address,
                aboutProduct: aboutProduct,
                rating: rating,
                image: image
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id)
            })
            .catch((error) => {
                console.error("Error in adding data: ", error)
            })
    }

    return (
        <div className='sellProduct'>
            <div className="container">
                <h2 className='my-3'>Sell Product</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <div class="fileUploadform" style={{position: 'relative'}}>
                                <div style={{ position: 'relative' }}>
                                    <label class="file uploadFile" id="singleUploadFile">
                                        <img class="img-fluid " src="https://img.icons8.com/officel/80/000000/upload-2.png" />
                                        <input class="fileInputClass" onChange={(e) => base64Img(e.target)} type="file" />
                                        <span className='upload__text'>Upload Image</span>Drop a file or click to select one
                                    </label>                                         
                                    {image? 
                                        <div class="uploadedImage">
                                            <img id='previewImage' class="img-fluid" src={image} />
                                            <button className='removeImage' onClick={() => setImage('')}>Remove Image</button>
                                        </div>                                            
                                    : '' }                                        
                                </div>                                    
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 card border-0 p-3">
                       
                        <div className='mb-2'>
                            <label htmlFor="name">Product name</label>
                            <input type="text" onChange={(e) => setProductName(e.target.value)} className='form-control' placeholder='Enter product name' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="name">Seller Store Name</label>
                            <input type="text" onChange={(e) => setStoreName(e.target.value)} className='form-control' placeholder='Enter Seller Store Name' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="name">M.R.P</label>
                            <input type="number" onChange={(e) => setMrp(e.target.value)} className='form-control' placeholder='Enter M.R.P' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="name">Price</label>
                            <input type="text" onChange={(e) => setPrice(e.target.value)} className='form-control' placeholder='Enter Price' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="name">Dealer address</label>
                            <input type="text" onChange={(e) => setAddress(e.target.value)} className='form-control' placeholder='Enter Dealer address' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="name">About Product</label>
                            <input type="text" onChange={(e) => setAboutProduct(e.target.value)} className='form-control' placeholder='Enter about product' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="name">Rating</label>
                            <input type="number" onChange={(e) => setRating(e.target.value)} className='form-control' placeholder='Rate your product' />
                        </div>

                        <div className='mt-3 text-center'>
                            <button type='submit' className='commonButton' onClick={submitForm}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SellProduct
