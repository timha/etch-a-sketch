const container = document.getElementById("container");
const GRID_DIM = 960;

function makeSquares(numSquares) {
    container.style.setProperty('--length', numSquares);

    for (let i = 0; i < numSquares ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        // square.textContent = i + 1;
        square.addEventListener("mouseover", (e) => {
            console.log(e);
        });
        container.appendChild(square);
    }
    console.log(1024/numSquares);
}

makeSquares(24);