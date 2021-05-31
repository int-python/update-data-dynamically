import React from "react";
import { FaAngleDown } from "react-icons/fa";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <label className="card_checkLabel">
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <div className="card_main">
        <p className="card_mainText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="card_mainDrop">
          <button className="card_mainDropButton">
            Characters <FaAngleDown className="card_mainDropButtonIcon" />
          </button>
          <p className="card_mainDropNo">250</p>
        </div>
        <hr style={{ color: "#f6f6f6" }} />
        <div className="card_mainBottom">
          <div className="card_mainBottomLeft">
            <img
              src="./Assets/ic_content_copy_24px.png"
              alt=""
              className="card_mainBottomLeftImg"
            />
            <img
              src="./Assets/ic_edit_24px.png"
              alt=""
              className="card_mainBottomLeftImg"
            />
            <img
              src="./Assets/Group94.png"
              alt=""
              className="card_mainBottomLeftImg"
            />
            <img
              src="./Assets/ic_delete_-1.png"
              alt=""
              className="card_mainBottomLeftImg"
            />
          </div>
          <div className="card_mainBottomRight">
            <img
              src="./Assets/ic_collections_bookmark_-1.png"
              alt=""
              className="card_mainBottomRightImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
