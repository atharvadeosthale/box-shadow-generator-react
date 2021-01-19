import React from "react";
import "./BoxContainer.css";
// h-shadow v-shadow blur spread color |inset|initial|inherit

function BoxContainer({ x, y, blur, spread, color, inset }) {
  return (
    <div className="boxContainer">
      <div
        className="boxContainer__box"
        style={{
          boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color} `,
        }}
      >
        <textarea
          value={`box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};\n--webkit-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};\n--moz-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};\n`}
        ></textarea>
      </div>
    </div>
  );
}

export default BoxContainer;
