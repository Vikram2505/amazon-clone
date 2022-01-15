import  Carousel  from 'react-bootstrap/Carousel'
import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {

    return (
        <div className='home'>
            <div className="home__container">
                <div className='home__bannerImageDiv'>

                    {/* <img className='home__bannerImage' src="https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg" alt="Banner" /> */}
                    {/* <img className='home__bannerImage' src="images/51n76gAKKZL._SX3000_.jpg" alt="Banner" /> */}
                    <Carousel className='home__bannerImage' fade interval={4000} controls={false} indicators={false}>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="images/51xaWs9tpUL._SX3000_.jpg"
                                alt="First slide"
                            />                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/51n76gAKKZL._SX3000_.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/61A9JzA1lwL._SX3000_.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/redmibud.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>


                <div className="home__row">
                    <Product key={Math.random()} id={Math.random()} rating={3} title='Fujin Dash Smart Watch' price={20} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg' />
                    <Product id={Math.random()} key={Math.random()} rating={2} title='ASUS ROG Swift 360Hz PG259QNR Esports NVIDIA® G-SYNC® Gaming Monitor – 24.5 inch FHD (1920 x 1080), NVIDIA Reflex Latency Analyzer, 360 Hz, Fast IPS, 1 ms (GTG), ROG Desk Mount Kit' price={29} image='https://m.media-amazon.com/images/I/81VsbsTYIzL._AC_UL480_FMwebp_QL65_.jpg' />
                    <Product id={Math.random()} key={Math.random()} rating={2} title='boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio, Up to 30H Total Playback, IPX7 Water Resistance, Super Touch Controls, Secure Sports Fit & Type-C Port(Raging Red)' price={29} image='https://m.media-amazon.com/images/I/51lEIy51L6L._AC_UL480_FMwebp_QL65_.jpg' />
                    <Product id={Math.random()} key={Math.random()} rating={2} title='Razer Kraken X USB Ultralight Gaming Headset' price={29} image='/images/61A9JzA1lwL._SX3000_.jpg' />
                </div>

                <div className="home__row">
                    <Product id={Math.random()} key={Math.random()} rating={5} title='AutoFull Gaming Chair Office Chair Desk Chair with Ergonomic Lumber Support' price={329.99} image='https://m.media-amazon.com/images/I/61SpQZ0WdrL._AC_UL480_FMwebp_QL65_.jpg' />
                    <Product id={Math.random()} key={Math.random()} rating={2} title='GTRACING Gaming Chair Racing Office Computer' image='https://m.media-amazon.com/images/I/619sWFsXJ+L._AC_UL480_FMwebp_QL65_.jpg' price={162} />
                    <Product id={Math.random()} key={Math.random()} rating={1} title='YSSOA Gaming Office High Back Computer Leather Desk' image='https://m.media-amazon.com/images/I/61O4ilN5v1S._AC_UL480_FMwebp_QL65_.jpg' price={99} />
                    <Product id={Math.random()} key={Math.random()} rating={5} title='AutoFull Gaming Chair Office Chair Desk Chair with Ergonomic Lumber Support' price={329.99} image='https://m.media-amazon.com/images/I/61SpQZ0WdrL._AC_UL480_FMwebp_QL65_.jpg' />
                </div>

                <div className="home__row">
                    <Product id={Math.random()} key={Math.random()} title='Toys and Game Section' price={239} image='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' />
                </div>

            </div>
        </div>
    )
}

export default Home
