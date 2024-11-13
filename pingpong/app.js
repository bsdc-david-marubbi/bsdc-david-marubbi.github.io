const p1score = document.querySelector("#p1score");
const p2score = document.querySelector("#p2score");
const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const resetbutton = document.querySelector("#resetbutton");
const maxScoreInput = document.querySelector("#maxScore");

let score1 = 0;
let score2 = 0;
let maxScore = 3;
let isGameOver = false;

const reset = () => {
    score1 = 0;
    score2 = 0;
    isGameOver = false;
    p1score.innerText = score1;
    p2score.innerText = score2;
    p1score.classList.remove('winner','loser');
    p2score.classList.remove('winner','loser');
}

maxScoreInput.addEventListener("change", function() {
    maxScore=parseInt(this.value);
    reset()
})

p1button.addEventListener("click", function (e) {
  if (!isGameOver) {
    score1++;
    if (score1 === maxScore) {
      isGameOver = true;
      p1score.classList.add('winner');
      p2score.classList.add('loser');
    }
    p1score.innerText = score1;
  }
});

p2button.addEventListener("click", function (e) {
    if (!isGameOver) {
        score2++;
        if (score2 === maxScore) {
          isGameOver = true;
          p2score.classList.add('winner');
          p1score.classList.add('loser');
        }
        p2score.innerText = score2;
      }
});

resetbutton.addEventListener("click", function () {
   reset();
});

