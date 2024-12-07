const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const scoreSpan = document.getElementById('score');

let score = 0;
let isJumping = false;

document.addEventListener('keydown', () => {
    if (!isJumping) {
        isJumping = true;
        player.classList.add('jump');
        setTimeout(() => {
            player.classList.remove('jump');
            isJumping = false;
        }, 500);
    }
});

player.style.transition = 'bottom 0.3s';
const style = document.createElement('style');
style.innerHTML = `
#player.jump {
    bottom: 120px;
}
`;
document.head.appendChild(style);

function checkCollision() {
    const playerBox = player.getBoundingClientRect();
    const obstacleBox = obstacle.getBoundingClientRect();

    if (
        playerBox.bottom > obstacleBox.top &&
        playerBox.top < obstacleBox.bottom &&
        playerBox.right > obstacleBox.left &&
        playerBox.left < obstacleBox.right
    ) {
        alert(`Game Over! Your score: ${score}`);
        location.reload();
    }
}

function updateScore() {
    score++;
    scoreSpan.textContent = score;
}

setInterval(() => {
    checkCollision();
    updateScore();
}, 100);