
import React from "react";
import PersonalMenu from "../personal_nav";

function Plumberingpricing(){
    return(
        <>
        <PersonalMenu/>
        <div className="pricing_form">

    <h4 className="priceWord1">
        Plumbering repair form.
    </h4>
    <h6 className="priceWord2">
        When applying for plumbering form, please input the right information
    </h6>
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
               Kitchen tap replacement quantity 1             </h4>
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
              Kitchen tap Replacement quality 2            </h4>
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
             Kitchen tap Replacement quality 3            </h4>
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
                Bathroom Flood drain            </h4>
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
                Replacement of bathroom flood drain pipe 
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
                Building control tap replacement
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
               Pipe burst Repair
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
                piping House
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
                Pipe burst Repair
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
export default Plumberingpricing;