import React from "react";
import "./footer.css";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <a onClick={handleClick}>
        <div className="footer__backToTop">
          <span className="footer__backToTopText" >Back to top</span>
        </div>
      </a>

      <div className="footer__verticalRow">
        <div className="footer__verticalCol">
          <div className="footer__verticalColHead">Get to Know Us</div>
          <ul>
            <li>About US</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a smile</li>
          </ul>
        </div>
        <div className="footer__verticalCol">
          <div className="footer__verticalColHead">Connect with us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer__verticalCol">
          <div className="footer__verticalColHead">Make Money with Us</div>
          <ul>
            <li>Sell on Amazon Clone</li>
            <li>Sell under Amazon Clone Accelaor</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer__verticalCol">
          <div className="footer__verticalColHead">Connect with us</div>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer__line">
        <img
          className="footer__lineLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <span className="footer__lineMessage">
          Amazon clone developed by
          <a href="https://github.com/rishav-learnerml" target="_blank" className="rishav">
          &copy;{" "}Rishav Chatterjee
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
