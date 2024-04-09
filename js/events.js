import { drawGrid, clearGrid, gridContainer, gridInput, colors } from "./grid-utils.js";

const gridHover = document.querySelector("#gridHover");
const gridRainbow = document.querySelector("#gridRainbow");
const colorsDiv = document.querySelector(".colors");
let currentColor = colors[0];

function mouseColoring(e) {
    switch (e.target.className) {
        case "grid-item":

            if(gridRainbow.checked) {
                let number = Math.floor(Math.random() * 12);
                currentColor = colors[number];
            }

            e.target.style.backgroundColor = currentColor;
        break;

    default:
        break;
    }
}

gridHover.addEventListener("click", () => {
    if (gridHover.checked) {
        gridContainer.removeEventListener("click", mouseColoring);
        gridContainer.addEventListener("mouseover", mouseColoring)
    } else {
        gridContainer.removeEventListener("mouseover", mouseColoring);
        gridContainer.addEventListener("click", mouseColoring)
    }
});

gridInput.addEventListener("input", () => {
    let grid = gridInput.value;
    clearGrid();
    drawGrid(grid);
});

colorsDiv.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "color":
            currentColor = e.target.style.backgroundColor;
            break;

        default:
            break;
    }
});

gridContainer.addEventListener("click", mouseColoring)
