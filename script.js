const container = document.querySelector("#container");
const color = "black";

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < (rows * cols); i++) {
        let square = document.createElement("div");
        container.appendChild(square).classList.add("square");

        let squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", () => {
                square.setAttribute("style", `background-color: ${color};`);
            })
        })
    };
};

makeRows(16, 16);
