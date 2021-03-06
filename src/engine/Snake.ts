import { Cell } from "./Cell";
import { Direction } from "./Direction";
import { summarizers } from "istanbul-lib-report";

export class Snake {
head = new Cell(2, 0); 
tail = [new Cell(0, 0), new Cell(1, 0)];
old_direction: Direction = 'Down'
direction: Direction = 'Right'
tailSize = 2



  setDirection(direction: Direction) {
    if (this.direction === 'Right' && direction === 'Left') {
      this.direction = this.direction
    }else if (this.direction === 'Left' && direction === 'Right') {
      this.direction = this.direction
    }else if (this.direction === 'Up' && direction === 'Down') {
      this.direction = this.direction
    }else if (this.direction === 'Down' && direction === 'Up') {
      this.direction = this.direction
    } else
			this.direction = direction;
  }

  move() {

    this.tail.push(this.head)

    if(this.tailSize < this.tail.length) {
      this.tail.shift()
    }
    
    
    switch(this.direction) {
     
      case 'Right':
          this.head = new Cell(this.head.x + 1, this.head.y)
          break
      case 'Down':
          this.head = new Cell(this.head.x, this.head.y + 1)
          break
      case 'Up':
          this.head = new Cell(this.head.x, this.head.y - 1)
          break
      case 'Left':
          this.head = new Cell(this.head.x -1, this.head.y)
          break
    }
  }

  grow() {
    this.tailSize += 3
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell) {
    return this.tail.find(el => cell.x == el.x && cell.y == el.y);
    //return false;
  }

  getDirection(): Direction {

    return this.direction
  }

  getTail(): Cell[] {
    return this.tail;
  }
  
 
}
