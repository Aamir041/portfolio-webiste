import "./App.css";
import About from "./components/About/About";
import BlogCard from "./components/BlogCard/BlogCard";
import Blogs from "./components/Bolgs/Blogs";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./lib/Footer/Footer";
// import Home from "./components/Home/Home";
import Navbar from "./lib/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
          <Navbar />
        <div className="app-upper-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blog/:blogId" element={<BlogCard/>} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <div className="app-footer-container">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
