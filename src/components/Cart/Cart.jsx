

export default function Cart({cart, credit, cost, totalPrice}) {
  return (
    <div className="p-4 bg-white  h-fit rounded-xl mb-5 md:mb-0">
        <h3 className="font-bold text-blue-500 text-xl pb-5 border-b"> Credit Hour Remaining {credit} hr</h3>
        <h2 className="my-5 font-bold text-2xl"> Course Name </h2>

        <div className="pb-6 font-medium border-b-2 text-lg  text-gray-500 space-y-2">
          {cart.map((course, index) => <p> {index+1}. {course.title} </p>)}
        </div>
        <h4 className="text-gray-600 font-semibold text-lg border-b py-3">Total Credit Hour : {cost} </h4>
        <h4 className="text-gray-500 font-bold text-lg pt-4"> Total Price : {totalPrice} USD </h4>
    </div>
  )
}
