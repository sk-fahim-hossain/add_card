import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <AddCard></AddCard>
      </header>
    </div>
  );
}

function AddCard(){
  
   const [count, setCount] = useState(0);
   const handleClick = () => setCount(count + 1);
   const buttonStyle = {
     border: "none",
     borderRadius:"10px",
     backgroundColor:"orange",
     padding:"10px",
     boxShadow:"1px 2px 20px grey",
     margin:"20px"
   }
   const divStyle = {
     height:"200px",
     weight:"100px",
     border:"none",
     borderRadius:"10px",
     backgroundColor:"white",
     color:"black",
     padding:"10px"
   }
  
  return(
    <div style={divStyle}>
      <h4>Items you have selected:{count}</h4>
      <button onClick={handleClick} style={buttonStyle}>Add Item</button>
      <h6>Actually it is a react add-card project.</h6>
    </div>
  )
}

export default App;
