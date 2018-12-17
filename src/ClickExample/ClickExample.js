import React, { PureComponent } from "react";
import { Stage } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import CC from "../CC";


// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const OPTIONS = {
  backgroundColor: 0x1099bb,
};

// http://pixijs.io/examples/#/basics/click.js
class ClickExample extends PureComponent {
  state = {
    scale: 1,
  };

  handleClick = () => {
    this.setState(state => ({ ...state, scale: state.scale * 1.25 }));
  };

  render() {
    console.log(this.props)
    return (
      <Stage width={800} height={600} options={OPTIONS}>
        <CC />
      </Stage>
    );
  }
}

export default ClickExample;
