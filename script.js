// script.js
const riddleText = document.getElementById('riddle-text');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const resultText = document.getElementById('result-text');

// Adivinanzas
const riddles = [
  {
    question: '¿Qué tiene cuatro patas y una cola?',
    answer: 'una silla'
  },
  {
    question: '¿Qué tiene ojos pero no puede ver?',
    answer: 'una aguja'
  },
  {
    question: '¿Qué cae pero nunca se rompe?',
    answer: 'la noche'
  }
];

// Seleccionar una adivinanza aleatoria
function getRandomRiddle() {
  const randomIndex = Math.floor(Math.random() * riddles.length);
  return riddles[randomIndex];
}

// Mostrar la adivinanza
function displayRiddle() {
  const riddle = getRandomRiddle();
  riddleText.textContent = riddle.question;
}

// Validar la respuesta
function checkGuess() {
  const userGuess = guessInput.value.toLowerCase();
  const currentRiddle = getRandomRiddle();

  if (userGuess === currentRiddle.answer) {
    resultText.textContent = '¡Correcto! Has adivinado la adivinanza.';
  } else {
    resultText.textContent = 'Incorrecto. Inténtalo de nuevo.';
  }

  guessInput.value = '';
}

// Inicializar el juego
displayRiddle();

submitBtn.addEventListener('click', checkGuess);
