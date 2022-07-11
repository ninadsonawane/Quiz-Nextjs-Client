import { useEffect, useState } from "react"
import axios from "axios"

const Admin = () => {
  const [quiz , setQuiz] = useState({
    quizname:"",
    owner:""
  })

//   useEffect(() => {
//     axios.post('http://localhost:8000/api/create/quiz', quiz )
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   },[quiz])


  const handleSubmit = (e) => {
  e.preventDefault()
  setQuiz({ owner : "62c0b115b3295b8cf63936ac" , ...quiz});
  }

  return (
    <div className="m-8">
    <form onSubmit={handleSubmit}>
    <input className="border" type={'text'} value={quiz.quizname} onChange={(e) => setQuiz({...quiz, quizname:e.target.value})}/>
    <label>QUIZ NAME</label>
    <button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded-md m-8" >Submit</button>
    </form>
    </div>
  )
}

export default Admin
