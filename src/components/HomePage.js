import React, { useState } from 'react'
import '../styles/HomePage.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { auth } from '../authentication/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInUser = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          localStorage.setItem("isAuth", true);
          navigate("/admin")
          
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert(errorMessage);
        });
      }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          localStorage.setItem("isAuth", true);
          navigate("/admin")
          
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert(errorMessage);
          // ..
        });
    }

    

  return (
    <div className='HomePage'>
        <header>
            <span className="logo">
                <ion-icon name="pulse"></ion-icon>
            </span>
            <nav className="navigation">
                <a href="# ">Home</a>
                <a href="# ">About</a>
                <a href="# ">Student</a>
                <a href="# ">Contact</a>
                <Popup contentStyle={{
                    width: "400px", 
                    height: "500px", 
                    background: "transperent", 
                    borderBlock: "10px",
                    borderRadius: "20px",
                    boxShadow: "0 0 30px rgba(0, 0, 0, .5)",
                    overflow: 'hidden',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backdropFilter: "blur(2rem)",
                    
                }} trigger=
                {<button className="btnLogin-popup">Login </button>} 
                modal nested>
                {
                    close => (
                        
                        <div className='model'>
                                <span className="icon-close">
                                    <ion-icon name="close-outline"></ion-icon>
                                </span>
                                <div className="form-box login">
                                    <h2>Login</h2>
                                </div>
                                
                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                                        <input type="email" id="email" required onChange={(event) => setEmail(event.target.value)} />
                                        <label>Email</label>
                                    </div>

                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="lock-closed"></ion-icon> </span>
                                        <input type="password" id="password" required onChange={(event) => setPassword(event.target.value)} />
                                        <label>Password</label>
                                    </div>

                                    <div className="remember-forget">
                                        <label><input type="checkbox" />Remember me</label>
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    
                                    <button onClick={signInUser}  className="btn">Login</button>

                                    <div className ="login-with" >
                                        <label>Continue with </label>
                                        <button className="provider-btn" id="signInwithGoogle"  ><i className="fa fa-google"></i></button>
                                        <button className="provider-btn" id="signinwithyahoo"><i class="fa fa-yahoo"></i></button>
                                    </div>

                                    <div className="login-register">
                                        <p>Don't have an account? 
                                        <Popup contentStyle={{
                                            width: "400px", 
                                            height: "500px", 
                                            background: "transperent", 
                                            borderBlock: "10px",
                                            borderRadius: "20px",
                                            boxShadow: "0 0 30px rgba(0, 0, 0, .5)",
                                            overflow: 'hidden',
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backdropFilter: "blur(2rem)",
                    
                                        }} trigger=
                {<a href="#" className="register-link"> Register </a>} 
                modal nested>
                {
                    close => (
                        
                        <div className='model'>
                            <div className="form-box register">
                                <h2>Registration</h2>
                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                                        <input type="email" id="r_email" required onChange={(event) => setEmail(event.target.value)} />
                                        <label>Email</label>
                                    </div>
                    
                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="lock-closed"></ion-icon> </span>
                                        <input type="password" id="r_password" required onChange={(event) => setPassword(event.target.value)} />
                                        <label>Password</label>
                                    </div>
                    
                                    <div className="remember-forget">
                                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                    
                                    </div>
                                    <button className="btn" onClick={createUser}>Register</button>
                                    
                               
                            </div>
                        </div>
                    )
                }
            </Popup>
                    
                                        </p>
                                    </div>
                                    
                                    
                                
                        </div>
                    )
                }
            </Popup>
                
            </nav>
        </header>
    </div>
  )
}

export default HomePage