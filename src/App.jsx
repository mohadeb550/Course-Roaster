import { useState , useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Courses from './components/Courses/Courses.jsx';
import Cart from './components/Cart/Cart.jsx';


function App() {

  const [courses , setCourses] = useState([]);
  const [ cart , setCart ] = useState([]);
  const [ credit , setCredit ] = useState(20);
  const [ cost , setCost ] = useState(0);
  const [totalPrice , setTotalPrice] = useState(0);
  


  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
   
  },[])


  const addToCart = (course) => {

    const isExist = cart.find(alreadyCourse => alreadyCourse.id === course.id );

    if(credit < course.credit){return alert('Insufficient Credit')}

    if(!isExist){
      setCart([...cart, course])
      setCredit(credit - course.credit)
      setCost(cost + course.credit)
      setTotalPrice(totalPrice + course.price)
    }else{
      alert('Already Exist in your List')
    }

    
  }
 

  return (
    <>
     <Header/>
     <main className='px-[4%] mx-auto bg-[#F3F3F3] flex gap-5 '>
      <Courses courses={courses} addToCart={addToCart} />
      <Cart cart={cart} credit={credit} cost={cost} totalPrice={totalPrice} />
     </main>
    </>
  )
}

export default App
