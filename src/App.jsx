import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import Services from './componets/Services'
import ContactForm from './componets/ContactForm'
import Work from './componets/Work'
import Footer from './componets/Footer'
import Testmonial from './componets/Testmonial'
import BackToTop from './componets/BackToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
    <Navbar/>
    
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/work" element={<Work />} />
          
          <Route path="/contact" element={<ContactForm/>} />
    </Routes>
    <BackToTop/>
    <Footer/>
    </>
    </BrowserRouter>
  )
}

export default App
