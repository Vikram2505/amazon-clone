import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import React, { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';
import Footer from './Footer';
import SellProduct from './SellProduct';
import Register from './Register';
import OrderDetail from './OrderDetail';
import ScrollToTop from './ScrollToTop';
import AllProducts from './AllProducts';

const promise = loadStripe("pk_test_51K07gjSCVMtWr89YnlNQi3qP0Y3cSBPXK0AJUiA5X0HSnqAKBEJHB7zCA0zSFCr8CpCdzOolkHjRfZttR5EbCPaE00mQJYsb8M")

function App() {
	const [{ }, dispatch] = useStateValue();
	const [header, setHeader] = useState();

	//will only run once when the app component loads...
	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser
				})
			} else {
				dispatch({
					typeof: 'SET_USER',
					user: null
				})
			}
		})
	}, [])

	return (
		<Router>

			<div className="App">
				<ScrollToTop />
				{/* { window.location.pathname !== '/login'?( <Header />) : null} */}
				<Switch>
					<Route path='/sell-on-amazon' exact>
						<Header />
						<SellProduct />
						<Footer />
					</Route>
					<Route path='/orders' exact>
						<Header />
						<Orders />
						<Footer />
					</Route>
					<Route path='/all-products' exact>
						<Header />
						<AllProducts />
						<Footer />
					</Route>
					<Route path='/login' exact>
						<Login />
					</Route>
					<Route path="/orderDetail" exact>
						<Header />
						<OrderDetail />
					</Route>
					<Route path="/register" exact>
						<Register />
					</Route>

					<Route path="/checkout" exact>
						<Header />
						<Checkout />
						<Footer />
					</Route>

					<Route path='/payment' >
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
						<Footer />
					</Route>

					<Route path='/' >
						<Header />
						<Home />
						<Footer />
					</Route>

				</Switch>

			</div>
		</Router>
	);
}

export default App;
