import * as controller from "/controller.js";

export function renderGrid(grid) {
  // manifester grid-containeren i JS 
  const gridContainer = document.getElementById("grid-container");
  gridContainer.style.setProperty("--GRID_WIDTH", controller.GRID_WIDTH);  // tager fat i manifest og sætter dens style til --GRID_WIDTH

 // tømmer containeren inner HTML 
  gridContainer.innerHTML = "";

   // looper igennem arrays :
  for (let i = 0; i < grid.length; i++) {
    // laver nye rows
    const rowElement = document.createElement("div");
    rowElement.classList.add("grid-row");

    // looper igennem col
    for (let j = 0; j < grid[i].length; j++) {
      // laver grid-celler
      const cellElement = document.createElement("div");
      cellElement.classList.add("grid-cell");

      // toggler alive / not alive på celler
      cellElement.classList.toggle("alive", grid[i][j]);

      // appender celle elementer
      rowElement.appendChild(cellElement);
    }

    // appender row elementer
    gridContainer.appendChild(rowElement);
  }
}
