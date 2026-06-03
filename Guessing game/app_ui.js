document.addEventListener('DOMContentLoaded', () => {
  const maxForm = document.getElementById('max-form');
  const maxInput = document.getElementById('max-input');
  const startBtn = document.getElementById('start-btn');
  const gameArea = document.getElementById('game-area');
  const guessInput = document.getElementById('guess-input');
  const guessBtn = document.getElementById('guess-btn');
  const feedback = document.getElementById('feedback');
  const attemptsEl = document.getElementById('attempts');
  const resetBtn = document.getElementById('reset-btn');
  const giveUpBtn = document.getElementById('giveup-btn');

  let max = parseInt(maxInput.value) || 100;
  let random = null;
  let attempts = 0;

  function setFeedback(text, cls = '') {
    feedback.textContent = text;
    feedback.className = cls;
  }

  function startGame() {
    max = Math.max(1, parseInt(maxInput.value) || 100);
    random = Math.floor(Math.random() * max) + 1;
    attempts = 0;
    attemptsEl.textContent = `Attempts: ${attempts}`;
    setFeedback(`I'm thinking of a number between 1 and ${max}. Good luck!`, 'info');
    maxForm.classList.add('hidden');
    gameArea.classList.remove('hidden');
    guessInput.disabled = false;
    guessInput.value = '';
    guessInput.focus();
    console.log('Random number:', random);
  }

  function resetGame() {
    maxForm.classList.remove('hidden');
    gameArea.classList.add('hidden');
    setFeedback('Set a maximum and start a new game.', 'info');
    guessInput.disabled = false;
    guessInput.value = '';
  }

  function giveUp() {
    setFeedback(`The number was ${random}.`, 'warn');
    guessInput.disabled = true;
  }

  maxForm.addEventListener('submit', (e) => {
    e.preventDefault();
    startGame();
  });

  startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startGame();
  });

  guessBtn.addEventListener('click', () => {
    const value = parseInt(guessInput.value, 10);
    if (Number.isNaN(value) || value < 1 || value > max) {
      setFeedback(`Please enter a number between 1 and ${max}.`, 'warn');
      return;
    }
    attempts += 1;
    attemptsEl.textContent = `Attempts: ${attempts}`;
    if (value === random) {
      setFeedback(`🎉 Correct! The number was ${random}. You took ${attempts} attempt${attempts > 1 ? 's' : ''}.`, 'success');
      guessInput.disabled = true;
    } else if (value < random) {
      setFeedback('Too small — try a higher number.', 'hint');
    } else {
      setFeedback('Too large — try a lower number.', 'hint');
    }
    guessInput.select();
  });

  guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      guessBtn.click();
    }
  });

  resetBtn.addEventListener('click', resetGame);
  giveUpBtn.addEventListener('click', giveUp);

  // initial
  setFeedback('Choose a max and press Start Game.', 'info');
});
