import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessIcon from '@mui/icons-material/Business';
import HotelIcon from '@mui/icons-material/Hotel';
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { Dispatch } = useContext(DarkModeContext);

  return (
    <div className="AdminNavbar">
      <div className="wrapper">
        <div className="brand">
          <Link to="/admin" style={{ textDecoration: "none"}}>
            <span className="logo">Booking Admin</span>
          </Link>
        </div>
        <div className="items">
          <div className="item" onClick={() => Dispatch({ type: "TOGGLE" })}>
            <DarkModeOutlinedIcon
              className="icon"
            />
            <span>Toggle Mode</span>
          </div>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <div className="item">
              <PeopleAltIcon className="icon" />
              <span>Users</span>
            </div>
          </Link>
          <Link to="/admin/hotels" style={{ textDecoration: "none" }}>
            <div className="item">
              <BusinessIcon className="icon" />
              <span>Hotels</span>
            </div>
          </Link>
          <Link to="/admin/rooms" style={{ textDecoration: "none" }}>
            <div className="item">
              <HotelIcon className="icon" />
              <span>Rooms</span>
            </div>
          </Link>
          
          {/* <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
