import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import FloatLeft from "./components/FloatLeft";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (load) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="w-full flex flex-col font-poppins overflow-hidden">
        <Nav toggle={toggle} setToggle={setToggle} />
        <div className="mt-0 flex bg-gray-200">
          <FloatLeft toggle={toggle} />
          <div className="flex-1 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
