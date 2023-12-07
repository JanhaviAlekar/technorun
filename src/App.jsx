import './App.css'
import  { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Payments from './pages/Payments/Payments'
import RegisterForm from './components/RegisterForm/RegisterForm'
import CashPrice from './pages/CashPrice'
import PageNotFound from './pages/PageNotFound'
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess'
import { useEffect } from 'react'
import UserContextProvider from './context/userContexrProvider'
import Tutorial from './pages/Tutorial/Tutorial'
import ContactUs from './pages/Details/ContactUs'
import TermsAndConditions from './pages/Details/TermsAndCondition'
import PrivacyPolicy from './pages/Details/PrivacyPolicy'

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  useEffect(() => {
    console.log('App component mounted');
    return () => {
      console.log('App component unmounted');
    };
  }, []); 

  return (
    !loading && (
    <UserContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/cash-price" element={<CashPrice/>}/>
      <Route path="/payments" element={<Payments/>} />
      <Route path="/payments-success" element={<PaymentSuccess/>} />
      <Route path="/tutorial" element={<Tutorial/>} /> 
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/TermsandConditions" element={<TermsAndConditions/>}/>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
      <Route path="*" element={<PageNotFound/>} />    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </UserContextProvider>
    )
  );
}
export default App;
