import React from 'react';

export default function FinishReg() {
    return (
    <div>

        <header>
            <h2 className="logo"><img src="backgrouds/group-2-logo.png" /></h2>
        </header>

        <div className="wrapper-loginpage">
            <div className="box-loginpage finish-register">
                <h2>Complete Registration</h2>
                <form action="#">
                    <div className="login-input-box">
                        <input type="text" placeholder=" " maxlength="50" required />
                        <label className="email">Full Name</label>
                    </div>
                    <div className="login-input-box">
                        <input type="text" placeholder=" " maxlength="100" required />
                        <label className="email">address 1</label>
                    </div>
                    <div className="login-input-box">
                        <input type="text" placeholder=" " maxlength="100" required />
                        <label className="email">address 2</label>
                    </div>
                    <div className="login-input-box">
                        <input type="text" placeholder=" " maxlength="100" required />
                        <label className="email">city</label>
                    </div>
                    <div>
                        <form action="/state-selection">
                            <label for="state">State:</label>
                            <select id="cars" name="cars">
                            <option value="Texas">TX</option>
                            <option value="California">CA</option>
                            <option value="Florida">FL</option>
                            <option value="Alaska">AL</option>
                            </select>
                        </form>
                        
                        <label className="zipcode">Zip code:</label>
                        <input className="zipcode-input" type="text" maxlength="9" minlength="5" />
                    </div>

                    <button type="submit" className="btnFinalRegister">Finish</button>
                </form>
                
            </div>
        </div>
   </div>


    
    )
    }