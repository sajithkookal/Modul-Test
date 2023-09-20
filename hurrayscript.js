
function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

const rulesModal = document.getElementById("rules-modal");
const rulesButton = document.querySelector("#rulesBtn");
const closeModalBtn = document.getElementById("close");
const playAgainBtn = document.querySelector("#play-again");


window.history.forward();
rulesButton.addEventListener('click',function(){
    rulesModal.style.display = "block";
});
closeModalBtn.addEventListener('click',function(){
    rulesModal.style.display = "none";
});
playAgainBtn.addEventListener('click',function(){
    window.location.href = "index.html";
});
