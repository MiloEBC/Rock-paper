  function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
function getHumanChoice () {
  let choice = prompt("Chose: Rock paper or scissors").toLowerCase();

  let computerChoice = getRandomChoice();

  console.log(`You chose: ${choice}`);
  console.log(`Computer chose: `);

}

