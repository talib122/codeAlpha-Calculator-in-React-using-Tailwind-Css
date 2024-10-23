import React from 'react'

const Keys = ({label,keyClass,clickButton}) => {
    const equalTo="bg-blue-400 col-span-2 "
  return (
    
    <div className={`items-center justify-center flex p-4 bg-slate-700 hover:bg-purple-500 rounded-md ${keyClass&&equalTo}`} onClick={()=>clickButton(label)}>{label}</div>      
    
  )
}

export default Keys
