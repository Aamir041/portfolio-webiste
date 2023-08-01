import "./App.css"
import Home from "./components/Home/Home";
// import Home from "./components/Home/Home";
import Navbar from "./lib/Navbar/Navbar";
const App = () => {
  return<div className="app">
    <Navbar/>
    <Home/>
  </div>
}

export default App;