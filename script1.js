// Função para buscar imagens
async function fetchImages(theme) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${theme}&client_id=YfC2Tf2KuwGzfO2dfnX2bBo8Fa-_zTvcG5Nk3xNciOM`);
    const data = await response.json();
    return data.results.map(image => image.urls.small);
}

// Configurar o tabuleiro do jogo
async function setupGame(theme) {
    const images = await fetchImages(theme);

    // Duplicar as imagens para criar pares e embaralhar
    const imagePairs = [...images.slice(0, 15), ...images.slice(0, 15)].sort(() => Math.random() - 0.5);

    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = ""; // Limpar o tabuleiro anterior

    imagePairs.forEach(imgUrl => {
        const card = document.createElement("div");
        card.className = "card";

        // Adicionar a imagem como fundo quando virada
        card.dataset.image = imgUrl;

        // Clique para virar a carta
        card.addEventListener("click", () => {
            card.classList.add("flipped");
            card.style.backgroundImage = `url(${imgUrl})`;
        });

        gameBoard.appendChild(card);
    });
}

// Iniciar o jogo quando o botão for clicado
document.getElementById("start-game").addEventListener("click", () => {
    const theme = document.getElementById("theme-input").value;
    if (theme) {
        setupGame(theme);
    } else {
        alert("Por favor, digite um tema!");
    }
});

let firstCard = null;
let secondCard = null;
let lockBoard = false; // Evita que o jogador vire outras cartas enquanto as erradas são escondidas

// Clique na carta
function flipCard(card) {
    if (lockBoard) return; // Impede virar cartas enquanto está "bloqueado"
    if (card === firstCard) return; // Impede clicar na mesma carta duas vezes

    card.classList.add("flipped");
    card.style.backgroundImage = `url(${card.dataset.image})`;

    if (!firstCard) {
        // Primeira carta selecionada
        firstCard = card;
    } else {
        // Segunda carta selecionada
        secondCard = card;

        // Verifica se formam um par
        checkForMatch();
    }
}

// Verifica se as duas cartas formam um par
function checkForMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        // É um par!
        resetBoard();
    } else {
        // Não é um par. Vira as cartas de volta após 1 segundo
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            firstCard.style.backgroundImage = "";
            secondCard.classList.remove("flipped");
            secondCard.style.backgroundImage = "";
            resetBoard();
        }, 1000);
    }
}

// Reseta as variáveis para começar a próxima jogada
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Configura as cartas no tabuleiro
async function setupGame(theme) {
    const images = await fetchImages(theme);

    // Duplicar e embaralhar imagens
    const imagePairs = [...images.slice(0, 15), ...images.slice(0, 15)].sort(() => Math.random() - 0.5);

    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = ""; // Limpar tabuleiro anterior

    imagePairs.forEach(imgUrl => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.image = imgUrl;

        // Adicionar evento de clique na carta
        card.addEventListener("click", () => flipCard(card));

        gameBoard.appendChild(card);
    });
}

