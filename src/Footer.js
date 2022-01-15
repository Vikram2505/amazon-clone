import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

function Footer() {
  const backToTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <div className='footer'>
            <div className='footer__backToTop' onClick={backToTop}>Back to top</div>
            <div className="footer__content">
                <div className="footer__navLink1">
                    <div className="footer__navLink1Head">
                        Get to Know Us
                    </div>
                    <ul>
                        <li>
                           <Link to="/"> About Us </Link>
                        </li>
                        <li>
                           <Link to="/"> Careers </Link>
                        </li>
                        <li>
                           <Link to="/"> Press Releases </Link>
                        </li>
                        <li>
                           <Link to="/"> Azamon Cares </Link>
                        </li>
                        <li>
                           <Link to="/"> Gift a Smile </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__navLink1 footer__innerSpace">
                    <div className="footer__navLink1Head">
                        Make Money with Us
                    </div>
                    <ul>
                        <li>
                           <Link to="/sell-on-amazon"> Sell on Amazon </Link>
                        </li>
                        <li>
                           <Link to="/"> Sell under Amazon Accelerator </Link>
                        </li>
                        <li> 
                            <Link to="/">Amazon Global Selling </Link>
                        </li>
                        <li>
                           <Link to="/"> Become an Affiliate</Link>
                        </li>
                        <li>
                           <Link to="/"> Fulfilment by Amazon </Link>
                        </li>
                        <li>
                            <Link to="/"> Advertise Your Products </Link>
                        </li>
                        <li>
                           <Link to="/"> Amazon Pay on Merchants </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__navLink1">
                    <div className="footer__navLink1Head">
                        Connect with Us
                    </div>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>

                    </ul>
                </div>

                <div className="footer__navLink1 footer__innerSpace">
                    <div className="footer__navLink1Head">
                        Let Us Help You
                    </div>
                    <ul>
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Return Center</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>

            </div>
            <hr style={{border: '1px solid rgb(81 81 81 / 80%)', paddingBottom: '2rem'}}/>

        </div>
    )
}

export default Footer
