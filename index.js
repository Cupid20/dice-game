let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage); 
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}