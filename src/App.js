import P5Wrapper from 'react-p5-wrapper';

function App() {
  let sketch = (p5) => {
    let yoff = 0.0;

    p5.setup = () => {
      p5.createCanvas(710, 400);
    }

    p5.draw = () => {
      p5.background(51);
      p5.fill(255);
      p5.beginShape();
      let xoff = 0;

      for (let x = 0; x <= p5.width; x += 10) {
        let y = p5.map(p5.noise(xoff, yoff), 0, 1, 200, 300);
        p5.vertex(x, y);
        xoff += 0.05;
      }

      yoff += 0.01;
      p5.vertex(p5.width, p5.height);
      p5.vertex(0, p5.height);
      p5.endShape(p5.CLOSE);
    }
  }
  return (
    <P5Wrapper sketch={sketch} />
  );
}

export default App;
