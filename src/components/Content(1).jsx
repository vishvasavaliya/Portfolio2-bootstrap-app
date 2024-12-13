import React from "react";
import { Container,Row } from "react-bootstrap"
import person1 from '../assets/image/a1.jpg'
import apple from '../assets/image/Apple.jpg'
import microsoft from '../assets/image/microsoft.jpg'
import samsung from '../assets/image/samsung.jpg'
export default function Content()
{
    return(
        <>
        <section id="portfolio-content">
        <div className="container p-5 text-center">
            <h3 className="fs-2 my-bio">My Bio</h3>
            <h1 className="fs-1 text-center p-2"><b>Welcome to My Site</b></h1>
            <p className="p-2 fs-5">Amet consectetur adipisicing elit. Repell endus veniam, quaerat quasi in vel exerci tationem
                     <br/> 
                     cum consequatur accusamus. Maxime quibusdam explicabo assumenda veniam velit.</p>
         </div>

         {/* creative-projects */}
         <div className="container creative-project mt-4 w-100">
            <div className="col-md-6">
                <h1><b>Innovative Solutions To Boost Your Creative Projects</b></h1>
                <p className="mt-4">Sit amet cons ectetur adipis icing elit.optio illum officiis itaque soluta impedit ex esse aspernatur Sit amet cons ectetur adipis icing elit.optio illum officiis itaque soluta impedit ex esse aspernatur Sit amet cons ectetur adipis icing elit.
                    optio illum officiis itaque soluta impedit ex esse aspernatur.</p>
            
   <div className="project1">
            <div>
                <h3 className="mt-3">Web Design</h3>
                <p className="mt-3">Cumque asperiores abquasi 
                    <br/>laboriosam omnis tempore</p>
            </div>
            <div className="ms-5" >
            <h3 className="mt-3">UI/UX Design</h3>
                <p className="mt-3">Cumque asperiores abquasi 
                    <br/>laboriosam omnis tempore</p>
            </div>
</div>
<div className="project2">
            <div>
            <h3 className="mt-3">Mobile Apps</h3>
                <p className="mt-3">Cumque asperiores abquasi 
                    <br/>laboriosam omnis tempore</p>
                    </div>
                    <div className="ms-5">
                    <h3 className="mt-3">Animation</h3>
                <p className="mt-3">Cumque asperiores abquasi 
                    <br/>laboriosam omnis tempore</p>
                    </div>
                </div>
                <button type="button" classname="btn-lg p-5">Read More</button>
                </div>
          <div className="col-md-6 ">
             <img src={person1} 
                 alt="person" className="img-fluid ms-5" /> 
            </div>
            </div>

       {/* my-skills */}
       <div className="container p-5 text-center">
            <h3 className="fs-3 my-skill">My Skills</h3>
            <h1 className="fs-1 text-center p-2"><b>My Professional skills</b></h1>
            <p className="p-2 fs-5">Amet consectetur adipisicing elit. Repell endus veniam, quaerat quasi in vel exerci tationem
                     <br/> 
                     cum consequatur accusamus. Maxime quibusdam explicabo assumenda veniam velit.</p>
         </div>

         <div className="container">
            <Row>
                <div className="col-md-4">Photoshop <br/>
                <div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={25}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "25%" }}>
  </div>
</div>
<div> UI/Ux Desinger
<div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={55}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "55%" }}>
  </div>
</div>
</div>
<div>Html5,Css3

<div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={95}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "95%" }}>
  </div>
</div>
</div>
</div>
                <div className="col-md-4">Design
                <div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={35}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "35%" }}>
  </div>
</div>
<div>Illustrator
<div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={65}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "65%" }}>
    
  </div>
</div>
</div>
<div>Editor
<div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={25}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "25%" }}>
  </div>
</div>

</div>

                </div>

                <div className="col-md-4">Developers
                <div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={85}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "85%" }}>
    
  </div>
</div>
<div>Bootstrap
<div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={98}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "98%" }}>
    
  </div>
</div>

</div>
<div>Invisonapp
<div
  className="progress mt-2"
  role="progressbar"
  aria-label="Example with label"
  aria-valuenow={45}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "45%" }}>
    </div>
</div>
</div>
 </div>
</Row> 
</div>

{/* my fun fact */}

<div className="container p-5 text-center">
            <h3 className="fs-3 my-fun-fact">My Fun Fact</h3>
            <h1 className="fs-1 text-center p-2"><b>Let's Develop Your Next Great Design</b></h1>
            <p className="p-2 fs-5">Amet consectetur adipisicing elit. Repell endus veniam, quaerat quasi in vel exerci tationem
                     <br/> 
                     cum consequatur accusamus. Maxime quibusdam explicabo assumenda veniam velit.</p>
         <div className="fun-fact">
   <div className="col-md-3 border border-2  p-4 clk">
<span className="bi bi-clock fs-4 p-5 clock"></span><br/>
<b className="fs-2 p-4 text-center">9050</b>
<h5 className="text-center">Hours of Works</h5>
   </div>
   <div className="col-md-3 border border-2 p-4 thumbs">
   <span className="bi bi-hand-thumbs-up fs-4 p-5 clock"></span><br/>
<b className="fs-2 p-4 text-center">500</b>
<h5 className="text-center">Project Done</h5>
   </div>
    
   
   <div className="col-md-3 border border-2  p-4 smile">
   <span className="bi bi-emoji-smile fs-4 p-5 clock"></span><br/>
<b className="fs-2 p-4 text-center">350</b>
<h5 className="text-center">Satisfied Customers</h5>
   
   </div>
   <div className="col-md-3 border border-2  p-4  award">
   <span className="bi bi-award fs-4 p-5 clock"></span><br/>
<b className="fs-2 p-4 text-center">25</b>
<h5 className="text-center ">Awards Winning</h5>
   </div>
</div>
</div>

{/* my-client */}
<div className="container-fluid p-5 text-center client w-100">
            <h3 className="fs-3 my-client">My Clients</h3>
            <h1 className="fs-1 text-center p-2"><b>What They Says</b></h1>
            <p className="p-2 fs-5">Amet consectetur adipisicing elit. Repell endus veniam, quaerat quasi in vel exerci tationem
                     <br/> 
                     cum consequatur accusamus. Maxime quibusdam explicabo assumenda veniam velit.</p>

<div className="client-detail">
                    <div className="col-md-4 border border-2 p-4  ms-4 c1">
            <p className="text-center">Samet consec tetur adipis icing elit. 
                Dolo ribus neque, debitis unde aut moles tiae consequ untur excepturi,
                Dolo ribus neque, debitis unde aut moles tiae consequ untur excepturi,  
                Officiis nobis moles tias harum.
                </p>

                <div className="client1">
                <img src={apple} 
                 alt="person" className="img-fluid  w-25 rounded-circle"/>  
                 <div className="details ms-3 mt-1 ">
                  <h4>John Smith</h4>
                  <p>Apple</p>
                 </div>
                  </div>      
    </div> 

<div className="col-md-4 border border-2 p-4 ms-4 c2">
            <p className="text-center">Samet consec tetur adipis icing elit. 
                Dolo ribus neque, debitis unde aut moles tiae consequ untur excepturi,
                Dolo ribus neque, debitis unde aut moles tiae consequ untur excepturi,  
                Officiis nobis moles tias harum.
                </p>
                <div className="client2">
                <img src={microsoft} 
                 alt="microsoft" className="img-fluid  w-25 rounded-circle"/>  
                 <div className="details ms-3 mt-1 ">
                  <h4>Jackson</h4>
                  <p>Microsoft</p>
                 </div>
                  </div>     

                


                        
    </div>
    <div className="col-md-4 border border-2 p-4 ms-4 c3">
            <p className="text-center">Samet consec tetur adipis icing elit. 
                Dolo ribus neque, debitis unde aut moles tiae consequ untur excepturi,
                Dolo ribus neque, debitis unde aut moles tiae consequ untur excepturi,  
                Officiis nobis moles tias harum.
                </p>
                <div className="client3">
                <img src={samsung} 
                 alt="samsung" className="img-fluid  w-25 rounded-circle"/>  
                 <div className="details ms-3 mt-1 ">
                  <h4>Austin</h4>
                  <p>samsung</p>
                 </div>
                  </div> 


                        
    </div>
    </div>
    </div>  

{/* Freelancer */}
<div className="container">
    <h1 className="text-center mt-5 p-4"><b>I Am Available For Freelancer.</b></h1>
    <button type="button" className="btn btn-lg freelancer">Hire Me</button>
</div>
 </section>
        </>
    )
}

