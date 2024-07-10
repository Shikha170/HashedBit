import React, { useState } from 'react'

const Componenet = () => {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setResult]=useState(0);

    const Addition=()=>{
        setResult(Number(num1)+Number(num2));
    };
    const Subtraction=()=>{
        setResult(Number(num1)-Number(num2));
    };
    const Multiplication=()=>{
        setResult(Number(num1)*Number(num2));
    };
    const Division=()=>{
        if(num2!=0){
        setResult(Number(num1)/Number(num2));
        }
        else{
            setResult("Can't divide by Zero");
        }
    };
  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input type="number" value={num1} placeholder='Enter a number'onChange={(e)=>setNum1(e.target.value)}/><br/>
        <input type="number" value={num2} placeholder='Enter a number'onChange={(e)=>setNum2(e.target.value)}/><br/>
        
      </div>
      <div>
      <button onClick={Addition}>+</button>
      <button onClick={Subtraction}>-</button>
      <button onClick={Multiplication}>*</button>
      <button onClick={Division}>/</button>
      </div>
      <div>
        <h3>Result:{result}</h3>
      </div>
    </div>
  )
}

export default Componenet
