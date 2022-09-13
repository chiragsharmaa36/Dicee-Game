var randomNo1 = Math.floor(Math.random()*6)+1;
var randomNo2 = Math.floor(Math.random()*6)+1;

// alert("no1 "+randomNo1+" no2 "+randomNo2); 

document.querySelector(".img1").setAttribute("src", "Dicee Challenge - Starting Files/images/dice" + randomNo1 + ".png");

document.querySelector(".img2").setAttribute("src", "Dicee Challenge - Starting Files/images/dice" + randomNo2 + ".png");


if(randomNo1>randomNo2)
    document.querySelector("h1").innerHTML =  "🚩Player 1 Wins!";
else if(randomNo2>randomNo1)
    document.querySelector("h1").innerHTML =  "Player 2 Wins!🚩";
else
    document.querySelector("h1").innerHTML =  "Draw!";

