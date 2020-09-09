let container = document.querySelector('#sketch-window');

function clearGrid() {
	while (container.lastChild) {
		container.removeChild(container.lastChild)
	}
}

function createGrid(gridWidth) {
	// Create divs for grid
	for (let i = 0; i < gridWidth * gridWidth; i++) {
		container.appendChild(document.createElement('div')).classList.add('grid-item');
	}

	container.style.gridTemplateRows = `repeat(${gridWidth}, 1fr)`;
	container.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;

	let gridDivs = document.querySelectorAll('.grid-item');

	// Leave a trail like an Etch-A-Sketch when the mouse hovers over the grid square
	for (let i = 0; i < gridDivs.length; i++) {
		gridDivs[i].addEventListener('mouseover', (e) => {
			e.srcElement.style.backgroundColor = 'black';
		})
	}
}

let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
	clearGrid();
	createGrid(prompt("Enter number of squares:", 16));
})

createGrid(16);