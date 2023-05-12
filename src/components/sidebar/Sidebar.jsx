import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import BuildIcon from "@mui/icons-material/Build";
import ConstructionIcon from "@mui/icons-material/Construction";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { UserContext } from "../../App";

const Sidebar = () => {
  const { state, dispatch2 } = useContext(UserContext);
  const navigate = useNavigate()
  console.log(state)
  const { dispatch } = useContext(DarkModeContext);
  const handleLogout = () => {
    localStorage.clear();
    dispatch2({ type: "CLEAR" });
    navigate("/login");
  }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          {state?.role_name === 'officer' && <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>}
          {(state?.role_name === 'fabrication' || state?.role_name === 'officer' || state?.role_name === 'sub-assembly') && <Link to="/items" style={{ textDecoration: "none" }}>
            <li>
              <BuildIcon className="icon" />
              <span>Fabrication</span>
            </li>
          </Link>}
          {(state?.role_name === 'sub-assembly' || state?.role_name === 'officer' || state?.role_name === 'assembly') && <li>
            <Link to="/sub-assembly" style={{ textDecoration: "none" }}>
              <ConstructionIcon className="icon" />
              <span>Sub-Assembly</span>
            </Link>
          </li>}
          {(state?.role_name === 'assembly' || state?.role_name === 'officer') && <li>
            <Link to="/assembly" style={{ textDecoration: "none" }}>
              <LocalLaundryServiceIcon className="icon" />
              <span>Assembly</span>
            </Link>
          </li>}
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
          </li>
          <p className="title">THEME</p>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
