// this file for the invoking the functions


var myGame = new SimonGame();

$(document).ready(function() {
  myGame.startGame();
});


$(document).ready(function(){
   $('button').click(function (){
     var colorJustClicked = $(this).prop('id');

     var currentSequenceColor = myGame.sequence[myGame.userClickCount];

     if (currentSequenceColor === colorJustClicked) {
      //  sequence is correct so far
      // alert("Yay! that's CORRECT");
      myGame.userClickCount +=1;

      if (myGame.userClickCount >= myGame.sequence.length) {
        // alert("Sequence Correct!");
        myGame.nextRound();
     }
   }
     else {
      //  game over
      alert("yOu LoSE!!! TRY AGAIN");
      myGame.gameOver();

     }

   });
});


$(document).ready(function(){

});
