import React from 'react';
import { NavLink } from 'react-router-dom';
import FinishReg from './FinishReg';

export default function Register() {
    return (
        <>
    <div>
    {/*<section id = "login">*/}
        <header>
            <h2 className="logo"><img src="backgrouds/group-2-logo.png" /></h2>
        </header>

        <div className="wrapper-loginpage">
            <div className="box-loginpage register">
                <h2>Registration</h2>
                <form action="#">
                    <div className="login-input-box">
                        <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input type="text" placeholder=" " required />
                        <label className="email">Username</label>
                    </div>
                    <div className="login-input-box">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="password-action">
                        <label><input type="checkbox" />agree to the term & conditions</label>
                    </div>
                    {/*<button type="submit" className="btnSubmitRegister">Register</button>*/}
                    
                    <div className="buttons d-flex justify-content-center">
                        <NavLink to="/finish-reg" className="btn btn-outline-light rounded-pill px-5 py-2" >Register</NavLink>
                    </div>
                    <div className="register">
                        <p>Already have an account?<a href="#" className="login-link">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
        {/*</section>*/}
            
   </div>
   
</>
    
    )
    }