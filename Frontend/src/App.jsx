import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar';
import './App.css';
import Home from '../components/home';
import Featured from '../components/featured';
import Footer from '../components/footer';
import Contact from "../components/contact";
import Services from '../components/services';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/featured" element={<Featured />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

