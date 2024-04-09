const gridContainer = document.querySelector(".grid-container");
const gridInput = document.querySelector("#gridNum");

const colors = [
    "#000002", "#1d2b53", "#7e2553", "#008751",
    "#ab5236", "#5f574f", "#c2c3c7", "#fff1e8",
    "#ff004d", "#ffa300", "#ffec27", "#00e436",
    "#29adff", "#83769c", "#ff77a8", "#ffccaa"
];

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

function addColors() {
    const colorsDiv = document.querySelector(".colors");

    for (let i = 0; i < colors.length; i++) {
        let color = document.createElement("div");
        color.className = "color"
        color.style.backgroundColor = colors[i];
        color.style.width = 500 / 12 + "px";
        color.style.height = 500 / 12 + "px";
        colorsDiv.appendChild(color);
    }
}

addColors();

drawGrid(16);

export {
    drawGrid, clearGrid,
    gridContainer, gridInput, colors
};
