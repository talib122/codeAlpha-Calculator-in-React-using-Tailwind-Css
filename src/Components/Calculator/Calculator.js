import React, { useState } from 'react'
import Keys from '../Keys/Keys'

const Calculator = () => {
  const keys=["AC","C","%","/","7","8","9","*","4","5","6","-","1","2","3","+",".","0","="];
  const [showResult,setShowResult]=useState(false);
  const[display,setDisplay]=useState("")
  const displayResult="text-green-600 text-2xl";
  const OperationClass="text-yellow-400 tracking-[4px]"
  function handleButton(value){
    setShowResult(false);
   if (value=="AC") {
      setDisplay("");
   }
   else if(value=="C") setDisplay(display.slice(0,-1));
   else if(isOperator(value)){
    if(display=="")  
    return;
   setDisplay(display+value);
   }
   else if(value=="=")
    calculate();
    else
    setDisplay(display+value)
  }
  function calculate(){
      if(display.length!==0){
    try{    
      let result=eval(display);
      setDisplay(result.toString());
      setShowResult(true);  
    }catch(error){
     setDisplay("error");
    };
  }
  }
  function isOperator(cha){
    return ["*","/","%"].includes(cha);
  }
    return (
    <div className='bg-slate-500 h-screen flex items-center justify-center text-white'>
      <div className='bg-black p-8 rounded-lg'>
        <div className='flex justify-end bg-slate-800 mb-6 items-center rounded-lg p-[13px] h-10 w-[300px] text-white'>
            <div className={`${showResult?displayResult:OperationClass}`}>
                <h1>{display}</h1>
            </div>
        </div>
        <div className='grid grid-cols-[repeat(4,1fr)] gap-3'>
        {keys.map((item,index)=>(
            <Keys label={item} key={index} keyClass={item=="="} clickButton={handleButton}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
