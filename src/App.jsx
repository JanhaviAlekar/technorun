import './App.css'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter , useNavigate} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Payments from './pages/Payments/Payments'
import RegisterForm from './components/RegisterForm/RegisterForm'
import HotelsAndConnectivity from './pages/HotelsAndConnectivity'
import CashPrice from './pages/CashPrice'
import PageNotFound from './pages/PageNotFound'
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess'
import { useEffect } from 'react'
import UserContextProvider from './context/userContexrProvider'

function App() {

  useEffect(() => {
    console.log('App component mounted');
    return () => {
      console.log('App component unmounted');
    };
  }, []); 

  return (
    <UserContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/HotelsAndConnectivity" element={<HotelsAndConnectivity/>}/>
      <Route path="/cash-price" element={<CashPrice/>}/>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/payments" element={<Payments/>} />
      <Route path="/payments-success" element={<PaymentSuccess/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </UserContextProvider>
  );
}
export default App;
