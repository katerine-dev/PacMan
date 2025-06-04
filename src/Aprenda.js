// Aprenda.js

// Configuração da grade (5×5) e referência ao elemento HTML
const gridSize = 5;
const gridElement = document.getElementById("grid");

// Mapa do labirinto (0 = caminho livre, 1 = parede)
const map = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
];

// Estado inicial de Pac-Man e do Fantasma
let pacman = { x: 0, y: 0 };
let ghost = { x: 2, y: 2 };
let showCoords = false; // controla exibição de coordenadas nas células

/**
 * renderGrid()
 * - Limpa a grade
 * - Cria cada célula (div.cell)
 * - Adiciona classes de acordo com: parede, pacman, ghost
 * - Se showCoords=true, mostra texto [linha,coluna] em cada célula
 * - Atualiza as exibições de posição e posição do fantasma no HTML
 */
function renderGrid() {
    gridElement.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // Se habilitado, escrevemos [linha,coluna] dentro da célula
        if (showCoords) {
            cell.textContent = `[${row},${col}]`;
        }

        // Se for posição do Pac-Man
        if (row === pacman.x && col === pacman.y) {
            cell.classList.add("pacman");
        }
        // Se for posição do fantasma
        else if (row === ghost.x && col === ghost.y) {
            cell.classList.add("ghost");
        }
        // Se for parede
        else if (map[row][col] === 1) {
            cell.classList.add("wall");
        }

        gridElement.appendChild(cell);
        }
    }
  // Atualiza texto com as coordenadas no HTML
    document.getElementById("position").textContent = `[${pacman.x},${pacman.y}]`;
    document.getElementById("ghostPos").textContent = `[${ghost.x},${ghost.y}]`;
}

/**
 * move(dx, dy)
 * - Tenta mover o Pac-Man do ponto pacman.x/pacman.y para [pacman.x + dx, pacman.y + dy]
 * - Se colisão (fora da matriz ou parede), destaca em vermelho e configura mensagem de erro
 * - Caso contrário, atualiza posição, atualiza mensagem de sucesso e redesenha a grade
 */
function move(dx, dy) {
    const newX = pacman.x + dx;
    const newY = pacman.y + dy;
    clearHighlights();

  // 1) Colisão com limites da matriz
    if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) {
        document.getElementById("moveStatus").textContent = "❌ Fora da matriz!";
        highlightCell(pacman.x, pacman.y, "red");
        return;
    }

  // 2) Colisão com parede
    if (map[newX][newY] === 1) {
        document.getElementById("moveStatus").textContent = "❌ Colisão: parede!";
        highlightCell(newX, newY, "red");
        return;
    }

  // Movimento válido
    pacman.x = newX;
    pacman.y = newY;
    document.getElementById("moveStatus").textContent = "✅ Movimento permitido!";
    renderGrid();
}

/**
 * highlightCell(x, y, color)
 * - Adiciona outline colorido para a célula [x,y] (usado para indicar colisão)
 */
function highlightCell(x, y, color) {
    const index = x * gridSize + y;
    const cells = document.querySelectorAll(".cell");
    if (cells[index]) {
        cells[index].classList.add("highlight");
        // customizamos a cor do outline
        cells[index].style.outlineColor = color;
    }
}

/**
 * clearHighlights()
 * - Remove qualquer destaque (outline) das células, antes de cada tentativa de movimento
 */
function clearHighlights() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.classList.remove("highlight");
        cell.style.outline = "none";
    });
}

/**
 * moveGhost()
 * - Escolhe aleatoriamente um vetor (dx,dy) dentre quatro opções
 * - Se a célula alvo estiver dentro da matriz e livre (map[newX][newY]===0), move o fantasma
 * - Exibe, no elemento #vectorChoice, qual vetor foi escolhido
 * - Redesenha a grade
 */
function moveGhost() {
  // Vetores possíveis do fantasma
    const directions = [
        { dx: -1, dy: 0 },
        { dx: 1, dy: 0 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 },
    ];
  // Escolhe índice aleatório
    const chosen = directions[Math.floor(Math.random() * directions.length)];

    const newX = ghost.x + chosen.dx;
    const newY = ghost.y + chosen.dy;

    // Atualiza exibição do vetor escolhido
    document.getElementById(
        "vectorChoice"
    ).textContent = `Último vetor: ( ${chosen.dx} , ${chosen.dy} )`;

    // Só se move se estiver dentro da matriz e não for parede
    if (
        newX >= 0 &&
        newX < gridSize &&
        newY >= 0 &&
        newY < gridSize &&
        map[newX][newY] === 0
    ) {
        ghost.x = newX;
        ghost.y = newY;
    }
    renderGrid();
}

/**
 * toggleShowCoords()
 * - Alterna entre mostrar e esconder as coordenadas dentro das células
 * - Isso reforça o conceito de plano cartesiano: cada célula tem [linha,coluna]
 */
function toggleShowCoords() {
    showCoords = !showCoords;
    renderGrid();
}

// Inicializa a renderização ao carregar a página
renderGrid();