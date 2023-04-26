const container = document.querySelector("#container");

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < (rows * cols); i++) {
        let square = document.createElement("div");
        container.appendChild(square).classList.add("square");
    };
};

makeRows(16, 16);
