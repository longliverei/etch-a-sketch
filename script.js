const container = document.querySelector("#grid-container");
const slider = document.getElementById("grid-slider");
const value = document.getElementById("output");
const color = "black";
const defaultSize = 16;

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
            square.setAttribute("style", `background-color: ${color}`)
        })
    })
    
};

makeGrid(defaultSize);

const update = () => {
    makeGrid(slider.value);
}


slider.addEventListener("input", update);
