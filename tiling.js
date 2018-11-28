var grid;
var size;
var xsize;
var ysize;

function init() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    xsize = Math.floor(w/100);
    ysize = Math.floor(h/100);

    var svg = document.getElementById('tiling');
    svg.setAttribute('width', xsize*100);
    svg.setAttribute('height', ysize*100);
    var tiles = document.getElementById('grid');
    
    grid = [];
    size = xsize * ysize;
    var tile, name, angle;
    for (var i = 0; i < xsize; i++) {
	grid.push([]);
	for (var j = 0; j < ysize; j++) {
	    if (i == 0 || j == 0 || i == xsize - 1 || j == ysize - 1) {
		if (i == 0 && j == 0) {
		    name = "cornertile";
		    angle = 0;
		} else if (i == 0 && j == ysize - 1) {
		    name = "cornertile";
		    angle = 270;
		} else if (i == xsize - 1 && j == 0) {
		    name = "cornertile";
		    angle = 90;
		} else if (i == xsize - 1 && j == ysize - 1) {
		    name = "cornertile";
		    angle = 180;
		} else {
		    name = "edgetile";
		    if (i == 0) {
			angle = 0;
		    } else if (j == 0) {
			angle = 90;
		    } else if (i == xsize - 1) {
			angle = 180;
		    } else {
			angle = 270;
		    }
		}
	    } else {
		name = "tile";
		angle = (90*getRandomInt(0,4));
	    }
	    tile = document.createElementNS("http://www.w3.org/2000/svg", 'use');
	    tile.setAttribute('href', '#' + name + getRandomInt(1,6));
	    tile.setAttribute('transform', 'translate(5 5) translate(' + (i*10) + ' ' + (j*10) + ') rotate(' + angle + ') translate(-5 -5)');
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

    var name, angle;
    if (x == 0 || y == 0 || x == xsize - 1 || y == ysize - 1) {
	if (x == 0 && y == 0) {
	    name = "cornertile";
	    angle = 0;
	} else if (x == 0 && y == ysize - 1) {
	    name = "cornertile";
	    angle = 270;
	} else if (x == xsize - 1 && y == 0) {
	    name = "cornertile";
	    angle = 90;
	} else if (x == xsize - 1 && y == ysize - 1) {
	    name = "cornertile";
	    angle = 180;
	} else {
	    name = "edgetile";
	    if (x == 0) {
		angle = 0;
	    } else if (y == 0) {
		angle = 90;
	    } else if (x == xsize - 1) {
		angle = 180;
	    } else {
	    angle = 270;
	    }
	}
    } else {
	name = "tile";
	angle = (90*getRandomInt(0,4));
    }
    grid[x][y].setAttribute('href', '#' + name + getRandomInt(1,6));
    grid[x][y].setAttribute('transform', 'translate(5 5) translate(' + (x*10) + ' ' + (y*10) + ') rotate(' + angle + ') translate(-5 -5)');
}
