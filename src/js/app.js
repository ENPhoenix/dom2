import '../css/style.css';
import goblinImage from '../assets/goblin.png';

const gameContainer = document.getElementById('game');
const gridSize = 4;
let currentCellIndex = null;

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    gameContainer.append(cell);
  }
}

function createCharacter() {
  const img = document.createElement('img');
  img.src = goblinImage;
  img.alt = 'Character';
  img.className = 'character';
  return img;
}

function placeCharacterRandomly(character) {
  const cells = document.querySelectorAll('.cell');
  const randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].append(character);
  currentCellIndex = randomIndex;
}

function moveCharacter() {
  const cells = document.querySelectorAll('.cell');
  const character = document.querySelector('.character');
  if (!character) return;

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * cells.length);
  } while (newIndex === currentCellIndex);

  cells[newIndex].append(character);
  currentCellIndex = newIndex;
}

function initGame() {
  createGrid();
  const character = createCharacter();
  placeCharacterRandomly(character);

  setInterval(moveCharacter, 1000);
}

initGame();
