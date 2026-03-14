document.addEventListener("DOMContentLoaded", function(){

const startButton = document.getElementById("startButton");
const home = document.getElementById("home");
const letterPage = document.getElementById("letterPage");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

startButton.onclick = function() {
    home.style.display = "none";
    letterPage.style.display = "block";
};

envelope.onclick = function() {
    letter.style.display = "block";
};

});
