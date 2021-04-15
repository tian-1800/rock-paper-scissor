function computerPlay() {
    let choice = ['rock', 'paper', 'scissor'];
    let rndIndex = Math.floor(Math.random()*choice.length);
    return choice[rndIndex];
}
