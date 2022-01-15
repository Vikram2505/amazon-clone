import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LocationIcon from '@material-ui/icons/PinDropOutlined'
import { Link, useHistory } from "react-router-dom"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'


function Header() {
    const [{ basket, user }] = useStateValue();
    const history= useHistory();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
            history.push('/login')
            window.location.reload();
                    
            console.log("Header section Click >>>", user.email)
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <div className='header__LogoLink'>
                    <span className="header__Logo" alt="Amazon" />
                </div>
            </Link>
            <div className="header__locationShow">
                <LocationIcon className='header__locationIcon' />
                <div className="header__option">
                    <span className='header__optionLineOne'>Deliver to</span>
                    <span className='header__optionLineTwo'>Nagpur 440025</span>
                </div>
            </div>
            <div className="header__Search">
                <input type="text" className='header__SearchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className='header__optionLineOne' >{user ? ` Welcome ${user?.email}` : 'Hello Guest'} </span>
                        <span className='header__optionLineTwo' >{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to={!user && '/login' || '/orders'}>
                    <div className="header__option" >
                        <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </div>
            <Link to='checkout'>
                <div className="header__optionBasket">
                    <div className='header__basketDiv' style={{ display: 'flex' }}>
                        <span className='header__optionBasketTotalNo header__optionLineTwo'>
                            {basket?.length}
                        </span>
                        <span className="header__optionBasketLogo" alt="Amazon" />
                    </div>
                    <span className='header__optionLineTwo header__optionCartText'>Cart</span>
                </div>
            </Link>

        </div>
    )
}

export default Header;
