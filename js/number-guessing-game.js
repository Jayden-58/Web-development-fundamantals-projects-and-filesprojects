function runGame(){
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
    const randomNumber = Math.random() * 100;
    const randomInterger = Math.floor(randomNumber);
    const target = randomInterger + 1;

    do{
        guessString = prompt('guess a number 1-100 \n\nWhat is the number?');
        numTries++;
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    } while(!correct);
    alert('yay! you did it\n' + numTries + ' tries');

}
function checkGuess(guessNumber, target){
    let correct = false;

    if(isNaN(guessNumber)){
        alert('not a number\n\nplease enter a number');
    }else if((guessNumber < 1)||(guessNumber > 100)){
        alert('that is out of range\n\nplease enter a number between 1-100');
    }else if(guessNumber >target){
        alert('that number is too big');
    }else if(guessNumber < target){
        alert('that number is too small');
    }
    else{
        correct = true;
    }
    return correct;
}