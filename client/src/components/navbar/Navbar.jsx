import './navbar.css'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <div className='navContainer'>
            <nav className='navbar'>
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + "/Assets/brand.png"} alt="" />
                </div>
                <input type="checkbox" id='click' />
                <label htmlFor="click" className='menu-btn'>
                    <FontAwesomeIcon icon={faBars} className="icon" />
                </label>
                <ul style={{ paddingLeft: "0px" }}>
                    <li><button>Register</button></li>
                    <li><button>Login</button></li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar