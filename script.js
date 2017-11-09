var words = ["tangerine", "dioxide", "buzz", "albatross","zeitgeist","epilogue","legitimate","frolic"];
var guesses = 9;
var guessedLetters = [];
var word = "";

function startGame(){
    word = words[Math.floor(Math.random() * words.length)];
    document.getElementById("spaces").innerHTML=printWord();
}

function printWord(){
    var spaces = " ";
    var table="<table>";
    for(i=0; i<word.length; i++) {

        if(guessedLetters.indexOf(word[i])>-1){
            spaces+=word[i];
        }else{
            spaces+="_ ";
            guessedLetters+=guessedLet;
            table += "<tr></td>";
            table += guessedLetters;
            table += "</td></tr>";

        }


        //ask whether the letter we are on is in guessedLetters or not
    }
    table+="</table>";
    document.getElementById("table").value = table;
    return spaces;

}

function guessLetter(){
    var guessedLet=document.getElementById("guessedLet").value;
    guessedLetters+=guessedLet;
    //handle a guess, add it to guessedLetters, increment turns
    //determine win or loss



}