import React, { useEffect, useState } from 'react'


export const Counter = ({setDisable}) => {
    const [countdown , setCountDown] = useState(10);


  useEffect(() => {
    const timer =
    countdown > 0 && setInterval(() => setCountDown(countdown - 1), 1000);
    countdown === 0 && setDisable(true);
    return () => clearInterval(timer);
  },[countdown, setDisable])
  
  

  return (
    <div className='m-8'>
        <h1 className='text-2xl'> Timer : {countdown}</h1> 
    </div>
  )
}
