var grid;
var size;

function init() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var xsize = Math.floor(w/100);
    var ysize = Math.floor(h/100);

    var svg = document.getElementById('tiling');
    svg.setAttribute('width', xsize*100);
    svg.setAttribute('height', ysize*100);
    var tiles = document.getElementById('grid');
    
    grid = [];
    size = xsize * ysize;
    var tile;
    for (var i = 0; i < xsize; i++) {
	grid.push([]);
	for (var j = 0; j < ysize; j++) {
	    tile = document.createElementNS("http://www.w3.org/2000/svg", 'use');
	    tile.setAttribute('href', '#tile' + getRandomInt(1,6));
	    tile.setAttribute('transform', 'translate(5 5) translate(' + (i*10) + ' ' + (j*10) + ') rotate(' + (90*getRandomInt(0,4)) + ') translate(-5 -5)');
	    tiles.appendChild(tile);
	    grid[i][j] = tile;
	}
    }
    
    window.setInterval(changeTile, 1000);
}

window.addEventListener('load', init, false);

function getRandomInt(a,b) {
    return Math.ceil(a) + Math.floor(Math.random() * Math.floor(b));
}

function changeTile() {
    var n = getRandomInt(0,size-1);

    var x = n % grid.length;
    var y = (n - x)/grid.length;

    grid[x][y].setAttribute('href', '#tile' + getRandomInt(1,6));
    grid[x][y].setAttribute('transform', 'translate(5 5) translate(' + (x*10) + ' ' + (y*10) + ') rotate(' + (90*getRandomInt(0,4)) + ') translate(-5 -5)');
}
