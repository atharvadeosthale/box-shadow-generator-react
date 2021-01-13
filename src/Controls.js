import { Slider } from "@material-ui/core";
import React from "react";
import "./Controls.css";

function Controls() {
  return (
    <div className="controls">
      <h1>Box Shadow Remover</h1>
      <div>
        X: <Slider value={0} />
      </div>
    </div>
  );
}

export default Controls;
