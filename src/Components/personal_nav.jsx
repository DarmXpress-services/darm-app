import React from "react";

function PersonalMenu(){
    return(
      <>
        <div className="persMenu">
          <div className="nav-menu">
          <div className="menu_icon">
            <img className="icon" src="image\darm-icon.png" alt="darm"/>
 
          </div>
       <div className="navBar_menu">
        <ul className="menuList">
            <li className="lists">
                Home
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
    <div>
        <span className="auth_Menu">
          <span className="authsLog">
            <img className="logAuth" src="image/log-out.png" alt="" />
            <img src="image/bellnotification-icon.png" alt="" />
          </span>
          <span className="authsLog">
            Hi,  Benedict
          </span>
          <span className="auth_circle">
            B
          </span>
          <span className="authsLog">
            <img src="image/Vectorsearch-icon.png" alt="" />
          </span>
        </span>

        
    </div>

 </div>
 <div class="breakLine"></div>

        </div>
      </>
    )
}


export default PersonalMenu;