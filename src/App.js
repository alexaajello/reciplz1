import React from 'react';
import './style.css';
import Header from './Header.js';
import Home from './Home.js';
import { Stage, Layer } from 'react-konva';
import { Html } from 'react-konva-utils';
import { useRef } from 'react';
import Results from './Results.js';

export default function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <Stage Stage width={screen.width} height={screen.height}>
      <Layer>
        <Html>
          <Header />
        </Html>

        <Html>
          <Home />
        </Html>
      </Layer>
    </Stage>
  );
}
