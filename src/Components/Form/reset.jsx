import React from "react";

function ResetPswd(){
    return(
        <>
        <div class="reset_pswd" >
    <div className="left_Register">
        <img className="formiIcon" src="image\darm-icon.png" alt=""/>

        </div>
    <div class="right_Reset">
        <span class="reset_head">
            <h3 className="registerH1 ">
                Reset Password 
            </h3>
            <h5 className="registerH5">
                Enter your new password here
            </h5>

        </span>
        <form class="reset-input">
            <h4 className="formh4Head">
                New password*
            </h4>
            <div>
             <input className="registerFormInput" type="password" name="reset_passwd" id="reset-1pd"/>
             <img src="" alt=""/>
           </div>
            <h4 className="formh4Head">
                Confirm password*
            </h4>
           <div>
             <input className="registerFormInput" type="password" name="reset_passwd" id="reset-1pd"/>
             <img src="" alt=""/>
    
           </div>
        <div className="registerCheck">
            <button class="reset_Btn">Sign in</button>
        </div>
        </form>
        <div className="reset_return">
            
          <span>
            <a href="/">
              <img src="" alt=""/>
               Go back to login page
            </a>
          </span>
            
        </div> 
        

    </div>

        </div>
        </>
    )
}

export default ResetPswd;