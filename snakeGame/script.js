const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
const cellSize = 20;

let snake = [{ x: 100, y: 100 }];
let direction = { x: cellSize, y: 0 };
let food = { x: 300, y: 300 };
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameOver = false;
let gameLoop;

highScoreDisplay.textContent = highScore;

function drawSnakePart(snakePart, index) {
    ctx.fillStyle = index === 0 ? '#2e7d32' : '#4caf50';
    ctx.fillRect(snakePart.x, snakePart.y, cellSize, cellSize);
    ctx.strokeStyle = '#f0f0f0';
    ctx.strokeRect(snakePart.x, snakePart.y, cellSize, cellSize);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Wall collision
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        endGame();
        return;
    }

    // Self collision
    for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
            return;
        }
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreDisplay.textContent = score;
        placeFood();
    } else {
        snake.pop();
    }
}

function placeFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize,
            y: Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize
        };
    } while (snake.some(part => part.x === newFood.x && part.y === newFood.y));
    food = newFood;
}

function drawFood() {
    ctx.fillStyle = '#e53935';
    ctx.beginPath();
    ctx.arc(food.x + cellSize / 2, food.y + cellSize / 2, cellSize / 2, 0, 2 * Math.PI);
    ctx.fill();
}

function drawGrid() {
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < canvas.width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function endGame() {
    gameOver = true;
    clearInterval(gameLoop);

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
        highScoreDisplay.textContent = highScore;
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '18px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 15);
    ctx.fillText('Press Space to restart', canvas.width / 2, canvas.height / 2 + 45);
}

function resetGame() {
    snake = [{ x: 100, y: 100 }];
    direction = { x: cellSize, y: 0 };
    score = 0;
    scoreDisplay.textContent = score;
    gameOver = false;
    placeFood();
    gameLoop = setInterval(update, 150);
}

function update() {
    if (gameOver) return;
    moveSnake();
    if (gameOver) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawSnake();
    drawFood();
}

document.addEventListener('keydown', function(event) {
    if (event.key === ' ' && gameOver) {
        resetGame();
        return;
    }

    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -cellSize };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: cellSize };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -cellSize, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: cellSize, y: 0 };
            break;
    }
});

placeFood();
gameLoop = setInterval(update, 150);
