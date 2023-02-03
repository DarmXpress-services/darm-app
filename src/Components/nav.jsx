import React from "react";
import { Link } from "react-router-dom";

function Menu(){
    return(

        <>
     <div className="nav-menu">
          <div className="menu_icon">
            <img className="icon" src="image\darm-icon.png" alt="darm"/>
 
          </div>
       <div className="navBar_menu">
        <ul className="menuList">
            <li className="lists">
                <Link to="/home">
                Home
                </Link>
            </li>
            <li className="lists">
                Services
            </li>
            <li className="lists">
                About Us
            </li>
            <li className="lists">
                Contact Us
            </li>
        </ul>


      </div>
    <div className="auth_Menu">
        <span>
            <button className="authBtn">
                <span className="signUp_auth">Sign Up</span>
                <span className="signin_auth">Sign In</span>
            </button>
        </span>
        
    </div>

 </div>
 <div class="breakLine"></div>
        
        </>
    )
}
export default Menu;