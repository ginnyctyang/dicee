
// draw the dice again
function drawTheDiceAgain(){
  document.querySelector("h1").innerHTML="Draw the dice";
  document.querySelector("h1").style.color = "#4ECCA3";
}

drawTheDiceAgain();

// dice 1
function drawTheDice(){

var randomNumber1 = Math.floor(6*Math.random())+1;

if (randomNumber1==1){
document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if (randomNumber1==2){
document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if (randomNumber1==3){
document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if (randomNumber1==4){
document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if (randomNumber1==5){
document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else if (randomNumber1==6){
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

// dice 2
var randomNumber2 = Math.floor(6*Math.random())+1;
if (randomNumber2==1){
document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if (randomNumber2==2){
document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if (randomNumber2==3){
document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if (randomNumber2==4){
document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if (randomNumber2==5){
document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else if (randomNumber2==6){
document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

// compare two dice & call draw-the-dice function
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Playr 1 Win";
    document.querySelector("h1").style.color = "#ffffff";
    setTimeout(drawTheDiceAgain, 2000);
}

if (randomNumber1<randomNumber2){

  document.querySelector("h1").innerHTML="Playr 2 Win";
  document.querySelector("h1").style.color = "#ff0000";
  setTimeout(drawTheDiceAgain, 2000);
}

else if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Same Points";
        document.querySelector("h1").style.color = "#4ECCA3";
        setTimeout(drawTheDiceAgain, 2000);
}

}
