import Nav from "./components/Nav"
import  "./App.css"
import Section1 from "./components/Section1";
import Gallery from "./components/Gallery";


function App() {
  
  return (
      <div className='container'>
        <Nav/>
        <Section1/>
        <Gallery/>
      </div>  
  );
}

export default App;
