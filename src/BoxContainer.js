import React from "react";
import "./BoxContainer.css";
// h-shadow v-shadow blur spread color |inset|initial|inherit

function BoxContainer({ x, y, blur, spread, color, inset }) {
  return (
    <div className="boxContainer">
      <div
        className="boxContainer__box"
        style={{ boxShadow: `1px 1px 5px 5px black` }}
      >
        {/* Add CSS Code */}
      </div>
    </div>
  );
}

export default BoxContainer;
