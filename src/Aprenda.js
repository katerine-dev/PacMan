const gridSize = 5;
const gridElement = document.getElementById('grid');

const map = [
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
]; // 0 = caminho livre, 1 = parede

let pacman = { x: 0, y: 0 };
let ghost = { x: 2, y: 2 };

function renderGrid() {
    gridElement.innerHTML = '';
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (row === pacman.x && col === pacman.y) {
            cell.classList.add('pacman');
        } else if (row === ghost.x && col === ghost.y) {
            cell.classList.add('ghost');
        } else if (map[row][col] === 1) {
            cell.classList.add('wall');
        }
        gridElement.appendChild(cell);
        }
    }
    document.getElementById('position').textContent = `[${pacman.x},${pacman.y}]`;
    document.getElementById('ghostPos').textContent = `[${ghost.x},${ghost.y}]`;
}

function move(dx, dy) {
    const newX = pacman.x + dx;
    const newY = pacman.y + dy;

    clearHighlights();

    if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) {
        document.getElementById('moveStatus').textContent = "❌ Fora da matriz!";
        highlightCell(pacman.x, pacman.y, 'red');
        return;
    }

    if (map[newX][newY] === 1) {
        document.getElementById('moveStatus').textContent = "❌ Colisão: parede!";
        highlightCell(newX, newY, 'red');
        return;
    }

    pacman.x = newX;
    pacman.y = newY;
    document.getElementById('moveStatus').textContent = "✅ Movimento permitido!";
    renderGrid();
}

function highlightCell(x, y, color) {
    const index = x * gridSize + y;
    const cells = document.querySelectorAll('.cell');
    if (cells[index]) {
        cells[index].style.outline = `2px solid ${color}`;
    }
}

function clearHighlights() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.outline = 'none');
}

function moveGhost() {
    const directions = [
        {dx: -1, dy: 0},
        {dx: 1, dy: 0},
        {dx: 0, dy: -1},
        {dx: 0, dy: 1},
    ];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    const newX = ghost.x + dir.dx;
    const newY = ghost.y + dir.dy;

    if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize && map[newX][newY] === 0) {
        ghost.x = newX;
        ghost.y = newY;
    }
    renderGrid();
}

renderGrid();