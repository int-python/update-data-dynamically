import React, { useState } from "react";
import "./Bar.css";

function Bar({ done }) {
  const [style, setStyle] = useState({});

  const [type, setType] = useState("");

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  });

  return (
    <div>
      <div className="bar">
        <div className="bar_done" style={style}>
          <div className="bar_doneData">{`${done}` * 10}</div>
        </div>
      </div>
      <p className="datatype">Poor</p>
    </div>
  );
}

export default Bar;
