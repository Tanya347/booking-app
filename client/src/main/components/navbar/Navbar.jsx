import './navbar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className='navContainer'>
            <nav className='navbar'>
                <Link to="/">
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + "/Assets/brand.png"} alt="" />
                    </div>
                </Link>
                <input type="checkbox" id='click' />
                <label htmlFor="click" className='menu-btn' >
                    <FontAwesomeIcon icon={faBars} className="icon" />
                </label>
                {
                    user ?
                        (<><ul style={{ paddingLeft: "0px" }}>
                            <li><button onClick={handleClick}>Logout</button></li>
                        </ul>
                        </>)
                        : (<>
                            <ul style={{ paddingLeft: "0px" }}>
                                <li><button>Register</button></li>
                                <Link to="/login">
                                    <li><button>Login</button></li>
                                </Link>
                                <Link to="admin/login">
                                    <li><button>Admin</button></li>
                                </Link>
                            </ul>
                        </>)}
            </nav>
        </div >
    )
}

export default Navbar