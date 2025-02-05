  function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
function getHumanChoice () {

  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5){

  let choice = prompt("Chose: Rock paper or scissors").toLowerCase();

  if (!["rock", "paper", "scissors"].includes(choice)) {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    return;
}

  let computerChoice = getRandomChoice();

  console.log(`You chose: ${choice}`);

  console.log(`Computer chose: ${computerChoice}`);

  if(choice === computerChoice){
    console.log("It's a draw");

  }
  else if((choice === "rock" && computerChoice === "paper") || (choice === "paper" && computerChoice === "scissors") || (choice === "scissors" && computerChoice === "rock")) {
    console.log("you loose");
    computerScore++;

  }
  else{
    console.log("you win");
    humanScore++;
  }

  if (humanScore === 5){
    console.log(" Winner is human");

  }else if (computerScore === 5){
    console.log("Winner is computer");

  }
}
}
