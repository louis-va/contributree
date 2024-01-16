import seedrandom from 'seedrandom';

const COLOR_PINK = '0xFF00C7'
const COLOR_RED = '0xFF002F'
const COLOR_ORANGE = '0xFF6B00'
const COLOR_YELLOW = '0xFFF400'
const COLOR_GREEN = '0x05FF00'
const COLOR_TURQUOISE = '0x00FFD1'
const COLOR_BLUE = '0x1790FF'
const COLOR_MAUVE = '0x7351FD'
const COLOR_PURPLE = '0xC316FF'
const COLORS = [COLOR_PINK, COLOR_RED, COLOR_ORANGE, COLOR_YELLOW, COLOR_GREEN, COLOR_TURQUOISE, COLOR_BLUE, COLOR_MAUVE, COLOR_PURPLE]

const MIN_LEAF_SIZE = 5
const MAX_LEAF_SIZE = 20

export default class Leaf {
  constructor(graphics, seed, x, y) {
    this.graphics = graphics
    this.seed = seed
    this.x = x
    this.y = y
    this.coordinates = {}
    this.color = this.selectColor()
    this.direction = (this.randomInt(1,2)%2==0) ? 'left' : 'right'
    this.growth = 0
    this.maxGrowth = this.randomInt(MIN_LEAF_SIZE, MAX_LEAF_SIZE)
    this.createLeaf()
  }

  selectColor() {
    const seedArray = String(this.seed).split("").map(Number)
    const seedFirstNumber = (seedArray[0] + seedArray[1])%9
    const seedSecondNumber = (seedArray[1] + seedArray[2])%9
    const THEME = [COLORS[seedFirstNumber], COLORS[seedSecondNumber]]
    return THEME[this.randomInt(1,2)-1]
  }

  randomInt(min, max) {
    let srng = seedrandom(this.seed)()
    let randomInt = Math.floor(srng * (max+1 - min) + min);
    this.seed++
    return randomInt
  }

  createLeaf() {
    this.coordinates.startX = this.x
    this.coordinates.startY = this.y
    this.coordinates.endX = (this.direction=='right') ? this.x+this.randomInt(7,15) : this.x-this.randomInt(7,15)
    this.coordinates.endY = this.y+this.randomInt(-10,10)
    this.coordinates.curveTopX = (this.direction=='right') ? this.x+this.randomInt(0,10) : this.x-this.randomInt(0,10)
    this.coordinates.curveTopY = this.y-this.randomInt(3,7)
    this.coordinates.curveBottomX = (this.direction=='right') ? this.x+this.randomInt(0,10) : this.x-this.randomInt(0,10)
    this.coordinates.curveBottomY = this.y+this.randomInt(3,7)
  }

  grow() {
    if (this.growth < this.maxGrowth && this.randomInt(1,5)==1) {
      this.coordinates.endX += (this.direction=='right') ? this.randomInt(1,3) : this.randomInt(-3,-1)
      this.coordinates.endY += this.randomInt(-1,1)
      this.coordinates.curveTopX += (this.direction=='right') ? this.randomInt(0,1) : this.randomInt(-1,0)
      this.coordinates.curveTopY += this.randomInt(1,2)
      this.coordinates.curveBottomX += (this.direction=='right') ? this.randomInt(0,1) : this.randomInt(-1,0)
      this.coordinates.curveBottomY += this.randomInt(-2,-1)
      this.growth++
    }
  }

  render() {
    this.graphics.lineStyle({
      width: 0
    })
    this.graphics.beginFill(this.color, 1);

    this.graphics.moveTo(this.coordinates.startX, this.coordinates.startY)
    this.graphics.quadraticCurveTo(this.coordinates.curveTopX, this.coordinates.curveTopY, this.coordinates.endX, this.coordinates.endY);
    this.graphics.moveTo(this.coordinates.startX, this.coordinates.startY)
    this.graphics.quadraticCurveTo(this.coordinates.curveBottomX, this.coordinates.curveBottomY, this.coordinates.endX, this.coordinates.endY);
  }
}