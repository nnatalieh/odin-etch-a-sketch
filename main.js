const gridSizeRange = document.querySelector('#slider');
const gridSizeOutputP = document.querySelector('#output');
const gridDiv = document.querySelector('.grid-container');

function grid(size=16) {
    gridDiv.style.setProperty('--grid-rows', size);
    gridDiv.style.setProperty('--grid-cols', size);
    for (i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        gridDiv.appendChild(div).className = "grid-item";
    };
};

function clear(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

gridSizeRange.addEventListener('click', function(e) {
    clear(gridDiv);
    gridSizeOutputP.innerText = gridSizeRange.value + ' x ' + gridSizeRange.value;
    grid(gridSizeRange.value);
});

grid()