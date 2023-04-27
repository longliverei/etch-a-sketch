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

// Catch color function
const dye = (e) => {
    e.target.style.backgroundColor = defaultColor;
};

makeGrid(defaultSize);

// Color picker
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", (e) => {
    defaultColor = e.target.value;
});

// Slider defines the grid size
const slider = document.getElementById("grid-slider");
const value = document.getElementById("output");

const update = () => {
    value.innerHTML = `${slider.value} x ${slider.value}`;
    makeGrid(slider.value);
};

value.innerHTML = `${slider.value} x ${slider.value}`;

slider.addEventListener("input", update);

// Color button
const color = document.getElementById("color");
color.addEventListener("click", () => {
    active(color);
    defaultColor = colorPicker.value;
});

// Eraser button
const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
    active(eraser);
    defaultColor = `white`;
});

// Clear button
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    container.innerHTML = "";
    makeGrid(slider.value);
});

// Set active class
const active = (e) => {
    let elems = document.querySelector(".active");
    if (elems != null) {
        elems.classList.remove("active");
    }
    e.className = "active";
}