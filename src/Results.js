import React from 'react';
import './style.css';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { Html } from 'react-konva-utils';
import React, { Component } from 'react';
import { TextField, Button } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';

class Results extends Component {
  render() {
    return (
      <Stage Stage width={screen.width} height={screen.height}>
        <Layer>
          <Text
            x={415}
            y={170}
            fontSize={20}
            fill="white"
            fontStyle="bold"
            text="Recipe Results"
            verticalAlign="middle"
          />

          <Rect
            x={30}
            y={205}
            width={screen.width - 60}
            height={screen.height - 255}
            fill="#A0a0a0"
            cornerRadius={7}
          />

          <Rect
            x={60}
            y={235}
            width={screen.width - 120}
            height={screen.height - 315}
            fill="#b3d5ff"
            shadowColor="#585858"
            shadowBlur={10}
            shadowOffset={[10, 10]}
            cornerRadius={7}
          />

          <Html>
            <div
              style={{
                marginLeft: 90,
                marginTop: 250,
                width: screen.width - 120,
                height: screen.height - 215,
                cornerRadius: 7,
              }}
            >
              <Scrollbars style={{ width: screen.width - 170, height: 360 }}>
                <div
                  style={{
                    backgroundColor: '#77b4ff',
                    borderRadius: 7,
                    width: 1090,
                    height: 170,
                  }}
                >
                  <p style={{ marginLeft: 50 }}>sample content 1</p>
                </div>
                <div
                  style={{
                    backgroundColor: '#77b4ff',
                    borderRadius: 7,
                    width: 1090,
                    height: 170,
                  }}
                >
                  <p style={{ marginLeft: 50 }}>sample content 2</p>
                </div>
                <div
                  style={{
                    backgroundColor: '#77b4ff',
                    borderRadius: 7,
                    width: 1090,
                    height: 170,
                  }}
                >
                  <p style={{ marginLeft: 50 }}>sample content 3</p>
                </div>
                <div
                  style={{
                    backgroundColor: '#77b4ff',
                    borderRadius: 7,
                    width: 1090,
                    height: 170,
                  }}
                >
                  <p style={{ marginLeft: 50 }}>sample content 4</p>
                </div>
                <div
                  style={{
                    backgroundColor: '#77b4ff',
                    borderRadius: 7,
                    width: 1090,
                    height: 170,
                  }}
                >
                  <p style={{ marginLeft: 50 }}>sample content 5</p>
                </div>
              </Scrollbars>
            </div>
          </Html>

          <Html>
            <div
              style={{
                marginLeft: 30,
                marginTop: 160,
                width: 100,
                height: 40,
                cornerRadius: 7,
              }}
            >
              <Button variant="contained">← Back</Button>
            </div>
          </Html>
        </Layer>
      </Stage>
    );
  }
}

export default Results;
