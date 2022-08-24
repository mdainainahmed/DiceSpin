// random number for dice 1
var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;

var imgSrc1 = "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imgSrc1);


// random number for dice 2
var randomNumber2 =  Math.floor( Math.random() * 6 ) + 1;

var imgSrc2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);


// check win
if( randomNumber1 > randomNumber2 )
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
else if( randomNumber2 > randomNumber1 )
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
else
    document.querySelector("h1").textContent = "Draw!";
