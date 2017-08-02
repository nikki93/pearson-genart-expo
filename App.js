import React from 'react';
import { ProcessingView } from 'expo-processing';

const sketchXXIII = (p) => {
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
}

export default class App extends React.Component {
  render() {
    return (
      <ProcessingView style={{ flex: 1 }} sketch={sketchXXIII} />
    );
  }
}
