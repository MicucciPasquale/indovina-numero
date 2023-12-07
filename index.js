var randomNumber = Math.floor(Math.random() * 20) + 1; // crea un numero casuale tra 1 e 20
var attemptsLeft = 5;
var previousRecord = 0;

/*
function checkGuess() {
    var userGuess = document.getElementById('guess').value;

    if (userGuess == randomNumber) {
        document.getElementById('output').innerHTML = 'Complimenti! Hai indovinato!';
        
        if (attemptsLeft < previousRecord || previousRecord === 0) {
            previousRecord = attemptsLeft;
            document.getElementById('previous-record').innerHTML = previousRecord;
        }
    } else {
        attemptsLeft--;
        document.getElementById('attempts-left').innerHTML = attemptsLeft;

        if (attemptsLeft === 0) {
            document.getElementById('output').innerHTML = 'Hai esaurito i tentativi. Il numero era ' + randomNumber;
            attemptsLeft = 5; // reimposta il numero di tentativi
            document.getElementById('attempts-left').innerHTML = attemptsLeft;
            randomNumber = Math.floor(Math.random() * 20) + 1; // crea un nuovo numero casuale
        } else {
            document.getElementById('output').innerHTML = 'Ritenta!';
        }
    }
}
*/
function checkGuess() {
    var userGuess = document.getElementById('guess').value;
    var outputParagraph = document.getElementById('output');

    if (userGuess == randomNumber) {
        outputParagraph.innerHTML = 'Complimenti! Hai indovinato!';
        outputParagraph.style.fontSize = '40px'; 
        outputParagraph.style.color="green";
        
    } else {
        attemptsLeft--;
        document.getElementById('attempts-left').innerHTML = attemptsLeft;

        if (attemptsLeft === 0) {
            outputParagraph.innerHTML = 'Non hai indovinato. Il numero era ' + randomNumber;
            outputParagraph.style.fontSize = '40px'; 
            outputParagraph.style.color="purple";
            attemptsLeft = 5;
            document.getElementById('attempts-left').innerHTML = attemptsLeft;
            randomNumber = Math.floor(Math.random() * 20) + 1;
        } else {
            outputParagraph.innerHTML = 'Ritenta!';
            outputParagraph.style.fontSize = '50px'; 
            outputParagraph.style.color="blue";
        }
    }
}

