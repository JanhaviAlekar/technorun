import './App.css'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import RegisterForm from './components/RegisterForm/RegisterForm'
import HotelsAndConnectivity from './pages/HotelsAndConnectivity'
import CashPrice from './pages/CashPrice'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/HotelsAndConnectivity" element={<HotelsAndConnectivity/>}/>
      <Route path="/cash-price" element={<CashPrice/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
