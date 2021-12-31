//Develop By Tarif Al Hasan
// select images
const rockImg = document.getElementById("rockImg");
const paperImg = document.getElementById("paperImg");
const scissorImg = document.getElementById("scissorImg");

// result
let result = document.getElementById("result");

// output
const Rock = "rock";
const Paper = "paper";
const Scissor = "scissor";

function getComputerInput() {
  let randomValue = Math.floor(Math.random() * 10);

  if (randomValue >= 0 && randomValue < 4) {
    return Rock;
  } else if (randomValue >= 4 && randomValue < 7) {
    return Paper;
  } else {
    return Scissor;
  }
}

function playGame(userInput) {
  let computerInput = getComputerInput();
  let randomNbrShow = document.getElementById("computerChoose");
  randomNbrShow.innerHTML = computerInput;
  console.log(computerInput);
  if (userInput == computerInput) {
    result.innerText = `Game Draw! Your input Is ${userInput} and Computer input was ${computerInput}`;
  } else if (
    (userInput == Rock && computerInput == Scissor) ||
    (userInput == Paper && computerInput == Rock) ||
    (userInput == Scissor && computerInput == Paper)
  ) {
    result.innerText = `Congratulations! YOU WON!! Your input Is ${userInput} and Computer input was ${computerInput}`;
  } else {
    result.innerText = `Opps! YOU LOST!!!  Your input Is ${userInput} and Computer input was ${computerInput}`;
  }
}
//Evan fire

rockImg.addEventListener("click", function () {
  userInput = Rock;
  playGame(userInput);
});
paperImg.addEventListener("click", function () {
  userInput = Paper;
  playGame(userInput);
});
scissorImg.addEventListener("click", function () {
  userInput = Scissor;
  playGame(userInput);
});
