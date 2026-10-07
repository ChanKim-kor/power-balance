console.log("Power Balance script loaded.");

let isGameOver = false;
let elapsedSeconds = 0;
let score = 0;
let generation = 80;
let demand = 80;
let stability = 100;


const gameStatusElement = document.getElementById("game-status");
const timeElement = document.getElementById("elapsed-time");
const scoreElement = document.getElementById("score");
const generationElement = document.getElementById("generation");
const demandElement = document.getElementById("demand");
const balanceElement = document.getElementById("balance");
const stabilityElement = document.getElementById("stability");

function renderGameStatus() {
    if (!isGameOver) {
        gameStatusElement.textContent = "Grid Running!";
    }
    else {
        gameStatusElement.textContent = "Game Over - Grid Collapsed!!";
    }
}

function renderTime() {
    timeElement.textContent = "Time: " + elapsedSeconds + " s";
}

function renderScore() {
    scoreElement.textContent = "Score: " + score;
}

function renderGeneration() {
    generationElement.textContent = "Generation: " + generation + " MW";
}

function renderDemand() {
    demandElement.textContent = "Demand: " + demand + " MW";
}

function renderBalance() {
    const balance = generation - demand;
    balanceElement.textContent = "Balance: " + balance + " MW";
}

function renderStability() {
    stabilityElement.textContent = "Grid Stability: " + stability + "%";
}

function startTimers() {
    clearInterval(demandTimerId);
    clearInterval(gameTimerId);
    demandTimerId = setInterval(changeDemand, 3000);
    gameTimerId = setInterval(tick, 1000);
}

function tick() {
    if(isGameOver){
        return;
    }
    elapsedSeconds = elapsedSeconds + 1;
    updateScore();
    updateStability();
    render();
}

function updateScore() {
    if (Math.abs(generation - demand) <= 5) {
        score = score + 10;
    }
}

function endGame() {
    isGameOver = true;
    clearInterval(demandTimerId);
    clearInterval(gameTimerId);
    render();
}

function render() {
    renderGameStatus();
    renderTime();
    renderScore();
    renderGeneration();
    renderDemand();
    renderBalance();
    renderStability();
}

const decreaseTenButton = document.getElementById("decrease-ten-button");
const decreaseButton = document.getElementById("decrease-button");
const increaseButton = document.getElementById("increase-button");
const increaseTenButton = document.getElementById("increase-ten-button");
const restartButton = document.getElementById("restart-button");

function adjustGeneration(amount){
    if (isGameOver) {
        return;
    }
    generation = generation + amount;
    if (generation < 0) {
        generation = 0;
    }
    render();
}

function restartGame() {
    isGameOver = false;
    elapsedSeconds = 0;
    score = 0;
    generation = 80;
    demand = 80;
    stability = 100;
    render();
    startTimers();
}

function changeDemand() {
    if (isGameOver){
        return;
    }
    const demandChange = Math.floor(Math.random() * 11) - 5;
    console.log(demandChange);
    demand = demand + demandChange;
    if (demand < 0) {
        demand = 0;
    }
    render();
}

function updateStability() {
    if (isGameOver){
        return;
    }
    if ((Math.abs(generation - demand) > 5) && (stability > 0)) {
        stability = stability - 1;
    }
    if (stability === 0) {
        endGame();
    }
}

decreaseTenButton.addEventListener("click", function () {
    adjustGeneration(-10);
});
decreaseButton.addEventListener("click", function () {
    adjustGeneration(-1);
});
increaseButton.addEventListener("click", function () {
    adjustGeneration(1);
});
increaseTenButton.addEventListener("click", function () {
    adjustGeneration(10);
});
restartButton.addEventListener("click", restartGame);


render();
let demandTimerId = null;
let gameTimerId = null;
startTimers();