import React from "react";
import "./BoxContainer.css";
// h-shadow v-shadow blur spread color |inset|initial|inherit

function BoxContainer({ x, y, blur, spread, color, inset }) {
  return (
    <div className="boxContainer">
      <div
        className="boxContainer__box"
        style={{ boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color}` }}
      >
        {/* Add CSS Code */}
      </div>
    </div>
  );
}

export default BoxContainer;
