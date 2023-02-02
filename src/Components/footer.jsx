import React from "react";

function Footer(){
    return(
        <footer>
    <div className="footer">
        <span>
            <h4 className="footer_head">
            Quick Links
        </h4>
        <span>
            <li className="footer_list">
                Dashboard
            </li>
            <li className="footer_list">
                Rewards
            </li>
        </span>
        </span>
        <span>
            <h4 className="footer_head">
                Services
            </h4>
            <span>
                <li className="footer_list">
                    Plumbing Services
               </li>
                <li className="footer_list">
                    Electrical Repairs
                </li>
                <li className="footer_list">Cleaning services
                    
                </li>
            </span>
        </span>
       <span>
         <h4 className="footer_head">
            Social Media
        </h4>
        <span>
            <li className="footer_list">
                Facebook
            </li>
            <li className="footer_list">
                Instagram
            </li>
            <li className="footer_list">
                Twitter
            </li>
        </span>
       </span>
       <span>
         <h4 className="footer_head">
            About
        </h4>
        <span>
            <ul>
                <li className="footer_list">
                    Company
                </li>
                <li className="footer_list">
                    privacy Centre
                </li>
                <li className="footer_list">
                    legal
                </li>
                <li className="footer_list">
                    Help
                </li>
            </ul>
        
        </span>
       </span>
    </div>
        </footer>
    )
}
export default Footer;