import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [state1, setState1] = useState(0);
  let [state2, setState2] = useState(false);
  let id;

  useEffect(() => {
    if(state2){
      id = setInterval(() => {
        setState1(state1+1)
      }, 1000);
    }
    else{
      setState1(state1)
    }
    
    return () => {
      clearInterval(id)
    };
  }, [state1,state2]);
  
      let clear=()=>{
        setState1(0)
        setState2(false)
      }

  return (
    <div className="App">
      <h1>{state1}</h1>
      
        <center>
      <button onClick={() => setState2(true)}>start</button>
      <button onClick={() => setState2(true)}>resume </button>
      <button onClick={() => setState2(false)}>stop</button>
      <button onClick={() => clear()}>restart</button>
      </center>
    </div>
  );
}

export default App;