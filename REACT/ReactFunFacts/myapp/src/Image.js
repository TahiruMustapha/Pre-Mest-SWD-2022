 import './App.css';
import img2 from './img2.jpg';
function Image(){
    return(
        <div>
         <img src={img2} width= "200px" alt='president'/>
          <h1 className='Header' >Hello</h1>      
        </div>
    )
}
function Gallery(){ 
    return(
        <div>
          <Image/>
           </div>
        
    )
}
export default Gallery;
