
import Course from './Course/Course.jsx'

export default function Courses({courses}) {

  return (
    <section className='grid grid-cols-3 gap-5'>
       {courses.map((course, idx) =>  <Course key={idx} course={course} />)}
    </section>
  )
}


