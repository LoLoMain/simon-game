// this file for the definitions of the functions

// Constructor Function Below
function SimonGame () {
this.colors = ['red', 'green', 'blue', 'yellow'];

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

this.showSequence();

};
// Chooses one of the 4 colors at random and adds to the sequence
SimonGame.prototype.addColor = function(){
   var randomIndex = Math.floor(Math.random() * 4);
   this.sequence.push(this.colors[randomIndex]);

};

SimonGame.prototype.showSequence = function (){
var ourSequence = this.sequence;

 var  i = 0;

$('#buttons-container').addClass('blocked');
var intervalID = setInterval(function(){

  if( i > ourSequence.length) {
    clearInterval(intervalID);
    $('#buttons-container').removeClass('blocked');
    return;
  }


  // turns on the light by adding class - lightOn
  $( '#' + ourSequence[i]).addClass('lightOn');
  // $('#red').addClass('lightOn');


  setTimeout(function (){
    $('button').removeClass('lightOn');

  }, 700);

i+=1;
console.log(i);

},1500);

};


SimonGame.prototype.nextRound = function() {
this.addColor();
this.showSequence();
this.userClickCount = 0;


$ ('#counter').html(this.round);
this.round +=1;

};


SimonGame.prototype.gameOver = function() {
   this.sequence =[];
   this.userClickCount =0;
   this.round = 1;
   $ ('#counter').html(0);

   this.startGame();
};
