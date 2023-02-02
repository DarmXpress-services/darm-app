import React from "react";

function ForgotPswd(){
    return(

        <>
        <div class="forgot_password">
      <div className="left_Register">
        <img className="formiIcon" src="image\darm-icon.png" alt=""/>

        </div>
    <div class="right_forgot">
        <span class="forgot_head">
            <h3 className="registerH1 ">
                Forget Password
            </h3>
            <h5 className="registerH5">
                Enter your email here for password reset instruction
            </h5>

        </span>
        <form class="forgot-input">
            <h4 className="formh4Head">
                Email Address*
            </h4>
            <input className="registerFormInput "type="email" name="forgot_email" id="forgot-1"/>

            <div className="registerCheck">
            <button class="reset_Btn">Send</button>
            </div>
           
        </form>
        
    
        <div className="reset_return">
            <span>

                    <a href="/">
                        <img src="" alt=""/>
                        <h4>Go back to the login page</h4>
                    </a>
                
            </span>
        </div>
        

    </div>

        </div>
        
        </>
    )
}

export default ForgotPswd;