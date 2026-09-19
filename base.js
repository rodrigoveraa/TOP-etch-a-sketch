const MAX_SQUARES_PER_SIDE = 100;

const mainContainer = document.querySelector(".main-container")

function clearGrid() {
    mainContainer.replaceChildren();
}

function createGrid(squaresPerSide) {
    if (squaresPerSide > MAX_SQUARES_PER_SIDE) {
        alert("Too many squares per side!");
        return;
    }

    for (let i = 0; i < squaresPerSide; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("grid-row");
        mainContainer.appendChild(newRow);

        for (let j = 0; j < squaresPerSide; j++) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-square");
            newSquare.addEventListener("mouseover", function (e) {
                e.target.classList.add("black-background");
            });

            newRow.appendChild(newSquare);
            
        }
        
    }
    

}

clearGrid();

createGrid(50);



