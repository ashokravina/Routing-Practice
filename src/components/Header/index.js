// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <li className="hedaer-container">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
              className="logo"
            />
            <h1 className="logo-heading">Wave</h1>
          </div>
          <ul className="header-list">
            <Link className="list-name" to="/home">
              Home
            </Link>
            <Link className="list-name" to="/about">
              About
            </Link>
            <Link className="list-name" to="/contact">
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </li>
  )
}
export default Header
