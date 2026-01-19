let randomNumber = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber + ".png");
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");
function decideWinner(randomNumber, randomNumber2) {
    if (randomNumber > randomNumber2) {
        return document.querySelector("h1").innerHTML = "Player 1 Wins"
    }
    else if (randomNumber < randomNumber2) {
        return document.querySelector("h1").innerHTML = "Player 2 Wins"
    }
    else {
        return document.querySelector("h1").innerHTML = "Draw"
    }
}
console.log(decideWinner(randomNumber, randomNumber2))