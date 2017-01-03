function Game(turns) {
  this.gameName = "Simon";
  this.maxTurns = turns;
  this.gameTurns = [];
  this.currentTurn = [];
  //
  for(i = 0; i < maxTurns; i++) {
    this.gameTurns.push(Math.floor(Math.random()*4));
  }
  this.currentTurn.push(this.gameTurns[0]);
}

// SimonGame.prototype.AI = function(){
//   return Math.floor(Math.random() * 4) + 1;
// }

function Player() {
  this.playerTurn = [];
}

exports.gameModule = Game;
