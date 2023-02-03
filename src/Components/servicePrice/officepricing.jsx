import React from "react";
import PersonalMenu from "../personal_nav";

function OfficePricing(){
    return(
        <>
        <PersonalMenu/>
        <div className="pricing_form">

    <h4 className="priceWord1">
        Office cleaning 
    </h4>
    <h6 className="priceWord2">
       When applying for office cleaning form, please input the right information    </h6>
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
             Single room office            </h4>
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
             Double room office            </h4>
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
export default OfficePricing;