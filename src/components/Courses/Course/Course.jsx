
import { FiDollarSign } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi'; 

export default function Course({course, addToCart }) {

    const { image, title, description, price , credit } = course;

  return (

    <div className="p-4 rounded-lg bg-white h-[430px] flex flex-col justify-between gap-2">
        <div>
            <img className='w-full' src={image} />
        </div>

        <h2 className="text-xl font-bold"> {title} </h2>
        <p className="text-gray-500"> {description} </p>

        <div className="flex justify-between font-semibold text-gray-500">
            <h4> <FiDollarSign className='inline text-xl'/> Price : {price} </h4>
            <h4> <FiBookOpen className='inline text-xl'/> Credit : {credit}hr </h4>     
        </div>

        <button className="font-semibold bg-blue-500 text-white
         w-full p-1 rounded-md hover:bg-blue-600 transition-all" onClick={()=> addToCart(course)}> Select </button>
    </div>
  )
}
