import '../css/style.css';

const gameContainer = document.getElementById('game');
const gridSize = 4;
let currentCellIndex = null;

// Create 4x4 grid
function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    gameContainer.appendChild(cell);
  }
}

// Create character img
function createCharacter() {
  const img = document.createElement('img');
  img.src = './goblin.png'; // Using the goblin image
  img.alt = 'Character';
  img.className = 'character';
  return img;
}

// Place character at random position
function placeCharacterRandomly(character) {
  const cells = document.querySelectorAll('.cell');
  const randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].appendChild(character);
  currentCellIndex = randomIndex;
}

// Move character to random position (not the same)
function moveCharacter() {
  const cells = document.querySelectorAll('.cell');
  const character = document.querySelector('.character');
  if (!character) return;

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * cells.length);
  } while (newIndex === currentCellIndex);

  cells[newIndex].appendChild(character);
  currentCellIndex = newIndex;
}

// Initialize game
function initGame() {
  createGrid();
  const character = createCharacter();
  placeCharacterRandomly(character);

  // Move every 2 seconds
  setInterval(moveCharacter, 2000);
}

initGame();
