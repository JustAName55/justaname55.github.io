RankList = [
  {"Name": "Baby", "MaximumPower": 5},
  {"Name": "Child", "MaximumPower": 10},
  {"Name": "Adult", "MaximumPower": 50},
  {"Name": "The One Above All", "MaximumPower": Infinity}];

const ROUND_FCTR = 1000;
const ROUND_DSP_FCTR = 10;

const Player = {
  init() {
    this.resetPlayer();
  },
  advanceState() {
    tempTime = new Date();
    elapsedTime = tempTime.getTime() - this.startDate.getTime();
    this.startDate = tempTime;

    let elapsedTimeSeconds = (elapsedTime / 1000);
    this.updatePower(elapsedTimeSeconds);
    this.updateRank();
  },
  saveData() {
    localStorage.setItem("PlayerData", JSON.stringify(this));
  },
  load() {
    let savedData = localStorage.getItem("PlayerData");
    if(savedData != null) {
      let oldPlayerObj = JSON.parse(savedData);
      this.power = oldPlayerObj.power;
      this.trainingSpeed = oldPlayerObj.trainingSpeed;
      this.rank = oldPlayerObj.rank;
    }
  },
  updatePower(elapsedTimeSeconds) {
    let powerGain = elapsedTimeSeconds * this.trainingSpeed;
    let totalPower = this.power + powerGain;
    let roundedValue = Math.round(ROUND_FCTR * totalPower) / ROUND_FCTR;

    this.power = roundedValue;
  },
  updateRank() {
    for(i = 0; i < RankList.length; i++)
    {
      if(this.power < RankList[i].MaximumPower) {
        this.rank = RankList[i];
        break;
      }
    }
  },
  updateDisplay() {
    this.displayPower.innerHTML = Math.round(ROUND_DSP_FCTR * this.power) / ROUND_DSP_FCTR;
    this.displayTrainingSpeed.innerHTML = this.trainingSpeed;
    this.displayRank.innerHTML = this.rank.Name;
  },
  resetPlayer() {
    this.power = 0;
    this.displayPower = document.getElementById("currentPower");
    this.trainingSpeed = 1;
    this.displayTrainingSpeed = document.getElementById("currentTrainingSpeed");
    this.rank = RankList[0];
    this.displayRank = document.getElementById("strengthLevel");
    this.startDate = new Date();
  }


}
