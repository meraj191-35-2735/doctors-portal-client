import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div style={{ background: `url(${footerBg})`, backgroundSize: "cover" }}>
      <footer class="footer p-10 mt-20">
        <div>
          <span class="footer-title">Services</span>
          <Link to="/about">Branding</Link>
          <Link to="/about">Design</Link>
          <Link to="/about">Marketing</Link>
          <Link to="/about">Advertisement</Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to="/home">About us</Link>
          <Link to="/home">Contact</Link>
          <Link to="/home">Jobs</Link>
          <Link to="/home">Press kit</Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to="/contactus">Terms of use</Link>
          <Link to="/contactus">Privacy policy</Link>
          <Link to="/contactus">Cookie policy</Link>
        </div>
      </footer>
      <div className="text-center py-3 mb-0">
        <p>Copyright © 2022 - All right reserved by Meraj</p>
      </div>
    </div>
  );
};

export default Footer;
