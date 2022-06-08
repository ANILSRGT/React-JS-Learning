import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Card from './screens/Card'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:user" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
