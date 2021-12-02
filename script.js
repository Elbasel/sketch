const INITIIAL_WIDTH = 8


function fillSketchArea(gridWidth) {
    
    sketchArea.innerHTML = '';

    gridWidth = gridWidth ** 2

    for (let i = 0; i < gridWidth; i++) {
        let cell = document.createElement('div');
        cell.style.flexBasis = (100 / Math.sqrt(gridWidth)) + "%"
        cell.classList.add('cell')
    
        sketchArea.appendChild(cell)
    }
}



// DOM Elements
const sketchArea = document.querySelector('#sketch-area');
const slider = document.querySelector('input[type="range"')
slider.onchange = (e) => fillSketchArea(e.target.value)


// Initial Setup
fillSketchArea(INITIIAL_WIDTH)




// div color change based on selection
const colorPickerDiv = document.querySelector('#color-picker-div');
const colorInput = document.querySelector('#color-input');

colorInput.onchange = (e) => colorPickerDiv.style.backgroundColor = e.target.value;