import { drawGrid, clearGrid, gridContainer, gridInput } from "./grid-utils.js";

gridContainer.addEventListener("mouseover", (e) => {
    switch (e.target.className) {
        case "grid-item":
            e.target.style.backgroundColor = "black";
            break;

        default:
            break;
    }
});

gridInput.addEventListener("input", () => {
    let grid = gridInput.value;
    clearGrid();
    drawGrid(grid);
});
