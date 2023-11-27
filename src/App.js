import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/ContactUs" element={<ContactUs/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
