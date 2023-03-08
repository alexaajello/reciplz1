import React from 'react';
import './style.css';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { Html } from 'react-konva-utils';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <Stage Stage width={screen.width} height={screen.height}>
        <Layer>
          <Text
            x={370}
            y={50}
            fontSize={40}
            letterSpacing={8}
            fill="white"
            fontStyle="bold"
            text="RECIPLZ"
          />

          <Html>
            <div style={{ marginLeft: 750, marginTop: 17, width: 80 }}>
              <img src="reciplzLogo.png" width={80} />
              <appTitle />
            </div>
          </Html>

          <Text
            x={30}
            y={100}
            fontSize={15}
            fill="white"
            text="Just describe what you want to eat!"
          />

          <Line
            points={[0, 130, screen.width, 130]}
            stroke="white"
            strokeWidth={0.5}
          />
          <Circle x={465} y={140} radius={2} fill="white" />
          <Circle x={483} y={140} radius={2} fill="white" />
          <Circle x={501} y={140} radius={2} fill="white" />
          <Line
            points={[0, 150, screen.width, 150]}
            stroke="white"
            strokeWidth={0.5}
          />

          <Line
            points={[0, 530, window.width, 530]}
            stroke="white"
            strokeWidth={0.5}
          />
        </Layer>
      </Stage>
    );
  }
}

export default Header;
