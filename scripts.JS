// Global Variables
let numberOfDivs = 2000
let perfectRoot

// Find next perfect square
const nearest_sq = n => Math.pow(Math.ceil(Math.sqrt(n)), 2);

// Create default grid
perfectRoot = nearest_sq (numberOfDivs);
makeGrid (perfectRoot);
mouseHover ();

// When number of plays changed remake the grid
const btn = document.querySelector("#inputBtn");
 
btn.addEventListener('click', () => {
    const fullGrid = document.getElementById ("grid")
    fullGrid.parentNode.removeChild(fullGrid);
    let numberOfDivs = document.getElementById("numberOfDivsInput").value;
    let perfectRoot = nearest_sq (numberOfDivs);
    makeGrid (perfectRoot);
    mouseHover ();
});

// Create perfectRoot(numberOfDivs) divs
function makeGrid (n) {

    const fullGrid = document.createElement ("div") 
    fullGrid.setAttribute("id", "grid")
    fullGrid.setAttribute("style", "grid-template-columns: repeat(" + Math.sqrt (n) + ", 1fr); grid-template-rows: repeat(" + Math.sqrt (n) + ", 1fr);")
    document.getElementById("content").append(fullGrid)
    
    for (i = 0; i < n; i++) {
        const gridSquares = document.createElement ("div")
        gridSquares.classList.add ("gridChild")
        document.getElementById("grid").append(gridSquares)
    }
}

// Erase button
const eraseBtn = document.querySelector("#eraseGrid");

eraseBtn.addEventListener('click', () => {
    const fullGrid = document.getElementById ("grid")
    fullGrid.parentNode.removeChild(fullGrid);
    makeGrid (perfectRoot);
    mouseHover ();
});

// Get random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// When hover on grid change color

function mouseHover () {
    const gridSquares = document.querySelectorAll(".gridChild")


    gridSquares.forEach((div) => {
    
        div.addEventListener('mouseenter', (e) => {
      
            e.target.setAttribute("style", "background-color: " +getRandomColor()+ ";");
            console.log (e)
    });
});

}

