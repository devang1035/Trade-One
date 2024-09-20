import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Logout } from "./Logout";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Menu = ({username}) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    
      const handleLogout = () => {
      Logout(navigate, removeCookie);  
    }

 
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="./TradeOne.png" style={{ width: "50px" ,cursor:"pointer" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none", cursor:"pointer" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none",cursor:"pointer" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", cursor:"pointer" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none",cursor:"pointer" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" , cursor:"pointer"}}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
        </ul>
        <Stack direction="row" spacing={2}>
        <Button variant="contained"  onClick={handleLogout}>Logout</Button>
        </Stack>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{ username.charAt(0)}</div>
          <p className="username">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
