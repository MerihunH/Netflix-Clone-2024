import React from "react";
import "../Footer/footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    // Footer outer container start
    <div className="footer_outer_container">
      {/* Footer inner container start */}
      <div className="footer_inner_container">
        {/* Footer icons start */}
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
          {/* Footer icons end */}
        </div>
        {/* Footer data start*/}
        <div className="foooter_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li> Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notices</li>
              <li>Do Not Sell or Share My Personal Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Git Card</li>
              <li>Netflix shop</li>
              <li>Cookies Preferences</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          {/* Footer data end*/}
        </div>
        <div className="service_code">
          <p>service code</p>
        </div>
        <div className="copy-write">&copy; 1997-2024 Netflix. inc.</div>
        {/* Footer inner container end */}
      </div>
      {/*Footer outer container end */}
    </div>
  );
};
export default Footer;
