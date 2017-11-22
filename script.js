var animals = ["albatross", "wombat", "squirrel", "chameleon"];
var foods = ["tangerine", "tabouleh", "popsicle", "zapote", "rambutan"];
var plants = ["manzanita", "lichen", "redwood"];
var guesses = 9;
var guessedLetters = [];
var word = "";
var possibleGuesses = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z"];

function startGame(){
    guessedLetters=[];
    guesses=9;
    document.getElementById("error").innerHTML="";
    document.getElementById("guessedLetters").innerHTML="";
    document.getElementById("guessesLeft").innerHTML="";
    document.getElementById("win/lose").innerHTML = "";
    getCategory();
    printWord();
}

function getCategory(){
    var category = document.getElementById("category").value;
    if(category==1){
        word = animals[Math.floor(Math.random() * animals.length)];
    }
    if(category==2){
        word = plants[Math.floor(Math.random() * plants.length)];
    }
    if(category==3){
        word = foods[Math.floor(Math.random() * foods.length)];
    }
}

function printWord(){
    var result = "";
    for(i=0; i<word.length; i++) {
        if(guessedLetters.indexOf(word[i])>-1){
            result+=word[i];
        }else{
            result+="_ ";

        }
    }
    document.getElementById("result").innerHTML=result;
}

function handleGuess(){
    var guessedLet=document.getElementById("guessedLet").value;
    document.getElementById("error").innerHTML="";
    if(guessedLetters.indexOf(guessedLet)>-1){
        document.getElementById("guessedLet").value="";
        return document.getElementById("error").innerHTML="You already guessed that letter. Try again.";
    }
    if(possibleGuesses.indexOf(guessedLet.toLowerCase())<0){
        document.getElementById("guessedLet").value="";
        return document.getElementById("error").innerHTML="That is not a letter. Try again";
    }

    //increment guesses only when wrong
    guessedLetters.push(guessedLet);
    if(word.indexOf(guessedLet) == -1) {
        guesses--;
    }

    //format guessed letters array for display
    var outputString = "";
    for(var c = 0; c<guessedLetters.length; c++) {
        outputString += guessedLetters[c];
        outputString += ", ";
    }
    console.log(outputString);
    document.getElementById("guessedLetters").innerHTML = outputString.substring(0,outputString.length-2);

    document.getElementById("guessesLeft").innerHTML="You have " + guesses + " guesses remaining.";
    printWord();
    if(guesses==0) {
        document.getElementById("win/lose").innerHTML = "You are out of guesses! Game over.";
    }
    if(guesses==-1) {
        startGame();
    }
    document.getElementById("guessedLet").value="";
    document.getElementById("guessedWord").value="";

}

function winLose() {
    var result = document.getElementById("result").innerHTML;
    var guessedWord=document.getElementById("guessedWord").value;
    if (guessedWord==word){
        document.getElementById("result").innerHTML=guessedWord;
        document.getElementById("guessedWord").value="";
        return document.getElementById("win/lose").innerHTML = "You guessed it!"
    }
    if (result==word) {
        document.getElementById("win/lose").innerHTML = "You guessed it!";
    } else {
        document.getElementById("win/lose").innerHTML = "Close, but no cigar.";
        guesses--;
    }
}

