import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;
  apples = [
    new Cell(Math.floor(Math.random()*80), Math.floor(Math.random()*40)),
    new Cell(Math.floor(Math.random()*80), Math.floor(Math.random()*40)),
    new Cell(Math.floor(Math.random()*80), Math.floor(Math.random()*40)),
    new Cell(Math.floor(Math.random()*80), Math.floor(Math.random()*40)),
    new Cell(Math.floor(Math.random()*80), Math.floor(Math.random()*40))
  ];
  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void {
    for (let count = 0;  count < 5; count++) {
      let x = Math.floor(Math.random() * 80);
      let y = Math.floor(Math.random() * 40); 
      this.apples.push(new Cell(x, y));
  }
    
  }

  isAppleInside(cell: Cell): boolean {
    return this.apples.find(apple =>apple.x === cell.x && apple.y === cell.y) !== undefined
  }

  removeApple(cell: Cell): void {
    
    const apple = this.apples.find(apple =>apple.x === cell.x && apple.y === cell.y)!
    const i = this.apples.indexOf(apple)
    this.apples.splice(i,1)
  }

  isDone(): boolean {
    return this.apples.length == 0;
  }

  getApples(): Cell[] {
    return this.apples
  }
}
