// Dados do Quiz sobre Agro Sustentável
const quizData = {
    question: "Qual das alternativas abaixo é uma prática do Agro Sustentável?",
    options: [
        "Uso indiscriminado de água",
        "Plantio direto e rotação de culturas",
        "Desmatamento de áreas nativas",
        "Queima do solo antes do plantio"
    ],
    correct: 1 // Índice da resposta correta (Plantio direto...)
};

// Elementos do DOM
const questionEl = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("quiz-options");
const feedbackEl = document.getElementById("quiz-feedback");

// Inicializar o Quiz
function initQuiz() {
    questionEl.textContent = quizData.question;
    optionsContainer.innerHTML = "";

    quizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

// Verificar a Resposta
function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData.correct) {
        feedbackEl.textContent = "🌱 Correto! A rotação de culturas protege o solo e economiza recursos.";
        feedbackEl.style.color = "#2e7d32";
    } else {
        feedbackEl.textContent = "❌ Tente novamente! Lembre-se do foco na preservação.";
        feedbackEl.style.color = "#d32f2f";
    }
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", initQuiz);
