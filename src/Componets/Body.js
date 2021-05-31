import React from "react";
import "./Body.css";
import { FaAngleLeft } from "react-icons/fa";
import Bar from "./Bar";
import Card from "./Card";

function Body() {
  const LimitedTextarea = ({ rows, cols, value, limit }) => {
    const [content, setContent] = React.useState(value.slice(0, limit));

    const setFormattedContent = React.useCallback(
      (text) => {
        setContent(text.slice(0, limit));
      },
      [limit, setContent]
    );

    return (
      <>
        <textarea
          className="cutomTextarea"
          onChange={(event) => setFormattedContent(event.target.value)}
          value={content}
        />
        <p className="content_length">
          {content.length}/{limit}
        </p>
        <Bar done={`${content.length}` / 10} />
      </>
    );
  };

  return (
    <div className="body">
      <div className="left">
        <input type="checkbox" name="" id="side-menu-switch" />
        <div className="side-menu">
          <div className="side-menuOpen">
            <div className="side-menuHead">
              <p className="side-menuHeadText">Enter Details</p>
              <img
                src="./Assets/Group90.png"
                alt=""
                className="side-menuHeadImg"
              />
            </div>
            <LimitedTextarea
              limit={1000}
              value="Product Description you can enter new description and see your content length and see your graphical output also"
            />
            <div className="side-menuOpenInGrp">
              <input
                type="text"
                className="side-menuOpenInput"
                placeholder="Keywords (3-5 Recommended, Comma Separated) "
              />
              <img
                src="./Assets/Group91.png"
                alt=""
                className="side-menuOpenInputImg"
              />
            </div>
            <input
              type="text"
              className="side-menuOpenInput"
              placeholder="Keywords to Avoid (3-5 Recommended, Comma Separated) "
            />
            <button className="side-menuOpenButton">Generate</button>
          </div>
          <div className="side-menuClose">
            <div className="side-menuCloseText">
              <div>Enter</div>
              <div>&nbsp;Details</div>
            </div>
          </div>
          <label for="side-menu-switch">
            <FaAngleLeft className="side-menu-switchIcon" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="right_header">
          <div className="right_headerLeft">
            <label for="select_all" className="right_headerLeftCheckboxLabel">
              Select All
            </label>
            <input
              className="right_headerLeftCheckbox"
              type="checkbox"
              id="select_all"
            />
          </div>
          <div className="right_headerRight">
            <img
              src="./Assets/ic_collections_bookmark_24px.png"
              alt=""
              className="right_headerRightImg"
            />
            <img
              src="./Assets/ic_delete_24px.png"
              alt=""
              className="right_headerRightImg"
            />
            <div className="right_headerRightVerticalLine" />
            <img
              src="./Assets/ic_share_24px.png"
              alt=""
              className="right_headerRightImg"
            />
            <img
              src="./Assets/ic_file_download_24px.png"
              alt=""
              className="right_headerRightImg"
            />
          </div>
        </div>
        <hr style={{ color: "#f6f6f6" }} />
        <div className="right_body">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Body;
