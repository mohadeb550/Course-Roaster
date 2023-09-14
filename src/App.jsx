import { useState , useEffect } from 'react'
import Header from './components/Header/Header.jsx'


function App() {

  const [courses , setCourses] = useState([]);

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
   
  },[])
 

  return (
    <>
     <Header/>
     <main>

     </main>
    </>
  )
}

export default App
