import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BusinessIcon from '@mui/icons-material/Business';
import HotelIcon from '@mui/icons-material/Hotel';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        viewUrl: "/admin/users",
        createUrl: "/admin/users/new",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "hotel":
      data = {
        title: "HOTELS",
        isMoney: false,
        link: "View all hotels",
        viewUrl: "/admin/hotels",
        createUrl: "/admin/hotels/new",
        icon: (
          <BusinessIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "room":
      data = {
        title: "ROOMS",
        isMoney: true,
        link: "View all rooms",
        viewUrl: "/admin/rooms",
        createUrl: "/admin/rooms/new",
        icon: (
          <HotelIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    // case "balance":
    //   data = {
    //     title: "BALANCE",
    //     isMoney: true,
    //     link: "See details",
    //     icon: (
    //       <AccountBalanceWalletOutlinedIcon
    //         className="icon"
    //         style={{
    //           backgroundColor: "rgba(128, 0, 128, 0.2)",
    //           color: "purple",
    //         }}
    //       />
    //     ),
    //   };
    //   break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <Link to={data.viewUrl} style={{ textDecoration: "none" }}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <Link to={data.createUrl} style={{ textDecoration: "none" }}>
          <div className="percentage positive" >
            <AddIcon />
            Create New
          </div>
        </Link>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
