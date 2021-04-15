function computerPlay() {
    let choice = ['rock', 'paper', 'scissor'];
    let rndIndex = Math.floor(Math.random()*choice.length);
    return choice[rndIndex];
}
function playRound(playerSelect, computerSelect) {
    let choice = ['rock', 'paper', 'scissor'];
    let playerIndex = choice.indexOf(playerSelect.toLowerCase());
    let compIndex = choice.indexOf(computerSelect);
    if ((playerIndex+1)%3 == compIndex) {
        return "computer";
    } else if (playerIndex == compIndex) {
        return "draw";
    } else return "human";

}
function decideWinner(human,comp) {
    let score = human + " - " + comp;
    let message = "nobody wins, score is ";
    if (human>comp) {
        message = "You win, score is ";
    } else if (human<comp){
        message = "You lose, score is ";
    }
    return message+score;
}
function game() {
    let human = 0;
    let comp = 0;
    for (let i=0; i<5; i++) {
        let userSelect = prompt("Enter your choice (rock/paper/scissor)");
        let winner = playRound(userSelect, computerPlay());
        console.log(winner + " wins!")
        if (winner === "human") human++;
        else if(winner === "computer") comp++;
    }
    return decideWinner(human,comp);
}
console.log(game());