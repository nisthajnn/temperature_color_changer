import React from 'react';
import './App.css'
import { useState } from 'react';
const App = () => {
  const[temp,setTemp]=useState(0);
  const[color,setColor]=useState('cold');
  const inc=()=>
  {
    if(temp<30)
    {
      setTemp(temp+1);
    }
    if(temp>=15)
    {
      setColor('cold')
    }
    else
    {
      setColor('hot');
    }
  }
  const dsc=()=>{
    if(temp>0)
    {
      setTemp(temp-1);
    }
    if(temp>15)
    {
      setColor('cold')
    }
    else
    {
      setColor('hot');
    }
  }
	return (
		<>
    <div className="container">
    
      <div className="circle">
          <div className={`cir ${color}`}>
            <div className='head'>{temp}&deg;C</div>
         
          </div>
          </div>
      <div className="but">
        <button onClick={inc}>+</button>
        <button onClick={dsc}>-</button>
      </div>
    </div>
    </>
	);
};

export default App;