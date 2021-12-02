const colorPickerDiv = document.querySelector('#color-picker-div')
const colorInput = document.querySelector('#color-input')

colorInput.onchange = (e) => colorPickerDiv.style.backgroundColor = e.target.value;