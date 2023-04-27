const container = document.querySelector("#grid-container");
const defaultSize = 16;
let color = `background-color: black`;

const makeGrid = (size) => {
    container.innerHTML = "";
    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        container.appendChild(square).classList.add("square");
    };
 
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", () => {
            square.setAttribute("style", color);
        });
    });
};

makeGrid(defaultSize);

const slider = document.getElementById("grid-slider");
const value = document.getElementById("output");

const update = () => {
    value.innerHTML = `${slider.value} x ${slider.value}`;
    makeGrid(slider.value);
}

value.innerHTML = `${slider.value} x ${slider.value}`;

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
    color = `background-color: white`;
})


slider.addEventListener("input", update);
