const computerChoiceDisplay = document.getElementById('computer-choice'); 
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const RockPaperScissorButtons = Array.from(document.getElementsByClassName("choiceButton")); 
const computerChoiceList = ['rock', 'paper', 'scissors']; 
const resetButton = document.getElementById('resetButton'); 
const allDisplays = Array.from(document.getElementsByClassName('display'));
const resetScreen = document.getElementById('resetButtonContainer');
let userChoice 
let computerChoice
let result

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * computerChoiceList.length); //Could be * 3 as well
    computerChoice = computerChoiceList[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice; 
}

function autoResetGame() {
    allDisplays.forEach(display => {
        display.innerHTML = '';
    });
    computerChoiceDisplay.style.opacity = '0'; 
    resultDisplay.style.opacity = '0';
    computerChoiceDisplay.style.transition = 'none';
    resultDisplay.style.transition = 'none'; 
};


function getResult() {
    if (computerChoice === userChoice) {
        result = 'Tie!'; 
    } 
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Winner Winner Chicken Dinner!';
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Winner Winner Chicken Dinner!'; 
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Winner Winner Chicken Dinner!'; 
    }
    else {
        result = 'You Lost :/'; 
    }
    return resultDisplay.innerHTML = result; 
}

RockPaperScissorButtons.forEach(button => button.addEventListener('click', (e) => {
    if (yourChoiceDisplay.innerHTML != '') {
        autoResetGame()
    } else if (yourChoiceDisplay.innerHTML === '') {
        userChoice = e.target.id;
        yourChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
        computerChoiceDisplay.style.transition = 'opacity .7s ease-in .8s';
        resultDisplay.style.transition = 'opacity .2s ease-in 2s';
        computerChoiceDisplay.style.opacity = '1';
        resultDisplay.style.opacity = '1';
        setTimeout(() => {
            resetScreen.style.display = 'flex';
        }, 2500);
    }
}));


/*RockPaperScissorButtons.forEach(button => button.addEventListener('click', (e) => {
    if (yourChoiceDisplay != '') {
        autoResetGame()
    } else if (yourChoiceDisplay === '') {
        userChoice = e.target.id;
        yourChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
        computerChoiceDisplay.style.transition = 'opacity .7s ease-in .8s';
        resultDisplay.style.transition = 'opacity .2s ease-in 2s';
        computerChoiceDisplay.style.opacity = '1';
        resultDisplay.style.opacity = '1';
    }
}));*/

resetButton.addEventListener('click', () => {
    allDisplays.forEach(display => {
        display.innerHTML = '';
    });
    computerChoiceDisplay.style.opacity = '0'; 
    resultDisplay.style.opacity = '0';
    computerChoiceDisplay.style.transition = 'none';
    resultDisplay.style.transition = 'none'; 
    resetScreen.style.display = 'none';
});


//Animation for header 
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });











