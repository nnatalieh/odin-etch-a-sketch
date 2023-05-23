const gridSizeRange = document.querySelector('#slider');
const gridSizeOutputP = document.querySelector('#output');
const gridDiv = document.querySelector('.grid-container');
const resetButton = document.querySelector('#reset');
const changeColorButton = document.querySelector('#change-color');

function grid(size=16) {
    gridDiv.style.setProperty('--grid-rows', size);
    gridDiv.style.setProperty('--grid-cols', size);
    for (i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        gridDiv.appendChild(div).className = "grid-item";
        div.addEventListener('mouseover', function(e) {
            div.id = "filled";
            e.target.style.backgroundColor = 'black';
        });
    };
};

function clear(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
    grid(gridSizeRange.value);
};

gridSizeRange.addEventListener('click', function(e) {
    clear(gridDiv);
    gridSizeOutputP.innerText = gridSizeRange.value + ' x ' + gridSizeRange.value;
});

resetButton.addEventListener('click', function(e) {
    clear(gridDiv);
});

changeColorButton.addEventListener('click', function(e) {
    const filledDiv = document.querySelectorAll('#filled');
    filledDiv.forEach(filledDiv => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        filledDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});

grid()