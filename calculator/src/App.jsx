
import { useState } from 'react';
import './App.css';

function App() {
  
  const [cal, setCal] = useState("");
  // const [result, setResult]= useState("");
  const operators = ["+","-", "/", ".", "*"]
  const updateData =(data) =>{
    if(operators.includes(data) && cal=="" ||
     operators.includes(data) && operators.includes(cal.slice(-1))){
      return
     } 

    setCal(cal+data)
    // if(!operators.includes(data)){
    //   setResult(eval(cal+data))
    // }

  }
  const updateAC = (data)=>{
    setCal(data)
  }

  const equlto= ()=>{
    setCal(eval(cal).toString())
  }

  const deleteData  = ()=>{
    if(cal===""){
      return;
    }
    const data = cal.slice(0,-1)
    setCal(data)
  }

  
  return (
    <div className="App">

          <div className="main-menu">

                  <div className="main-menu-wrapper">

                       <div className="cal-outer">

                            <div className="display-data">
                               <span>{cal||0}</span>
                            </div>
                            <div className="all-symbols">
                                   <button onClick={()=>updateAC("")}>AC</button>
                                   <button onClick={deleteData}>DEL</button>
                                   <button>e.</button>
                                   <button onClick={()=>updateData("/")} >/</button>
                                   <button onClick={()=>updateData("1")}>1</button>
                                   <button onClick={()=>updateData("2")}>2</button>
                                   <button onClick={()=>updateData("3")}>3</button>
                                   <button onClick={()=>updateData("+")}>+</button>
                                   <button onClick={()=>updateData("4")}>4</button>
                                   <button onClick={()=>updateData("5")}>5</button>
                                   <button onClick={()=>updateData("6")}>6</button>
                                   <button onClick={()=>updateData("*")}>*</button>
                                   <button onClick={()=>updateData("7")}>7</button>
                                   <button onClick={()=>updateData("8")}>8</button>
                                   <button onClick={()=>updateData("9")}>9</button>
                                   <button onClick={()=>updateData("-")}>-</button>
                                   <button onClick={()=>updateData("0")}>0</button>
                                   <button onClick={()=>updateData(".")}>.</button>
                                   <button  onClick={equlto}>=</button>
                                   <button onClick={()=>updateAC("")}>AC</button>
                                  
                              
                                   
                                 
                            </div>

                         
                       </div>

                  </div>
                     
                    
          </div>
      
    </div>
  );
}

export default App;
