import React from "react";


function Homepage(){
    return(
        <>
        <div className="homePage">
            <div className="main_bg">
         <h2 className="bgHeading">
            Store For a Quick Repair and Cleaning
         </h2>
         <h6 className="bg_words">
            We help in repairing the likely electric faults, plumbing faults and best cleaning        
            services all at an affordable, secured environment  with quick delivery.
         </h6>
         <span  className="bgInputs">
            <input className="bgInput" type="text" placeholder="Seach for Services here"/>
            <span className="bg_search">
                Search
            </span>
         </span>
         <div>
            <button className="bgBtn">
                Explore More
            </button>
         </div>


         </div>

   
         <div className="whatWeDo">
          <div className="options">
            <span className="option">
                <span className="opt_no">1</span>
                <h3 className="optword1">
                    Giving You Best Services
                </h3>
                <h5 className="opt_word2">
                    Help You With your Repairs
                </h5>
            </span>

            <span className="option">
                <span className="opt_no">2</span>
                <h3 className="optword1">
                    Giving secured environmewnt
                </h3>
                <h5 className="opt_word2">
                    Help You With Cleaning
                </h5>
            </span>

            <span className="option">
                <span className="opt_no">3</span>
                <h3 className="optword1">
                    Quick Delivery
                </h3>
                <h5 className="opt_word2">
                    Help You With plumbing
                </h5>
            </span>

           </div>
         <div className="we_Do">
            <h2 className="wedo_head">
                WHAT WE DO 
            </h2>
            <h6 className="wedon_sub">
                We make things comfortablen for you here
            </h6>
            <h4 className="wedo_words">
                Healthy condition must be immediate or
                 safety threat including Cleaning System,
                  Plumbing Repairs (non-functional) and 
                   Electrical Repairs, all these are the 
                   responsibilities of DarmXpress to the people.
                   DarmXpress is an online service rendering
                   platform that takes the responsibility of 
                   making people’s services rendering acquisition
                    comfortable, affordable in a secured and healthy 
                    environment with better hygiene and quick delivery.
                     We render cleaning services system, electric repair
                      and plumbing repair services through the use of
                       high skill and experience workers in each aspect 
                       of our services. We take away the stress and
                        disappointment people might be facing when 
                        it comes to getting their services rendered and 
                        we perform strict background checks and detailed 
                        screening of every of our workers, for your peace
                         of mind. So what are you waiting for? Book now!
 

            </h4>

         </div>

         </div>

         <div className="services">
          <div className="cleaning_serv">
            <div className="right_serv">
                <img className="servImg" src="image/1cleaning-home.png" alt=""/>

            </div>
            <div className="left_serv">
                <h3 className="h3Serv">
                    CLEANING SERVICES
                </h3>
                <h6 className="h6Serv">
                    We make things comfortable for you here.
                </h6>
                <h4 className="h4Serv">
                    As we all know cleaning is highly important to 
                    human life and safety, proper
                    hygiene has as a significant roles in the life pof human.
                    Cleaning.........
                </h4>
                <span className="serv_explore">
                    <button className="servBtn">
                        Explore More
                    </button>
                </span>

            </div>
            

         </div>


         <div className="cleaning_serv">
            <div className="left_serv2">
                <h3 className="h3Serv">
                    CLEANING SERVICES
                </h3>
                <h6 className="h6Serv">
                    We make things comfortable for you here.
                </h6>
                <h4 className="h4Serv">
                    As we all know cleaning is highly important to 
                    human life and safety, proper
                    hygiene has as a significant roles in the life pof human.
                    Cleaning.........
                </h4>
                <span className="serv_explore">
                    <button className="servBtn">
                        Explore More
                    </button>
                </span>

            </div>
            
            <div className="right_serv2">
                <img className="servImg" src="image/1electric-home.png" alt=""/>

            </div>

        </div>

        <div className="security_measures">
         <h3 className="measure_h3">
            Security & Measures
         </h3>
         <h6 className="measure_h6">
            We make things comfortable for you here.
        </h6>
        <h4 className="measure_h4">
            Security is one of the major challenges people are facing
             in getting their various services done, but by making use of 
             the best niche we offer you the best  security on your data
              and services provided.
        </h4>

        <span>
            <button className="servBtn">
                Explore More
            </button>
        </span>

        </div>


         <div className="cleaning_serv">
            <div className="right_serv">
                <img  className="servImg" src="image/1plumbing-home.png" alt=""/>

            </div>
            <div className="left_serv">
                <h3 className="h3Serv">
                    CLEANING SERVICES
                </h3>
                <h6 className="h6Serv">
                    We make things comfortable for you here.
                </h6>
                <h4 className="h4Serv">
                    As we all know cleaning is highly important to 
                    human life and safety, proper
                    hygiene has as a significant roles in the life pof human.
                    Cleaning.........
                </h4>
                <span className="serv_explore">
                    <button className="servBtn">
                        Explore More
                    </button>
                </span>

            </div>
            

        </div>

         </div>

        
       
        </div>
        </>
    )
}

export default Homepage;