import * as PIXI from 'pixi.js';
import {AsciiFilter} from '@pixi/filter-ascii';
import {CRTFilter} from '@pixi/filter-crt';
import Branch from './branch';

function generateSeedFromUsername(string) {
  let asciiNumbers = [];
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    asciiNumbers.push(charCode);
  }

  let integer = parseInt(asciiNumbers.join(''), 10);
  while (integer >= Number.MAX_SAFE_INTEGER/2) {
    integer = integer/2
  }

  return integer;
}

class Tree {
  constructor(app, seed, size, x, y) {
    this.app = app
    this.x = x;
    this.y = y;
    this.seed = generateSeedFromUsername(seed);
    this.maxSize = size+1;
    this.currentSize = 1;

    this.container = new PIXI.Container();
    this.container.filters = [
      new CRTFilter({
        lineWidth: 24,
        lineContrast: 0.35,
        vignetting: 0.4,
        vignettingAlpha: 0.5,
        vignettingBlur: 0.3
      }),
      new AsciiFilter(7)
    ];
    this.app.stage.addChild(this.container);
    this.graphics = new PIXI.Graphics();
    this.container.addChild(this.graphics);
    this.app.ticker.add(this.update.bind(this));

    this.create();
  }

  create() {
    this.plant = new Branch(this.graphics, this.seed, this.x, this.y, 0, true);
  }

  update() {
    if(this.currentSize < this.maxSize) {
      this.currentSize *= 1.025;
      this.plant.grow();
      this.graphics.clear();
      this.plant.render();
    }
  }

  downloadAsPng() {
    this.app.renderer.plugins.extract.canvas(this.container).toBlob(function (b) {
      var a = document.createElement("a");
      document.body.append(a);
      a.download = `contributree.png`;
      a.href = URL.createObjectURL(b);
      a.click();
      a.remove();
    }, "image/png");
  }

  destroy() {
    this.graphics.clear();
    this.app.stage.removeChild(this.container);
  }
}

export function createTree({canvas, seed, size, canvasWidth, canvasHeight}) {
  // Create the canvas
  const app = new PIXI.Application({
    antialias: false,
    width: canvasWidth,
    height: canvasHeight,
    backgroundAlpha: 0,
  });

  canvas.appendChild(app.view);

  const tree = new Tree(app, seed, size, canvasWidth/2, canvasHeight);

  return { app, tree };
}