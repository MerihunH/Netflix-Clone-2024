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
      {/* Header outer container start*/}
      <div className="header_outer_container">
        {/* Header container start*/}
        <div className="header_container">
          {/* Header left start */}
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
            {/* Header left end */}
          </div>
          {/* Header right start */}
          <div className="header_Right">
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
            {/* Header right end */}
          </div>
          {/*  Header container end here*/}
        </div>
        {/*Header outer container  end here*/}
      </div>
    </>
  );
};
export default Header;
