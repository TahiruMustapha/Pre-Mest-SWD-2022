import React from "react"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import redstar from "../images/redstar.png"
import Card from "./Card"


 
function Gallery(){
    const sold = "Sold out";
    const online = "Online"
    return(
        <div>
            <Card className="man"
            text = {sold}
            src= {img1}
            alt = "swimmer"
            src2 = {redstar}
            alt2 = "redstar"
            src2text = "5.0 (6)-USA"
            span1 = "Life lessons with Mustapha Tahiru"
            span2 = "/ person"
            strongText = "From $135"
 
            />
            <Card className="woman"
            text = {online}
            src= {img2}
            alt = "Wedding"
            src2 = {redstar}
            alt2 = "redstar"
            src2text = "5.0 (6)-USA"
            span1 = "Learn wedding photography"
            span2 = "/ person"
            strongText = "From $120"
 
            />
            <Card className="biking"
            src= {img3}
            alt = "Bike"
            src2 = {redstar}
            alt2 = "redstar"
            src2text = "5.0 (6)-USA"
            span1 = "Group mountain biking"
            span2 = "/ person"
            strongText = "From $50"
 
            />
            {/* <div className="gallery">
                <div className = "img1">
                 <h4 className="img-text1">Sold out</h4>
                    <img  src={img1}  alt="swimmer" className ="swimmer"/>
                    <div className = "box">
                    <span><img  src={redstar}  alt="red star" className = "img"/> 5.0 (6)-USA</span>
                     <span className="p-img">Life lessons with Mustapha Tahiru</span>
                     <span className="p-img"> <strong className="strong">From $135</strong>/ person</span> 
                    </div>
                             
                </div>
                <div className = "img2">
                  <h4 className="img-text2">Online</h4>
                  <img src={img2}  alt="wedding" className ="swimmer"/>
                  <div className = "box">
                  <span> <img  src={redstar}  alt="red star" className = "img"/> 5.0 (6.0)-USA</span>
                  <span className="p-img">Learn wedding photography</span>
                  <span className="p-img"><strong className="strong">From $120</strong>/ person</span>
                  </div>
                  
                </div>
                <div className = "img3">
                  <img src={img3}  alt="bike" className="bike"/>
                  <div className = "box">
                  <span ><img  src={redstar}  alt="red star" className = "img"/> 4.8 (2)-USA</span>
                   <span className="p-img">Group mountain biking</span>
                   <span className="p-img"><strong className="strong">From $50</strong>/ person</span>
                  </div>
                   
                </div>
            </div> */}
            
            
        </div>

    );
}
export default Gallery;