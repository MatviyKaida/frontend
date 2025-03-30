const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20; // Розмір однієї клітинки
const canvasSize = 400; // Розмір поля
let snake = [{ x: 200, y: 200 }]; // Початкове положення змійки
let food = randomFood();
let direction = "RIGHT";
let score = 0;
let gameInterval;

// Початок гри
document.getElementById("startBtn").addEventListener("click", startGame);
document.addEventListener("keydown", changeDirection);

function startGame() {
    snake = [{ x: 200, y: 200 }];
    direction = "RIGHT";
    score = 0;
    food = randomFood();
    clearInterval(gameInterval);
    gameInterval = setInterval(updateGame, 100);
}

// Генерація випадкової їжі
function randomFood() {
    return {
        x: Math.floor(Math.random() * (canvasSize / box)) * box,
        y: Math.floor(Math.random() * (canvasSize / box)) * box
    };
}

// Оновлення гри
function updateGame() {
    const head = { x: snake[0].x, y: snake[0].y };

    // Зміна напрямку
    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;

    // Перевірка зіткнення зі стінами
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize || checkCollision(head)) {
        clearInterval(gameInterval);
        alert("Гра закінчена! Очки: " + score);
        saveScore(score);
        return;
    }

    // Перевірка, чи з'їла змійка їжу
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = randomFood();
    } else {
        snake.pop();
    }

    snake.unshift(head);
    drawGame();
}

// Малювання гри
function drawGame() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    // Малюємо їжу
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Малюємо змійку
    ctx.fillStyle = "darkgreen";
    snake.forEach(segment => ctx.fillRect(segment.x, segment.y, box, box));

    document.getElementById("score").innerText = score;
}

// Перевірка зіткнення зі своїм тілом
function checkCollision(head) {
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

// Керування змійкою
function changeDirection(event) {
    const key = event.key;
    if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

// Збереження результату у JSON-файл
function saveScore(score) {
    const playerName = prompt("Введіть ваше ім'я:");
    if (!playerName) return;

    const result = { name: playerName, date: new Date().toISOString(), score };

    // Збереження у LocalStorage
    localStorage.setItem("lastScore", JSON.stringify(result));

    // Збереження у JSON (імітація завантаження на сервер)
    console.log("Результат гри:", JSON.stringify(result, null, 2));
}
