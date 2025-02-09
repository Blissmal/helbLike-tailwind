import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import FloatLeft from "./components/FloatLeft";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Loans from "./pages/loans/Loans";
import ViewLoansTab from "./pages/loans/ViewLoansTab";
import Footer from "./components/Footer";
import menuItems from "./items/menuItems";
import SidebarWithBurgerMenu from "./components/Test";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [load, setLoad] = useState(true);
  const [newLoad, setNewLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [load]);

  if (load) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <BrowserRouter>
    <SidebarWithBurgerMenu />
      <div className="w-full flex flex-col font-sans overflow-hidden">
        {/* <Nav setToggle={setToggle} /> SIdebar control deleted*/}
        <div className="mt-0 flex bg-gray-200">
          {/* <FloatLeft toggle={toggle} menuItems={menuItems}/> Deleted sidebar section */}
          <div className="flex-1 overflow-x-hidden">
            { 
              newLoad ? 
            <div className="flex justify-center items-center h-[100px]">
              <Loader />
            </div>
               : 
               <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/loans/viewLoan" element={<ViewLoansTab />} />
              </Routes>
            }
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
  // return (
  //   <SidebarWithBurgerMenu />
  // );
};

export default App;
