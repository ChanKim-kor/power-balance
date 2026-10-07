console.log("Power Balance script loaded.");

let generation = 80;
let demand = 80;

const generationElement = document.getElementById("generation");
const demandElement = document.getElementById("demand");
const balanceElement = document.getElementById("balance");

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

function render() {
    renderGeneration();
    renderDemand();
    renderBalance();
}

render();

const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");

function increaseGeneration() {
    generation = generation + 1;
    render();
}

function decreaseGeneration() {
    if (generation > 0) {
        generation = generation - 1;
    }
    render();
}

increaseButton.addEventListener("click", increaseGeneration);
decreaseButton.addEventListener("click", decreaseGeneration);