// import redstar from "../images/redstar.png"
// import Gallery from "./Gallery";
import React from "react"
function Card(props){
    return(
    <>
       
       
      <div className="gallery">
        <div className= "man woman biking">
        <h4 className="img-text1 img-text2" >{props.text}</h4>
          <img src= {props.src}  alt = {props.alt} className ="swimmer bike"/>
          <div className = "box" >
          <span><img src = {props.src2}  alt = {props.alt2} className = "img"/> {props.src2text}</span>
         <span className="p-img">{props.span1}</span> 
          <span className="p-img"> <strong className="strong">{props.strongText}</strong>{props.span2}</span>
          </div>
        </div>
      </div>
      
        
    </>
    )
}
export default Card;