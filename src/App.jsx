import { useState } from "react";
import Nav from "./components/Nav";
import FloatLeft from "./components/FloatLeft";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [toggle, setToggle] = useState(false);

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
