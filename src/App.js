import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Sports from "./pages/sports/Sports";
import Transfers from "./pages/transfers/Transfers";
import News from "./pages/news/News";
import Competitions from "./pages/competitions/Competitions";
import Team from "./pages/teams/Team";
import About from "./pages/about/About";
import Live from "./pages/live/Live";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <main className="min-h-screen bg-darkBg">
        <Router>
          <Sidebar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/news" element={<News />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/live" element={<Live />} />
            <Route path="/login" element={<Live />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
