import React from "react";

function Signin(){
    return(
        <>
        <div class="signIn">
        <div className="left_Register">
        <img className="formiIcon" src="image\darm-icon.png" alt=""/>

        </div>
    <div className="right_Signin">
        <span className="register_head">
            <h3 className="registerH1">
                Sign in
            </h3>
            <h5 className="registerH5">
                login with your data that you entered during registyration.
            </h5>

        </span>
        <form className="signin-input">
            <h4 className="formh4Head">
                Email Address*
            </h4>
            <input className="registerFormInput" type="email" name="register_email" id="register-1"/>
            <h4 className="formh4Head">
                Password*
            </h4>
           <div>
             <input className="registerFormInput" type="password" name="signin_passwd" id="sign-1pd"/>
             <img src="" alt=""/>
             <img src="" alt=""/>
           </div>
           <div className="form-check">
            <span className="formCheckregister">
                <input type="checkbox" name="" id=""/>
                <h5 className="h5Check">Remember me ?  </h5>
            </span>
            <span className="forgt-psswd">
                Forgot Password?
            </span>
        </div>
        <div className="registerCheck">
            <button className="register_Btn">Sign in</button>
        </div>
        </form>
        <div className="signinConfirm">
            <span className="regConfimation">
                <h3>Already a member?</h3>
                <span>
                    <a href="/">Register</a>
                </span>
            </span>
        </div>
        
</div>

        </div>
        
        </>
    )
}

export default Signin;