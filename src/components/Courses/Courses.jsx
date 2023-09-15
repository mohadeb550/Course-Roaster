
import Course from './Course/Course.jsx'

export default function Courses({courses, addToCart }) {

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-5 flex-1'>
       {courses.map((course, idx) =>  <Course key={idx} course={course} addToCart={addToCart}/>)}
    </section>
  )
}


