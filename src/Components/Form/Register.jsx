import React from "react";

function Register(){
    return(
        
 <div className="register">
    <div className="left_Register">
        <img className="formiIcon" src="image\darm-icon.png" alt=""/>

    </div>
    <div className="right_Register">
        <span className="register_head">
            <h3 className="registerH1">
                Register
            </h3>
            <h5 className="registerH5">
                let get some of your information to start seting up your
                finaces easily.
            </h5>

        </span>
        <form className="register-input">
            <h4 className="formh4Head">
                Username*
            </h4>
            <input className="registerFormInput" type="text" name="register_text" id="register-1"/>


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

           <h4 className="formh4Head">
                Confirm Password*
            </h4>
           <div>
             <input className="registerFormInput" type="password" name="signin_passwd" id="sign-1pd"/>
             <img src="" alt=""/>
             <img src="" alt=""/>
           </div>


           <div>
            <span className="formCheckregister">
                <input type="checkbox" name="" id=""/>
                <h5 className="h5Check">By creating an account you agree to the
                     <a href=""> terms of use</a> and our <a href="">privacy policy</a>  </h5>
            </span>
        </div>
        <div className="registerCheck">
            <button className="register_Btn">Register</button>
        </div>
        </form>
        <div className="regConfirm">
            <span className="regConfimation">
                <h3>Already a member?</h3>
                <span>
                    <a href="/">Login</a>
                </span>
            </span>
        </div>
        
</div>
</div>
    )

}

export default Register;