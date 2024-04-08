const gridContainer = document.querySelector(".grid-container");
const gridInput = document.querySelector("input");

function drawGrid(grid) {
    for (let i = 0; i < grid*grid; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-item");
        gridDiv.style.width = 600 / grid + "px";
        gridDiv.style.height = 600 / grid + "px";
        gridContainer.appendChild(gridDiv);
    }
}

function clearGrid() {
    const gridNodes = gridContainer.childNodes;
    const gridArray = Array.from(gridNodes);

    for (let i = 0; i < gridArray.length; i++) {
        gridArray[i].remove();
    }
}

drawGrid(16);

export { drawGrid, clearGrid, gridContainer, gridInput };
