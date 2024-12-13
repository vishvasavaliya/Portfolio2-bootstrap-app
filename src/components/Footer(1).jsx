import React from "react";
import { Container,Row } from "react-bootstrap";
export default function Footer()

{
    return(
        <>
<section id="Footer-section">
<div className="container p-4">
    <div className="row">
    <div className="col-md-6 ">
<h1 className="text-white">Subscribe to our news and regular updates</h1>
<p className="text-white mt-4">Sit amet consectetur adipisicing elit. Deleniti ipsa iste natus ducimus cupiditate soluta aut excepturi, 
    dolorum molestias optio sunt? Mollitia sequi deleniti totam dicta.</p>

    </div>
    <div className="col-md-6">
        <div className="from-group Email ms-5 ">
            <input type="email" placeholder="Enter your Email*" required className="form-control w-75 p-3" ></input>
            
        </div>
    </div>
    </div>
</div>

<div className=" container-fluid  bg-dark text-white">
    <div className="row g-2 ms-5">
        <div className="col-md-3">
            <h3>Adress</h3>
            <p>New York, NY-90814 Hill Station<br/> 4yh Street</p>
        </div>
        <div className="col-md-3">
            <h3>Email</h3>
            <p>Truptipansuriya4@gmail.com</p>
        </div>
        <div className="col-md-3">
            <h3>Phone</h3>
            <p>6356985589</p>
        </div>
        <div className="col-md-3">
            <h3>Fax</h3>
            <p>569833258</p>
        </div>
    </div>

    <hr className="border border-1 text-white"/>
    <div className="Footer" >
<h6>Privacy policy</h6>
    <p>@2020 Weird . All rights reserved. Design by <b>W3Layouts</b></p>
    <div className="icon fs-4"><span className="bi bi-instagram"></span>
    <span className="bi bi-facebook ms-2"></span>
    <span className="bi bi-twitter ms-2"></span>
    </div>
</div>
</div>

</section>

        </>
    )
}