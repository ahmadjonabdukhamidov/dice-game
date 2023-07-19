const diceEl = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const holdDice = document.querySelector(".btn--hold");
const newDice = document.querySelector(".btn--new");

diceEl.style.display = "none";

let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];
let gameOver = true;

function gameLine() {
  rollDice.addEventListener("click", () => {
    if (gameOver) {
      diceEl.style.display = "block";
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      diceEl.src = `dice-${randomNumber}.png`;
      currentScore += randomNumber;

      if (randomNumber !== 1) {
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer == 0 ? 1 : 0;
        currentScore = 0;
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
      }
    }
  });

  holdDice.addEventListener("click", () => {
    if (gameOver) {
      totalScore[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        totalScore[activePlayer];
      if (totalScore[activePlayer] >= 100) {
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
        gameOver = false;
      } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer == 0 ? 1 : 0;
        currentScore = 0;
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
      }
    }
  });
}

gameLine();

newDice.addEventListener("click", () => {
  diceEl.style.display = "none";
  let activePlayer = 0;
  let score = [0, 0];
  let gameOver = true;
  current0.textContent = 0;
  current1.textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
});
