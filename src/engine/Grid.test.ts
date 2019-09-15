import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { Cell } from "./Cell";
import { Game } from "./Game";

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration;

  it("should have five apples present", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples();

    expect(apples.length).toBe(5);
  });
  it("should report if apples inside", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples()[0];

    expect(grid.isAppleInside(apples)).toBe(true);
    expect(grid.isAppleInside(new Cell(99, 99))).toBe(false);
  });
  it("apples should disapear", () => {
    const grid = new Grid(configuration);

    const apple = grid.getApples()[0];
    grid.removeApple(apple)

    expect(grid.isAppleInside(apple)).toBe(false);
    expect(grid.getApples().length).toBe(4);
  });
  it("level up", () => {
    const game = new Game(configuration)
    
    const apple = game.getGrid().getApples()[4];
    game.getGrid().removeApple(apple)
    game.getGrid().removeApple(apple)
    game.getGrid().removeApple(apple)
    game.getGrid().removeApple(apple)
    game.getGrid().removeApple(apple)
    game.levelUp() 
    expect(game.getGrid().isAppleInside(apple)).toBe(false);
    expect(game.getGrid().getApples().length).toEqual(5);
    
  });
  it("should seed new apples", () => {
    const game = new Game(configuration)
    
    const apple = game.getGrid().getApples()[4];
    game.getGrid().removeApple(apple)
    game.getGrid().removeApple(apple)
    game.getGrid().removeApple(apple)
    game.getGrid().removeApple(apple)
    game.getGrid().removeApple(apple)
    game.getGrid().seed() 
    
    expect(game.getGrid().getApples().length).toEqual(5);
    
  });
  
});
