import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Sidebar from './components/sidebar'

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact element={<Home />} path='/' />
        </Routes>
      </Router>
    </>
  )
}

export default App