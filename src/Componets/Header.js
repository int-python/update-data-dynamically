import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header_left">
          <div className="header_leftText">
            <p className="header_leftTextTop">Save & Exit</p>
            <p className="header_leftTextBottom">
              All changes saved at 22:00pm
            </p>
          </div>
        </div>
        <div className="header_middle">
          <p className="header_middleHeading">Untitled-1</p>
        </div>
        <div className="header_right">
          <a href="" className="header_rightBUtton">
            Amazon Product Description
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
