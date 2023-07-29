import "./Navbar.css"
import aamir from "../../assets/aamir.jpg"
import tick from "../../assets/tick.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    return<div className="navbar">
        <div className="nav-container">
            <div className="nav-brand">
                <img className="logo" src={aamir} alt="" />
                <h3 className="name">Aamir Saudagar</h3>
            </div>
            <div className="nav-items">
                <nav className="nav-links">
                    <ul className="nav-list">
                        <li className="item"> <a className="item-link active">01 House</a> </li>
                        <li className="item"> <a className="item-link">02 About</a> </li>
                        <li className="item"> <a className="item-link">03 Project</a> </li>
                        <li className="item"> <a className="item-link">04 Contact</a> </li>
                    </ul>
                </nav>
            </div>
        </div>
        
    </div>
}

export default Navbar;