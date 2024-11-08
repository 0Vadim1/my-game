let playerName = '';
let playerScore = 0;
let computerScore = 0;

function startGame() {
    const usernameInput = document.getElementById('username');
    const avatarInput = document.getElementById('userAvatar');
    
    playerName = usernameInput.value.trim();

    if (playerName === '') {
        alert("Будь ласка, введіть ім'я!");
        return;
    }

    // Перевірка та завантаження аватарки гравця
    if (avatarInput.files && avatarInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('playerAvatarImg').src = e.target.result;
        };
        reader.readAsDataURL(avatarInput.files[0]);
    }

    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('playerName').textContent = playerName;
}

function playRound() {
    const playerNumber = Math.floor(Math.random() * 100) + 1;
    const computerNumber = Math.floor(Math.random() * 100) + 1;

    let roundMessage = '';

    if (playerNumber > computerNumber) {
        playerScore++;
        roundMessage = `${playerName} виграв цей раунд!`;
    } else if (playerNumber < computerNumber) {
        computerScore++;
        roundMessage = 'Комп\'ютер виграв цей раунд!';
    } else {
        roundMessage = 'Це нічия!';
    }

    document.getElementById('roundResult').textContent = roundMessage;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        endGame();
    }
}


function endGame() {
    const popupResult = document.getElementById('popupResult');
    const popupMessage = document.getElementById('popupMessage');

    if (playerScore === 3) {
        popupMessage.textContent = `Вітаємо, ${playerName}! Ви перемогли!`;
        popupResult.classList.add('win');
        popupResult.classList.remove('lose');
    } else {
        popupMessage.textContent = 'На жаль, переміг комп\'ютер. Спробуйте ще раз!';
        popupResult.classList.add('lose');
        popupResult.classList.remove('win');
    }

    popupResult.style.display = 'block';
    document.querySelector('button[onclick="playRound()"]').disabled = true;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('roundResult').textContent = '';
    closePopup();
    document.querySelector('button[onclick="playRound()"]').disabled = false;

    // Скидання чисел та аватарок
    document.getElementById('playerNumber').textContent = '0';
    document.getElementById('computerNumber').textContent = '0';
}

function closePopup() {
    const popupResult = document.getElementById('popupResult');
    popupResult.style.display = 'none';
}

function showRules() {
    const rulesPopup = document.getElementById('rulesPopup');
    rulesPopup.style.display = 'block';
}

function closeRules() {
    const rulesPopup = document.getElementById('rulesPopup');
    rulesPopup.style.display = 'none';
}

