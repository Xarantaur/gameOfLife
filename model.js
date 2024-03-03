 // creatGrid funktionen. den laver grid baseret på defineret height og width
export function createGrid(GRID_WIDTH, GRID_HEIGHT) {
  const grid = [];
  for (let i = 0; i < GRID_HEIGHT; i++) {
    const row = [];

    for (let j = 0; j < GRID_WIDTH; j++) {
      const isAlive = Math.random() < 0.15 ? 1 : 0;  // tager 15% af alle celler og sætter dem til alive fra start af.
      row.push(isAlive);
    }

    grid.push(row);
  }
  return grid;
}

// funktion der finder de næste levende celler. 
export function calculateNextGeneration(grid) {
  const nextGeneration = [];  // laver en next generation placeholder
  for (let i = 0; i < grid.length; i++) {  // går igennem griddet vi har fået med som parameter
    const row = []; // laver nye rows
    for (let j = 0; j < grid[i].length; j++) { // går igennem cols fra grid vi har fået med som parameter
      const neighbors = countNeighbors(grid, i, j); // for hver celle bliver der talt naboer.
      if (grid[i][j] === 1) { // her implemebtere vi spillets regler
        if (neighbors < 2 || neighbors > 3) { // hvis der er mindre en 2 og mere end 3 naboer så dør cellen af under /over population
          row.push(0); 
        } else {
          row.push(1); // ellers lever cellen
        }
      } else { // eller
        if (neighbors === 3) {  // hvis cellen har 3 naboer så 
          row.push(1);  // bliver den ved med at leve
        } else { // hvis den ikke har dette så dør den
          row.push(0);
        }
      }
    }
    nextGeneration.push(row); // så skubber den det row ind i nextGeneration placeholderen.
  }
  return nextGeneration; 
}

// funkton der tæller naboer
export function countNeighbors(grid, x, y) {
  const directions = [  // sæter retningerne for at tælle
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let count = 0;  
  for (const [dx, dy] of directions) { 
    const newX = x + dx;
    const newY = y + dy;
    if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && !(dx === 0 && dy === 0)) {
      count += grid[newX][newY];
    }
  }
  return count;
}
