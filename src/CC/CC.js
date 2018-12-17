import React, { PureComponent } from "react";
import { Container } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import Bunny from "../Bunny";

const centerAnchor = new PIXI.Point(0.5, 0.5);

class CC extends PureComponent {
  render(){
    const { test } = this.props
    console.log("test", test)
    return (
      <Container>
        <Bunny
          // Shows hand cursor
          buttonMode
          // Opt-in to interactivity
          interactive
          // Pointers normalize touch and mouse
          x={400}
          y={300}
        />
      </Container>
    )
  }
}

export default CC;
