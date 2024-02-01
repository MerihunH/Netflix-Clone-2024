import React from "react";
import "./Header.css";
import Netflix from "../../asset/image/Netflex.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={Netflix} alt="Netflix Log" width={100}></img>
              </li>
              <li>Home</li>
              <li>Tv Show</li>
              <li>Movies</li>
              <li>New and Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_left">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
