import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [credit, setCredit] = useState(20);
  const [cost, setCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const addToCart = (course) => {
    const isExist = cart.find(
      (alreadyCourse) => alreadyCourse.id === course.id
    );

    if (credit < course.credit) {
      return toast.error("You dont have sufficient credit", {
        position: "top-center",
        autoClose: 2201,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (!isExist) {
      setCart([...cart, course]);
      setCredit(credit - course.credit);
      setCost(cost + course.credit);
      setTotalPrice(totalPrice + course.price);
    } else {
      toast.error("Already Have In Your List !", {
        position: "top-center",
        autoClose: 2200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Header />
      <main className="px-[4%] mx-auto bg-[#F3F3F3] flex flex-col md:flex-row gap-5 ">
        <Courses courses={courses} addToCart={addToCart} />
        <Cart cart={cart} credit={credit} cost={cost} totalPrice={totalPrice} />
      </main>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
