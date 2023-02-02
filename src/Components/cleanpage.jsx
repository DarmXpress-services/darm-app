import React from "react";
import Menu from "./nav";
import Footer from "./footer";
import Cleaningpage from "./cleaningpage";

function Cleanpage(){
    return(
        <>
        <div className="clean_page">
            <Menu/>
            <Cleaningpage/>


            <Footer/>

        </div>

        
        </>
    )
}
export default Cleanpage;