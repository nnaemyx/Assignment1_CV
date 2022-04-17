import React from "react";
import Education from "./Education";
import Experience from './Experience';
import Skills from "./Skills"

function Generalinfo(){
    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-2 mt-5">
                        <h1>Karishma Kumari</h1>
                        <p>Email: karishmatejwani9@gmail.com</p>
                        <p>PhoneNo: (92) 314-4025165</p>
                        <hr style={{width: '80%'}}/>
                        <Education/>
                        <hr style={{width: '80%'}}/>
                        <Experience />
                    </div>
                    <div className="col-md-4">
                       <Skills />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Generalinfo;