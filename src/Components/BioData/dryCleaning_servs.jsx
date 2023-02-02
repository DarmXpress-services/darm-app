import React from "react";


function Drycleaning_page(){
    return(
        <>
        
        <div className="bioData">
    <h1 className="biodataH1">
        Cloths  dry cleaning form
    </h1>
    <h3 className="biodataH3">
        When applying for dry cleaning form, please input the right information
    </h3>
.
    <div className="break_line"></div>

    <div className="data">
        <div className="personal">
            <div className="pers_words">
                <h4 className="biodataH4">
                    Personal
                </h4>
                <h5 className="biodataH5">
                    When applying for house cleaning,<br/>
                    please input the right information
                </h5>

            </div>
            
            <div className="pers_form">
                <form action="get">
                    <span>
                        <span>
                            <h4>Full Name*</h4>
                        <input className="fullName" type="text"/>
                        </span>
                        <span>
                            <h4>Phone No*</h4>
                        <input className="phone" type="number"/>
                        </span>
                        <span>
                            <h4>Date Of Birth*</h4>
                        <input className="birth" placeholder="DD/MM/YYYY" type="date"/>
                        </span>

                    </span>
                    <span>
                        <span>
                            <h4>Email*</h4>
                        <input className="fullName" type="email"/>
                        </span>
                        <span>
                            <h4>House Address*</h4>
                        <input className="address" type="text"/>
                        </span>

                    </span>

                </form>

            </div>
           

        </div>
         <div className="break_line"></div>

        <div className="pickup">

            <div className="pickup_words">
                <h4 className="biodataH4">
                    Pickup and delivery Address
                </h4>
                <h5 className="biodataH5">
                    When applying for house cleaning,<br/> 
                    please input the right information
                </h5>

            </div>
            <div className="pickup_form">
                <form>
                        <span>
                            <h4>pick up Address*</h4>
                        <input className="pick_address" type="text"/>
                        </span>
                        
                    <span>
                        <span>
                            <h4>Delivery Address*</h4>
                        <input className="delivery-address" type="text"/>
                        </span>

                    </span>

                </form>

            </div>

        </div>

<div className="break_line"></div>

        <div className="nin">
            <div className="nin_words">
                <h4 className="biodataH4">
                    National Identification
                </h4>
                <h5 className="biodataH5">
                    When applying for Fundraising,<br/> 
                    please input the right information
                </h5>

            </div>
            <div className="pers_form">
                <form action="get">
                    <span>
                        <span>
                            <h4>Name On Your ID*</h4>
                        <input className="name_id" type="text"/>
                        </span>
                        <span>
                            <h4>ID Number*</h4>
                        <input className="id_no" placeholder="USS" type="number"/>
                        </span>
                        <span>
                            <h4>ID Front Picture*</h4>
                        <input className="picture" type="image"/>
                        </span>

                    </span>
                    <span>
                       <span>
                            <h4>Date of Birth On The ID*</h4>
                        <input className="birth_id" type="date"/>
                        </span>
                        <span>
                            <h4>ID Last Name*</h4>
                        <input className="id_lname" type="text"/>
                        </span>
                        <span>
                            <h4>ID Back Picture*</h4>
                        <input className="picture" type="image"/>
                        </span>

                    </span>

                </form>

            </div>

        </div>

    </div>
    <div className="data_submit">
         <span className="cleanSubmit">
                Best Cleaning Service
            </span>
        <span className="cancelSubmit">
           
            <button className="data_cancel">
                Cancel
            </button>
            </span>
            <span className="Submits">
            <button className="data_sub">
                Submit 
            </button>
            </span>
        

    </div>


</div>
        
        </>
    )
}

export default Drycleaning_page;