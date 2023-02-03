import React from "react";
import PersonalMenu from "../personal_nav";

function Homepricing(){
    return(
        <>
        <PersonalMenu/>

        <div className="pricing_form">

    <h4 className="priceWord1">
        House cleaning form.
    </h4>
    <h6 className="priceWord2">
        When applying for house cleaning form, please input the right information
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
                Single room full clesning without<br/> toilet abnsd bathroom
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
                Single room full cleaning package<br/> withtoilet and bathroom
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
                Single room full clesning without<br/> toilet and bathroom
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
                Complete cleaning of bathroom flat<br/> with toilet and bathroom
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
                Full package of 3-bathroom ,<br/>1 bathroom,1 -toilet , 
                sitting room<br/> and kitchen 
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
                Full cleaning services of 4 bathroom<br/> 4-bedroom flat, 2-bathroom,
                <br/>2-toilet,sitting room and kitchen
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


export default Homepricing;