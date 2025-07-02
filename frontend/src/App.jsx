import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/NavBar';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Testimonal from './pages/Testimonal';
import Service from './pages/Service';
import Contact from './pages/Contact';
// import HowItWorks from './pages/How_its_work';
// import GetQuoteForm from './pages/Get_Quote';
import Admin from './pages/Admin';
import LoginPage from './pages/Login';
import BlogUpdate from './pages/BlogUpdate'
import WhatsApp from './component/Whatsapp';
 
const App = () => {
  return (
    <>
      <WhatsApp />



 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Testimonal" element={<Testimonal />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/How_its_work" element={<HowItWorks />} /> */}
        {/* <Route path="/Get_Quote" element={<GetQuoteForm />} /> */}
        <Route path="/AdminApi_key!234csacsybaybAbBbbncuuu25686wddby" element={<Admin />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path='/BlogUpdate' element={<BlogUpdate />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
