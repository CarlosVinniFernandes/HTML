document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const scoreDisplay = document.getElementById('score');
    const chancesDisplay = document.getElementById('chances');
    let score = 0;
    let chances = 3;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    const cardsArray = [
        { name: '1', img: 'css.png' },
        { name: '1', img: 'css.png' },
        { name: '2', img: 'c.png' },
        { name: '2', img: 'c.png' },
        { name: '3', img: 'java.png' },
        { name: '3', img: 'java.png' },
        { name: '4', img: 'python.png' },
        { name: '4', img: 'python.png' },
        { name: '5', img: 'js.png' },
        { name: '5', img: 'js.png' },
        { name: '6', img: 'portugol.png' },
        { name: '6', img: 'portugol.png' }
    ];

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(cardsArray);
        cardsArray.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.pair = card.name;
            cardElement.innerHTML = `
                <div class="front"></div>
                <div class="back">
                    <img src="${card.img}" alt="Card image">
                </div>
            `;
            cardElement.addEventListener('click', flipCard);
            board.appendChild(cardElement);
        });
        revealAllCards();
    }

    function revealAllCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.add('flip'));
        setTimeout(() => {
            cards.forEach(card => card.classList.remove('flip'));
            lockBoard = false;
        }, 3000); 
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.pair === secondCard.dataset.pair;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        score++;
        scoreDisplay.textContent = `Pontuação: ${score}`;

        if (score === cardsArray.length / 2) {
            setTimeout(() => {
                alert('Você ganhou:))!');
                resetGame();
            }, 500);
        }

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            chances--;
            chancesDisplay.textContent = `Chances restantes: ${chances}`;

            if (chances === 0) {
                alert('Você perdeu :((!');
                resetGame();
            }

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function resetGame() {
        score = 0;
        chances = 3;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        chancesDisplay.textContent = `Chances restantes: ${chances}`;
        board.innerHTML = '';
        createBoard();
    }

    createBoard();
});