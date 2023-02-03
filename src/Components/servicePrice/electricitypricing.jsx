import React from "react";
import PersonalMenu from "../personal_nav";

function Electricitypricing(){
    return(
        <>
        <PersonalMenu/>
        <div className="pricing_form">

    <h4 className="priceWord1">
        Electricity repair form
    </h4>
    <h6 className="priceWord2">
       When applying for Electricity repair form, please input the right information    </h6>
    <div className="priceSection1">
        <div className="priceSection2">
            <h4 className="priceWord3">
                Services
            </h4>
            <h4 className="priceWord4">
                Prices#
            </h4>
            <h4 className="priceWord3">
                Apply
            </h4>
            
        </div>
        <div className="breakLine"></div>
        <div className="servPrice">
            <h4 className="priceName">
              1 room socket fault and replacement            </h4>
            <h4 className="priceTag">
                3000
            </h4>
            <span className="pricingbutton">
                <button className="pricingBtn">
                    Apply Here
                </button>
            </span>
            
            
        </div>
        <div className="breakLine"></div>

        <div className="servPrice">
            <h4 className="priceName">
              1 room lampholder fault and repair            </h4>
            <h4 className="priceTag">
                3000
            </h4>
            <span className="pricingbutton">
                <button className="pricingBtn">
                    Apply Here
                </button>
            </span>
            
            
        </div>
       <div className="breakLine"></div>

        <div className="servPrice">
            <h4 className="priceName">
              Room wiring            </h4>
            <h4 className="priceTag">
                3000
            </h4>
            <span className="pricingbutton">
                <button className="pricingBtn">
                    Apply Here
                </button>
            </span>
          
            
        </div>
        <div className="breakLine"></div>

        <div className="servPrice">
            <h4 className="priceName">
              Extention box repair            </h4>
            <h4 className="priceTag">
                3000
            </h4>
            <span className="pricingbutton">
                <button className="pricingBtn">
                    Apply Here
                </button>
            </span>
           
            
        </div>
        <div className="breakLine"></div>

        <div className="servPrice">
            <h4 className="priceName">
                Cealing fan and standing fan repair 
            </h4>
            <h4 className="priceTag">
                3000
            </h4>
            <span className="pricingbutton">
                <button className="pricingBtn">
                    Apply Here
                </button>
            </span>
           
            
        </div>
        <div className="breakLine"></div>

        <div className="servPrice">
            <h4 className="priceName">
                Full house wiring
            </h4>
            <h4 className="priceTag">
                3000
            </h4>
            <span className="pricingbutton">
                <button className="pricingBtn">
                    Apply Here
                </button>
            </span>
          
            
        </div>
        <div className="breakLine"></div>
        <div className="servPrice">
            <h4 className="priceName">
                A room wiring
            </h4>
            <h4 className="priceTag">
                3000
            </h4>
            <span className="pricingbutton">
                <button className="pricingBtn">
                    Apply Here
                </button>
            </span>
          
            
        </div>
        <div className="breakLine"></div>
        <div className="servPrice">
            <h4 className="priceName">
                self contain wiring
            </h4>
            <h4 className="priceTag">
                3000
            </h4>
            <span className="pricingbutton">
                <button className="pricingBtn">
                    Apply Here
                </button>
            </span>
          
            
        </div>
        <div className="breakLine"></div>

    </div>

    <div className="complaint">
        <span className="complainWord">
            <h4 className="priceComplain1">Complaint not listed?</h4>
            <h6 className="priceComplain2">
                If your complaints are not listed above, kindly
             type it below
            </h6>
        </span>
        <div className="complainInfo">
            <h4 className="priceComplain3">Type your<br/> complaints here:</h4>
            <span>
                <input className="complainInput" type="text"/>
            </span>
        </div>

    </div>

    <div className="complain_sub">
    
            <button className="data_cancel">
                Cancel
            </button>
            <button className="data_sub">
                Submit 
            </button>

    </div>




</div>
        </>
    )
}
export default Electricitypricing;