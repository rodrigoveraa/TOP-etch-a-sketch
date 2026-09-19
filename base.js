const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

const mainContainer = document.querySelector(".main-container")

for (let i = 0; i < GRID_HEIGHT; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");
    mainContainer.appendChild(newRow);

    for (let j = 0; j < GRID_WIDTH; j++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");

        newRow.appendChild(newSquare);
        
    }
    
}