const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasSize = canvas.width; 
const velocity = 150; //ms per box
let snake = [{ x: canvasSize / 2, y: canvasSize / 2 }];
let food = randomFood();
let direction = "RIGHT";
let score = 0;
let gameInterval;
let nextDirection = "RIGHT";

document.getElementById("startBtn").addEventListener("click", startGame);
document.addEventListener("keydown", changeDirection);

function startGame() {
    
    snake = [{ x: canvasSize / 2, y: canvasSize / 2 }];
    const head = { x: snake[0].x, y: snake[0].y };
    direction = "RIGHT";
    nextDirection = "RIGHT";
    score = 0;
    food = randomFood();
    snake.unshift(head);
    clearInterval(gameInterval);
    gameInterval = setInterval(updateGame, velocity);
}

function randomFood() {
    return {
        x: Math.floor(Math.random() * (canvasSize / box)) * box,
        y: Math.floor(Math.random() * (canvasSize / box)) * box
    };
}

function updateGame() {
    const head = { x: snake[0].x, y: snake[0].y };
    direction = nextDirection;

    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;

    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize || (snake.length > 3 && checkCollision(head))) {
        clearInterval(gameInterval);
        alert("Game over! Score: " + score);
        saveScore(score);
        return;
    }

    if (head.x === food.x && head.y === food.y) {
        score++;
        food = randomFood();
    } else {
        snake.pop();
    }

    snake.unshift(head);
    drawGame();
}

function drawGame() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    ctx.fillStyle = "darkgreen";
    snake.forEach(segment => ctx.fillRect(segment.x, segment.y, box, box));

    document.getElementById("score").innerText = score;
}

function checkCollision(head) {
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

function changeDirection(event) {
    const key = event.key;
    if (key === "ArrowUp" && direction !== "DOWN") nextDirection = "UP";
    if (key === "ArrowDown" && direction !== "UP") nextDirection = "DOWN";
    if (key === "ArrowLeft" && direction !== "RIGHT") nextDirection = "LEFT";
    if (key === "ArrowRight" && direction !== "LEFT") nextDirection = "RIGHT";
}

async function saveScore(score) {
    const playerName = prompt("Введіть ваше ім'я:");
    if (!playerName) return;

    const result = { nickname: playerName, date: new Date().toISOString(), score };

    await fetch("/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result)
    });
    
    localStorage.setItem("lastScore", JSON.stringify(result));

}
