import React from "react";

function Electrictying(){
    return(
        <>
        <div className="bioData">
    <h1 className="biodataH1">
       Electricity repair form
    </h1>
    <h3 className="biodataH3">
      When applying for Electricity repair form, please input the right information
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
                    When applying for Electricity repair form,<br/>
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

         <div className="hAddress">
            <div className="pers_words">
                <h4 className="biodataH4">
                    House Address
                </h4>
                <h5 className="biodataH5">
                    When applying for Electricity repair form,<br/>
                    please input the right information
                </h5>

            </div>
            
            <div className="pers_form">
                <form action="get">
                    <span>
                        <span>
                            <h4>Street Name*</h4>
                        <input className="fullName" type="text"/>
                        </span>
                        <span>
                            <h4>house Number *</h4>
                        <input className="phone" type="number"/>
                        </span>
                        <span>
                            <h4>Country*</h4>
                        <input className="birth" placeholder="DD/MM/YYYY" type="date"/>
                        </span>

                    </span>
                    <span>
                        <span>
                            <h4>city *</h4>
                        <input className="fullName" type="email"/>
                        </span>
                        <span>
                            <h4>State. *</h4>
                        <input className="fullName" type="text"/>
                        </span>

                    </span>

                </form>

            </div>
           

        </div>

    </div>
    <div className="data_submit">
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



export default Electrictying;