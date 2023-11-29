import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import RegisterForm from './components/RegisterForm/RegisterForm'
import Hero from './components/Hero/Hero';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    {/* <Hero/> */}
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/Register" element={<RegisterForm/>}/>
      <Route path="/ContactUs" element={<ContactUs/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
