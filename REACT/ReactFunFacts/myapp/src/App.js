import logo from './logo.svg';
 import './App.css'; 
//import Main from './Components/Main';
//import Topnav from './Components/Topnav';

function App() {
  return (    
    <div className='main'>
      <div className='sub-main'>
        <div className='div'>
          <div className='nav'>
             <diV className ="logo">
               <img src= {logo} alt="logo"/> 
               <h3>ReactFacts</h3>
             </diV>
              <p>React Course - Project1</p>
          </div>
             <div className="content" style={{backgroundImage:`url(${logo})`}}>
              <h1>Fun Facts About React</h1>
              <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>is maintain by Facebook</li>
                <li>Powers thousands of enterprise apps, including <br/> mobile apps</li>
              </ul>
             </div>
          </div> 
      </div>
    </div>
     
  );
}

export default App;
