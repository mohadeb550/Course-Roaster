import { useState , useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Courses from './components/Courses/Courses.jsx';
import Cart from './components/Cart/Cart.jsx';


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
     <main className='px-[4%] mx-auto bg-[#F3F3F3] flex gap-5 '>
      <Courses courses={courses}/>
      <Cart/>
     </main>
    </>
  )
}

export default App
