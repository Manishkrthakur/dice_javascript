var randomnumber1=Math.floor(Math.random()*6)+ 1;
var randomdice="dice"+randomnumber1+".png";
var randomimage="./images/"+randomdice;
document.querySelectorAll("img")[0].setAttribute("src",randomimage);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2="./images/"+"dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);


if(randomnumber1>randomNumber2){
    document.querySelector("h1").innerHTML="play 1 win!";
}
else if(randomNumber2>randomnumber1){
    document.querySelector("h1").innerHTML="play 2 win!";
}
else{
    document.querySelector("h1").innerHTML="draw !";
}