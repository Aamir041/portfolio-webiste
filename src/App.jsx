import "./App.css"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
// import Home from "./components/Home/Home";
import Navbar from "./lib/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return <BrowserRouter>
  <div className="app">
      <Navbar />
      <div className="app-margin" style={{margin:"10rem"}}></div>
  </div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/contact" element={<Contact/>}/>
    
  </Routes>

    
  </BrowserRouter>
}

export default App;