const startButton = document.getElementById("startButton");
const home = document.getElementById("home");
const letterPage = document.getElementById("letterPage");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

startButton.addEventListener("click", function(){

home.style.display = "none";
letterPage.style.display = "block";

});

envelope.addEventListener("click", function(){

letter.style.display = "block";

});
