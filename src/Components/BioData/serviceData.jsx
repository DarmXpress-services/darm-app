import React from "react";

function serviceData(){
    return(
        <>
        <div className="serv_form">
    <h4>
        House cleaning form.
    </h4>
    <h6>
        When applying for house cleaning form, please input the right information
    </h6>
    <div>
        <div>
            <h4>
                Services
            </h4>
            <h4>
                Prices#
            </h4>
            <h4>
                Apply
            </h4>
            <div className="breakLine"></div>
        </div>
        <div className="servPrice">
            <h4>
                Single room full clesning without toilet abnsd bathroom
            </h4>
            <h4>
                3000
            </h4>
            <span>
                <button className="servBtn">
                    Apply Here
                </button>
            </span>
            <div className="breakLine"></div>
            
        </div>

        <div className="servPrice">
            <h4>
                Single room full cleaning package withtoilet and bathroom
            </h4>
            <h4>
                3000
            </h4>
            <span>
                <button className="servBtn">
                    Apply Here
                </button>
            </span>
            <div className="breakLine"></div>
            
        </div>

        <div className="servPrice">
            <h4>
                Single room full clesning without toilet and bathroom
            </h4>
            <h4>
                3000
            </h4>
            <span>
                <button className="servBtn">
                    Apply Here
                </button>
            </span>
            <div className="breakLine"></div>
            
        </div>

        <div className="servPrice">
            <h4>
                Complete cleaning of bathroom flat with toilet and bathroom
            </h4>
            <h4>
                3000
            </h4>
            <span>
                <button className="servBtn">
                    Apply Here
                </button>
            </span>
            <div className="breakLine"></div>
            
        </div>

        <div className="servPrice">
            <h4>
                Full package of 3-bathroom ,1 bathroom,1 -toilet , 
                sitting room and kitchen 
            </h4>
            <h4>
                3000
            </h4>
            <span>
                <button className="servBtn">
                    Apply Here
                </button>
            </span>
            <div className="breakLine"></div>
            
        </div>

        <div className="servPrice">
            <h4>
                Full cleaning services of 4 bathroom 4-bedroom flat, 2-bathroom,
                2-toilet,sitting room and kitchen
            </h4>
            <h4>
                3000
            </h4>
            <span>
                <button className="servBtn">
                    Apply Here
                </button>
            </span>
            <div className="breakLine"></div>
            
        </div>

    </div>

    <div className="complaint">
        <span>
            <h4>Complaint not listed?</h4>
            <h6>
                If your complaints are not listed above, kindly
             type it below
            </h6>
        </span>
        <div>
            <h4>Type your complaints here</h4>
            <span>
                <input type="text"/>
            </span>
        </div>

    </div>

    <div className="complain_submit">
        <span>
            <button className="complain_cancel">
                Cancel
            </button>
            <button className="complain_submit">
                Submit 
            </button>
        </span>

    </div>




        </div>
        
        </>
    )
}