

let power = 0;
let trainingSpeed = 1;
let currentTrainingSpeed = 0;

let startPower = 0;
let startTrainingSpeed = 1;

document.getElementById("currentPower").innerHTML = startPower;
document.getElementById("currentTrainingSpeed").innerHTML = startTrainingSpeed;


function train(number) {
  power = power + number;
  document.getElementById("currentPower").innerHTML = power;
}

function startTraining() {
  currentTrainingSpeed = trainingSpeed
}

function stopTraining() {
  currentTrainingSpeed = 0;
}

window.setInterval(function() {
train(currentTrainingSpeed)

}, 1000);
