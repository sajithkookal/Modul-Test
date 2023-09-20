
function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

//----------------Buttons-------------------------------------
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const rulesBtn = document.querySelectorAll(".rules-btn");
const nextBtn = document.getElementById("next-btn");
const playAgainBtn = document.querySelector("#play-again");
const replayBtn = document.querySelector("#replay");
const closeModalBtn = document.getElementById("close");
const userbox1 = document.querySelector(".user-box-1");
const userbox2 = document.querySelector(".user-box-2");
const userbox3 = document.querySelector(".user-box-3");
const pcbox1 = document.querySelector(".pc-box-1");
const pcbox2 = document.querySelector(".pc-box-2");
const pcbox3 = document.querySelector(".pc-box-3");
const againBtn = document.querySelector(".again-btn");
const userpicImg = document.getElementById("userpicImg");
const pcpicImg = document.getElementById("pcpicImg");

const rulesModal = document.getElementById("rules-modal");
const rulesButton = document.querySelector("#rulesBtn");

const wonGame = document.querySelector(".won-game");


const playBoard = document.getElementById("play-board");


const resultBoard = document.getElementById("result-board");
const userResult = document.querySelector(".user-result");
const pcResult = document.querySelector(".pc-result");
let resultText = document.getElementById("result-text-1");
let resultText2 = document.getElementById("result-text-2");
let picked = document.querySelectorAll(".picked");

const computerScore = document.getElementById("computerscore");
const userScore = document.getElementById("userscore");
window.history.forward();
// Initialize scores from local storage or set to 0
let playerScoreDB = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScoreDB = parseInt(localStorage.getItem('computerScore')) || 0;
const images = [{
    imageName:'rock',
    url:'https://github.com/sajithkookal/Module-Test/blob/main/rock.png?raw=true'},
    {imageName: 'paper',
    url:'https://github.com/sajithkookal/Module-Test/blob/main/paper.png?raw=true'},
    {imageName: 'scissors',
    url:'https://github.com/sajithkookal/Module-Test/blob/main/scissor.png?raw=true'}];
computerScore.textContent = computerScoreDB;
userScore.textContent = playerScoreDB;


rockBtn.addEventListener('click',function(){
    playGame('rock')

});

paperBtn.addEventListener('click',function(){
    playGame('paper')
});
scissorBtn.addEventListener('click',function(){
    playGame('scissors')
});
nextBtn.addEventListener('click',function(){
    window.location.href = "hurray.html";
});
rulesButton.addEventListener('click',function(){
    rulesModal.style.display = "block";
});
closeModalBtn.addEventListener('click',function(){
    rulesModal.style.display = "none";
});
replayBtn.addEventListener('click',function(){
    replay();
});
playAgainBtn.addEventListener('click',function(){
    replay();
});
againBtn.addEventListener('click',function(){
    window.location.href = "index.html";
});

function replay(){
    playBoard.style.display = "grid";
    resultBoard.style.display = "none";
}
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    determineWinner(playerChoice, computerChoice);
   
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomPick = Math.floor(Math.random() * 3);
    return choices[randomPick];
}

// Function to determine the winner of a round
function determineWinner(playerChoice, computerChoice) {
    playBoard.style.display = "none";
    resultBoard.style.display = "flex";
    userbox1.style.background = "#8CC461";
    userbox2.style.background = "#8CC461";
    userbox3.style.background = "#8CC461";
    pcbox1.style.background = "#8CC461";
    pcbox2.style.background = "#8CC461";
    pcbox3.style.background = "#8CC461";
    resultText2.style.display = "block";
    playAgainBtn.style.display = "block";
    replayBtn.style.display = "none";
    nextBtn.style.display = "none";
    for (var i=0; i<images.length; i++){
    if(playerChoice === images[i].imageName){
        userpicImg.src = images[i].url;
     }
     if(computerChoice === images[i].imageName){
        pcpicImg.src = images[i].url;
     }
    }
    
    if (playerChoice === computerChoice) {

        resultText.textContent ="TIE UP";
        resultText2.style.display = "none";
        playAgainBtn.style.display = "none";
        replayBtn.style.display = "block";

        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
       
        userbox1.style.background = "#66b248";
        userbox2.style.background = "#32a62f";
        userbox3.style.background = "#289a27";
        resultText.textContent ="YOU WIN";
        nextBtn.style.display = "block";

        playerScoreDB = playerScoreDB+1;
        userScore.textContent = playerScoreDB;
        localStorage.setItem('playerScore', playerScoreDB.toString());
      
        return 'You win!';
    } else {
      
        pcbox1.style.background = "#66b248";
        pcbox2.style.background = "#32a62f";
        pcbox3.style.background = "#289a27";
        resultText.textContent ="YOU LOST";

        computerScoreDB++;
        computerScore.textContent = computerScoreDB;
        localStorage.setItem('computerScore', computerScoreDB.toString());

        return 'Computer wins!';
    }
}
