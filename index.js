var dice1_number = Math.floor(Math.random() * 6 + 1);
var dice2_number = Math.floor(Math.random() * 6 + 1);

var dice1 = "images/dice" + dice1_number + ".png";
var dice2 = "images/dice" + dice2_number + ".png";

document.querySelectorAll("img")[0].setAttribute("src", dice1);
document.querySelectorAll("img")[1].setAttribute("src", dice2);

if (dice1_number > dice2_number) {
  document.querySelector("h1").textContent = "Player 1 WON!";
} else if (dice1_number < dice2_number) {
  document.querySelector("h1").textContent = "Player 2 WON!";
} else {
  document.querySelector("h1").textContent = "It is a DRAW!";
}
