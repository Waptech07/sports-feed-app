import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Sidebar from "./components/sidebar";
import { SidebarContext } from "./context/sidebarContext";

const App = () => {
  const { isOpened } = useContext(SidebarContext);
  
  return (
    <>
      <main className="min-h-screen flex gap-3 font-poppins overflow-hidden relative">
        <Router>
          <Sidebar />
          <section className={`${isOpened ? "lg:w-[80%] w-full" : "lg:w-[95%] w-full"} lg:my-3 lg:mr-3 lg:p-4 p-3 bg-red-500 duration-500`}>
            <Routes>
              <Route exact element={<Home />} path="/" />
            </Routes>
          </section>
        </Router>
      </main>
    </>
  );
};

export default App;
