import React from 'react';

export default function Login() {
    return (
    <div>
        <section id="login">
        <header>
            <h2 className="logo"><img src="backgrouds/group-2-logo.png" /></h2>
        </header>

        <div className="wrapper-loginpage">
            
            <div className="box-loginpage login">
                <h2>Login</h2>
                <form action="#">
                    <div className="login-input-box">
                        <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input type="text" id="emaillogin" placeholder=" " minlength="2" required />
                        <label className="email">Username</label>
                    </div>

                    <div className="login-input-box">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input type="password" id="passwordlogin" required />
                        <label>Password</label>
                    </div>

                    <div className="password-action">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btnSubmitLogin">Login</button>
                    <div className="register">
                        <p>Don't have an account?<a href="#" className="register-link">Register</a></p>
                    </div>
                </form>
                
            </div>
        </div>
        </section>
   </div>


    
    )
    }