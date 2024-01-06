import { useState ,useEffect } from 'react'
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
import BackToTop from './componets/BackToTop'
import './componets/LoadingSpinner.css';
import LoadingSpinner from './componets/LoadingSpinner'
function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
    <>
    {isLoading ? (
          <LoadingSpinner />
        ) : (
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
    )}
    </>
    </BrowserRouter>
  )
}

export default App
