const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Paddle settings
const PADDLE_WIDTH = 16;
const PADDLE_HEIGHT = 100;
const PADDLE_MARGIN = 20;

// Ball settings
const BALL_SIZE = 16;
const BALL_SPEED = 6;

// Game state
let playerY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
let aiY = HEIGHT / 2 - PADDLE_HEIGHT / 2;

let ballX = WIDTH / 2 - BALL_SIZE / 2;
let ballY = HEIGHT / 2 - BALL_SIZE / 2;
let ballVX = BALL_SPEED;
let ballVY = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);

let playerScore = 0;
let aiScore = 0;

// Mouse control for player paddle
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    playerY = mouseY - PADDLE_HEIGHT / 2;

    // Clamp within canvas
    playerY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, playerY));
});

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawBall(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + size/2, y + size/2, size/2, 0, Math.PI * 2);
    ctx.fill();
}

function drawText(text, x, y, font = "32px Arial", color = "#fff") {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, x, y);
}

// Main game loop
function update() {
    // Move ball
    ballX += ballVX;
    ballY += ballVY;

    // Ball collision with top/bottom walls
    if (ballY <= 0 || ballY + BALL_SIZE >= HEIGHT) {
        ballVY = -ballVY;
        ballY = Math.max(0, Math.min(HEIGHT - BALL_SIZE, ballY));
    }

    // Ball collision with player paddle
    if (
        ballX <= PADDLE_MARGIN + PADDLE_WIDTH &&
        ballY + BALL_SIZE > playerY &&
        ballY < playerY + PADDLE_HEIGHT
    ) {
        ballVX = Math.abs(ballVX);
        // Adjust vertical speed based on hit position
        let delta = ballY + BALL_SIZE/2 - (playerY + PADDLE_HEIGHT/2);
        ballVY += delta * 0.1;
    }

    // Ball collision with AI paddle
    if (
        ballX + BALL_SIZE >= WIDTH - PADDLE_MARGIN - PADDLE_WIDTH &&
        ballY + BALL_SIZE > aiY &&
        ballY < aiY + PADDLE_HEIGHT
    ) {
        ballVX = -Math.abs(ballVX);
        let delta = ballY + BALL_SIZE/2 - (aiY + PADDLE_HEIGHT/2);
        ballVY += delta * 0.1;
    }

    // Score check (left/right walls)
    if (ballX < 0) {
        aiScore++;
        resetBall();
    }
    if (ballX + BALL_SIZE > WIDTH) {
        playerScore++;
        resetBall();
    }

    // Basic AI for right paddle
    let aiCenter = aiY + PADDLE_HEIGHT / 2;
    let ballCenter = ballY + BALL_SIZE / 2;
    if (aiCenter < ballCenter - 10) {
        aiY += Math.min(6, ballCenter - aiCenter);
    } else if (aiCenter > ballCenter + 10) {
        aiY -= Math.min(6, aiCenter - ballCenter);
    }
    // Clamp within canvas
    aiY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, aiY));
}

function resetBall() {
    ballX = WIDTH / 2 - BALL_SIZE / 2;
    ballY = HEIGHT / 2 - BALL_SIZE / 2;
    ballVX = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
    ballVY = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
}

function render() {
    // Clear canvas
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Draw paddles
    drawRect(PADDLE_MARGIN, playerY, PADDLE_WIDTH, PADDLE_HEIGHT, "#0f0");
    drawRect(WIDTH - PADDLE_MARGIN - PADDLE_WIDTH, aiY, PADDLE_WIDTH, PADDLE_HEIGHT, "#f00");

    // Draw ball
    drawBall(ballX, ballY, BALL_SIZE, "#fff");

    // Draw net
    for (let i = 0; i < HEIGHT; i += 40) {
        drawRect(WIDTH/2 - 2, i, 4, 20, "#888");
    }

    // Draw scores
    drawText(playerScore, WIDTH / 2 - 60, 60);
    drawText(aiScore, WIDTH / 2 + 30, 60);
}

function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

gameLoop();