import Expo from 'expo';
import React from 'react';
import { ProcessingView } from 'expo-processing';

const sketches = {
  xxiii: {
    title: 'Demo in 24 lines of code',
    description: `
(page xxiii)

Demonstration of what can be achieved in just 24 lines of code!`,
    sketch: (p) => {
      const drawPoint = (x, y, noiseFactor) => {
        p.pushMatrix();
        p.translate(x * noiseFactor * 4, y * noiseFactor * 4, -y);
        const edgeSize = noiseFactor * 26;
        p.ellipse(0, 0, edgeSize, edgeSize);
        p.popMatrix();
      }

      p.setup = () => {
        p.background(150);
        p.stroke(0, 50);
        p.fill(255, 200);
        const xstart = p.random(10);
        let ynoise = p.random(10);
        p.translate(p.width / 2, p.height / 2, 0);
        for (let y = -p.height / 8; y <= p.height / 8; y += 3) {
          ynoise += 0.02;
          let xnoise = xstart;
          for (let x = -p.width / 8; x <= p.width / 8; x += 3) {
            xnoise += 0.02;
            drawPoint(x, y, p.noise(xnoise, ynoise));
          }
        }
      }
    },
  },

  212: {
    title: '2.1.2. Hello world',
    description: `
(page 17)

A Processing.js "hello world" sketch. Shows the use of the 'ellipse' function.`,
    sketch: (p) => {
      p.ellipse(25, 25, 50, 50);
    },
  },

  221: {
    title: '2.2.1 Functions, parameters and color values',
    description: `
(page 20)

Demonstrates comments, functions, passing parameters and setting colors.`,
    sketch: (p) => {
      // setup and background
      p.smooth();
      p.background(230, 230, 230);

      // draw two crossed lines
      p.stroke(130, 0, 0);
      p.strokeWeight(4);
      p.line(p.width / 2 - 70, p.height / 2 - 70, p.width / 2 + 70, p.height / 2 + 70);
      p.line(p.width / 2 + 70, p.height / 2 - 70, p.width / 2 - 70, p.height / 2 + 70);

      // draw a filles circle too
      p.fill(255, 150);
      p.ellipse(p.width / 2, p.height / 2, 50, 50);
    },
  },
}

const sketchName = '221';

export default class App extends React.Component {
  render() {
    return (
      <ProcessingView
        style={{ flex: 1, marginTop: Expo.Constants.statusBarHeight }}
        sketch={sketches[sketchName].sketch}
      />
    );
  }
}
