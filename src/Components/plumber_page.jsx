import React from "react";
import Menu from "./nav";
import Footer from "./footer";
import Plumberingpage from "./Plumbering";
function Plumberpage(){
    return(
        <>
        <div className="electric_page">
            <Menu/>
           <Plumberingpage/>


            <Footer/>

        </div>

        
        </>
    )
}


export default Plumberpage;