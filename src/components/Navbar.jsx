import { Link } from "react-router-dom";
import "../css/Navbar.css"

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="brand-link">
            <img src="/logo2.png" alt="" className="logo" /></Link>

        </div>
        <div className="navbar-links">
            <Link to ="/home" className="nav-links">Home</Link>
            <Link to ="/favorites" className="nav-links">Favorites</Link>


        </div>
    </nav>
}

export default Navbar