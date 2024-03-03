import * as model from "./model.js";
import * as view from "./view.js";

export const GRID_WIDTH = 50;
export const GRID_HEIGHT = 50;

// starter spillet
function startGame() {
  // laver grid ud fra diminensioner
  let grid = model.createGrid(GRID_WIDTH, GRID_HEIGHT);

  // laver view
  view.renderGrid(grid);
  // sætter et interval count til 1 sekund for at kalkulere den næste generation
  const intervalId = setInterval(() => {
    grid = model.calculateNextGeneration(grid);
    view.renderGrid(grid);
  }, 1000);

  return intervalId;
}
// starter spillet on load
window.addEventListener("load", () => {
  startGame();
});
