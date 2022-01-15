import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { auth, db } from './firebase';

import './Login.css'

function Register() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)

    const createAccount = (e) => {
        e.preventDefault();
        
        if(password.length >=6){
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    console.log('Register successfully!!!')
                    history.push("/login");
                }
                })
                .catch((error) => alert(error.message));
            db
                .collection('register')                
                .add({
                    name:name,
                    email:email, 
                    password:password,
                    confirmPass:confirmPass
                })
            }else{
                alert('Password is must be greater than 6 letter')
            }
    }

    return (
        <div className='register'>
            <div className="login">
                <Link to="/">
                    <div className="login__LogoLink">
                        <span className="login__Logo" alt="Amazon" />
                        <span className="login__LogoDomain" alt="Amazon" />
                    </div>
                </Link>
                <div className="login__container">
                    <h1>Create account</h1>
                    <form>
                        <h5>Your name</h5>
                        <input
                            type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required
                        />
                        <h5>Mobile number or email</h5>
                        <input
                            type="text" name='mobile' value={email} onChange={(e) => setEmail(e.target.value)} required
                        />
                        <h5>Password</h5>
                        <div style={{ position: 'relative', marginBottom: '10px' }}>
                            <input style={{ width: '98%' }}
                                type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)} required
                            />
                            <div className='register__eyePassword'>
                                <img alt='password' onClick={() => setShowPassword(prevState => !prevState)}
                                    src={showPassword ? "https://img.icons8.com/material-outlined/18/000000/hide.png" :
                                    "https://img.icons8.com/material-outlined/18/000000/visible--v1.png"} />
                            </div>
                        </div>
                        <h5>Password again</h5>
                        <div style={{ position: 'relative' }}>
                            <input style={{ width: '98%' }}
                                type={showConfirmPass ? 'text' : "password"}  name='confirmPassword' onClick={(e) => setConfirmPass(e.target.value)} required
                            />
                            <div className='register__eyePassword'>
                                <img alt='confirm_Pass' onClick={() => setShowConfirmPass(prevState => !prevState)}
                                    src={showConfirmPass ? "https://img.icons8.com/material-outlined/18/000000/hide.png" :
                                        "https://img.icons8.com/material-outlined/18/000000/visible--v1.png"} />
                            </div>
                        </div>
                        <button className="login__signInButton" onClick={createAccount}>
                            Continue
                        </button>
                    </form>
                    <p>
                        By creating an account or logging in, you agree to Amazon’s FAKE CLONE Conditions of Use and Privacy Policy.
                    </p>
                    <div className="a_divider_inner"></div>
                    <div className='register__alreadyText'>
                        <p>Already have an account? <Link to='/login'> Sign in </Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
