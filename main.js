
// function Enum(...a) {
//   const values = {}
//   a.map((x,n) => values[x["Name"]] = x)
//   return Object.freeze(values)
// }
//
// RankType = Enum(NewbieRank, ApprenticeRank, GodRank)
let gameAdvanced = false;

Player.init();

window.setInterval(function() {

Player.advanceState();
gameAdvanced = true;

}, 100);

function frame() {
  if(gameAdvanced) {
    Player.updateDisplay();
    gameAdvanced = false;
  }

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
