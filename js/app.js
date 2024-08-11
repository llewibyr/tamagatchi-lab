let gameOver;
let timer;
let state = {
    score: 0,
    level: 0,
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};

// Helper function to generate a random integer between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Function to update state properties
function updateStates() {
    for (let key in state) {
        if (state.hasOwnProperty(key) && key !== 'score' && key !== 'level') {
            state[key] += getRandomInt(3);
        }
    }
}

// Function to check if the game is over
function checkGameOver() {
    for (let key in state) {
        if (state.hasOwnProperty(key) && state[key] >= 10) {
            gameOver = true;
            break;
        }
    }
}

// Function to run the game logic
function runGame() {
    updateStates();
    checkGameOver();
    render();
}

// Function to render state to the DOM
function render() {
    if (gameOver) {
        clearInterval(timer);
        console.log('Game Over!');
        if (resetBtnEl) resetBtnEl.classList.remove('hidden');
        if (gameMessageEl) gameMessageEl.classList.remove('hidden');
        return; // Exit the function early
    }

    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            const element = document.getElementById(`${key}-stat`);
            if (element) {
                element.textContent = state[key];
            }
        }
    }
}

// Initialize the game
function init() {
    console.log('Init function called.');
    
    // Hide reset button and game message
    if (resetBtnEl) resetBtnEl.classList.add('hidden');
    if (gameMessageEl) gameMessageEl.classList.add('hidden');
    
    // Reset the game state
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    state.score = 0;
    state.level = 0;
    
    gameOver = false;
    timer = setInterval(runGame, 2000);
    render();
}

// Function for the play button click
function playBtnClick() {
    state.boredom = 0;
    render();
}

// Function for the feed button click
function feedBtnClick() {
    state.hunger = 0;
    render();
}

// Function for the sleepiness button click
function sleepinessBtnClick() {
    state.sleepiness = 0;
    render();
}

// Call init when the page loads
window.onload = function() {
    // Cache DOM elements
    const playBtnEl = document.getElementById('play');
    const feedBtnEl = document.getElementById('feed');
    const sleepinessBtnEl = document.getElementById('sleep');
    resetBtnEl = document.getElementById('restart');
    gameMessageEl = document.getElementById('message');

    // Setup button event listeners
    if (playBtnEl) playBtnEl.addEventListener('click', playBtnClick);
    if (feedBtnEl) feedBtnEl.addEventListener('click', feedBtnClick);
    if (sleepinessBtnEl) sleepinessBtnEl.addEventListener('click', sleepinessBtnClick);
    if (resetBtnEl) resetBtnEl.addEventListener('click', init);

    // Initialize the game
    init();
};
