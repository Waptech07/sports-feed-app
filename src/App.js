import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./pages/home/Home";
import Sports from "./pages/sports/Sports";
import Transfers from "./pages/transfers/Transfers";
import News from "./pages/news/News"
import Competitions from "./pages/competitions/Competitions";
import Team from "./pages/teams/Team";
import About from "./pages/about/About";
import Live from "./pages/live/Live";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <div className="App bg-[#030E29] w-full h-screen">
          <Routes>
            
            <Route path="/sports" element={<Sports />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/news" element={<News />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/live" element={<Live />} />
            <Route path="/login" element={<Live />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App