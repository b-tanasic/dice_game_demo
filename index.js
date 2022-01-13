//First dice.
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSrc = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

//Second dice.
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);



if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner-msg").style.visibility = "visible";
    document.querySelector(".winner-msg").innerHTML = "Bojan Wins ! 🏆";

}

else if (randomNumber2 > randomNumber1) {
    document.querySelector(".winner-msg").style.visibility = "visible";
    document.querySelector(".winner-msg").innerHTML = "Computer Wins ! 🏆";
}

else {
    document.querySelector(".winner-msg").style.visibility = "visible";
    document.querySelector(".winner-msg").innerHTML = "It's a tie";
}
