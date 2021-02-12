let dictionary = "JAVASCRIPT";
//let answerArray = dictionary.split("");
let count = 0;
let countMax = 6;
let correctLetters = 0;
let wrongLetters = 0;

//remplacer le mot par underscore
let toGuess = [];
for (let i = 0; i < dictionary.length; i++) {
    toGuess[i] = "_";
}
//toGuess[3] = "p"; afin de tester si une lettre se met bien a la bonne position ... et toGuess fonctionne !!!
//console.log(toGuess);
document.getElementById("answer").innerHTML = toGuess.join("  ");


//au clic comparer si la lettre est dans le mot

const btn = Array.from(document.querySelectorAll('button'));
btn.forEach(button => {
    button.addEventListener("click", function check() {
        count = 0;

        for (let j = 0; j < dictionary.length; j++) {

            if (dictionary[j] === button.innerHTML) {
                toGuess[j] = button.innerHTML;
                count++;
                console.log(count);

            } //remplacer par la lettre si correcte
            document.getElementById("answer").innerHTML = toGuess.join("  ");


        }
        if (count == 0) {
            wrongLetters++;

        } else {
            correctLetters += count;
        }
        if (wrongLetters == countMax) {

            document.getElementById("score").innerHTML = "You lose the correct word was:  " + dictionary;
        } else if (correctLetters == dictionary.length) {
            document.getElementById("score").innerHTML = "You are the Champion: You Win !";

        }



    });
});
/*


function comments() {
    // nombre de vies et fin
    showLives.innerHTML = "Vous avez " + lives + " vies.";
    // si l'utilisateur n'a plus de vie et qu'il y a encore des espaces vides à trouver, RATÉ
    if ((lives < 1) && (space > 0)) {
        showLives.innerHTML = "Game Over... Le mot était : " + mot.toUpperCase();
        fin();
    }
    // sinon si l'utilisateur a encore des vies et qu'il n'y a plus d'espaces vides à trouver, GAGNÉ
    else if ((lives > 0) && (space < 1)) {
        showLives.innerHTML = "You win !";
        fin();
    }
}


/*function check(test) {
    let counter = 0;
    for (let i = 0; i < motSplite.length; i++) {
        // si la lettre est dans le mot,
        // alors afficher la lettre à l'indice où est la lettre
        if (motSplite[i] === test) {
            // si true mettre la lettre au bon endroit
            // motSplite[i] doit être dans innerHTML
            document.getElementById(motSplite[i] + i).innerHTML = test;
            counter++;
            space--;
        }
        comments();
    }
    // si la boucle n'a pas trouvé la lettre, le counter reste à 0, on perd 1 vie
    if (counter == 0) {
        lives--;
        comments();
        animate();
    }
}*/