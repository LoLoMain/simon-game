// this file for the definitions of the functions

// Constructor Function Below
function SimonGame () {
this.colors = ['red', 'green', 'blue', 'yellow']

// our current sequence
this.sequence = [];

// keep track of where the user is in the sequence
this.userClickCount = 0;

// what the player's score is
this.round = 1;


}

SimonGame.prototype.startGame = function(){
console.log('Starting the Game!!!');

this.addColor();

};
// Chooses one of the 4 colors at random and adds to the sequence
SimonGame.prototype.addColor = function(){
   var randomIndex = Math.floor(Math.random() * 4);
   this.sequence.push(this.colors[randomIndex]);

};

SimonGame.prototype.showSequence = function (){
  // turns on the light by adding class - lightOn
  $( '#' + this.sequence[0]).addClass('lightOn');
  // $('#red').addClass('lightOn');


  setTimeout(function (){
    $('button').removeClass('lightOn');
  }, 700);
};

};
