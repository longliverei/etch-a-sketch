const container = document.querySelector("#grid-container");
const defaultSize = 16;
let defaultColor = `black`;

// Make the grid
const makeGrid = (size) => {
    container.innerHTML = "";
    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        container.appendChild(square).classList.add("square");
        container.addEventListener("mouseover", dye);;
    };
};

const dye = (e) => {
    e.target.style.backgroundColor = defaultColor;
}

makeGrid(defaultSize);

// Color picker
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", (e) => {
    defaultColor = e.target.value;
})

const color = document.getElementById("color");
color.addEventListener("click", () => {
    defaultColor = colorPicker.value;
})

// Slider defines the grid size
const slider = document.getElementById("grid-slider");
const value = document.getElementById("output");

const update = () => {
    value.innerHTML = `${slider.value} x ${slider.value}`;
    makeGrid(slider.value);
}

value.innerHTML = `${slider.value} x ${slider.value}`;

slider.addEventListener("input", update);

// Eraser button
const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
    defaultColor = `white`;
})

// clear button
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    container.innerHTML = "";
    makeGrid(slider.value);
})
