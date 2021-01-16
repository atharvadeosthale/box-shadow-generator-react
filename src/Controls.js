import { Slider } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { SketchPicker } from "react-color";
import BoxContainer from "./BoxContainer";
import "./Controls.css";

function Controls() {
  const [x, setX] = useState(4);
  const [y, setY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000");
  return (
    <Fragment>
      <div className="controls">
        <h1>Box Shadow Generator</h1>
        <div className="controls__group">
          X:{" "}
          <Slider
            value={x}
            onChange={(e, val) => setX(val)}
            min={-200}
            max={200}
            className="controls__slider"
            style={{ width: 200, marginLeft: 20 }}
          />
          <input
            type="text"
            value={x}
            className="controls__showValueBox"
            disabled
          />
        </div>
        <div className="controls__group">
          Y:{" "}
          <Slider
            value={y}
            onChange={(e, val) => setY(val)}
            min={-200}
            max={200}
            className="controls__slider"
            style={{ width: 200, marginLeft: 20 }}
          />
          <input
            type="text"
            value={y}
            className="controls__showValueBox"
            disabled
          />
        </div>
        <div className="controls__group">
          Blur:{" "}
          <Slider
            value={blur}
            onChange={(e, val) => setBlur(val)}
            min={-200}
            max={200}
            className="controls__slider"
            style={{ width: 200, marginLeft: 20 }}
          />
          <input
            type="text"
            value={blur}
            className="controls__showValueBox"
            disabled
          />
        </div>
        <div className="controls__group">
          Spread:{" "}
          <Slider
            value={spread}
            onChange={(e, val) => setSpread(val)}
            min={-200}
            max={200}
            className="controls__slider"
            style={{ width: 200, marginLeft: 20 }}
          />
          <input
            type="text"
            value={spread}
            className="controls__showValueBox"
            disabled
          />
        </div>
        <div className="controls__group">
          <SketchPicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </div>
      </div>
      <BoxContainer x={x} y={y} spread={spread} blur={blur} color={color} />
    </Fragment>
  );
}

export default Controls;
