import { useEffect, useState } from 'react';
import { Counter } from '../components/Counter';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data , setData] = useState(null)
  const [disable , setDisable] = useState(false)
  const [userInput , setUserInput] = useState({
    userName:"",
    questionSelected:[],
    optionSelected:[]
})

useEffect(() => {
   fetch("http://localhost:9999/question/show") // API link here
    .then((res) => res.json())
    .then((data) => {
     setData(data)
    })
  },[])

const handleChange = (option , question) => {
  setUserInput({...userInput , optionSelected : [...userInput.optionSelected , option] , questionSelected: [...userInput.questionSelected , question] })
 }

 
  return (
    <div >
      <Counter setDisable={setDisable} />
      <div className='m-8'>    
               <h1 className='font-bold text-lg'>{data?.question}</h1>
                {
                  data?.options.map((op) => {
                    return (
                     <div key={op.id}>
                      <input disabled={disable ? true : false} onChange={(e) => handleChange(e.target.value, 1)}  id={op.value} type="radio" value={op.id} name="option" ></input>
                      <label className="text-lg" htmlFor={op.value}>{op.value}</label> 
                     </div>
                    )
                  }) 
                }
              </div>
    </div>
  )
}