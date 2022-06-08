import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Card from './screens/Card'

function App() {
  function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    });
    return null;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:userId" element={<Card />} />
          <Route path='/:userId' element={
            <Redirect to='/contact' />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
