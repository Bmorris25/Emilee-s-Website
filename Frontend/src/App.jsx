import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar';
import './App.css';
import Home from '../components/home';
import Featured from '../components/featured';
import Footer from '../components/footer';
import Contact from "../components/contact";
import Services from '../components/services';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

