let clicks = 0;
let autoClickers = 0;
let autoClickerCost = 15;

// DOM elements
const clicksDisplay = document.getElementById('clicks');
const clickButton = document.getElementById('clickButton');
const buyAutoClickerButton = document.getElementById('buyAutoClicker');
const autoClickerCostDisplay = document.getElementById('autoClickerCost');
const autoClickersDisplay = document.getElementById('autoClickers');

// Manual click function
clickButton.addEventListener('click', () => {
  clicks++;
  updateDisplay();
});

// Buy auto-clicker function
buyAutoClickerButton.addEventListener('click', () => {
  if (clicks >= autoClickerCost) {
    clicks -= autoClickerCost;
    autoClickers++;
    autoClickerCost += 7; // Increase cost by 7
    updateDisplay();
  } else {
    alert("Not enough clicks!");
  }
});

// Auto-clicker logic
setInterval(() => {
  clicks += autoClickers;
  updateDisplay();
}, 1000); // Auto-click every 1 second

// Update the display
function updateDisplay() {
  clicksDisplay.textContent = clicks;
  autoClickerCostDisplay.textContent = autoClickerCost;
  autoClickersDisplay.textContent = autoClickers;
}