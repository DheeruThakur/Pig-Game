var scores , roundScore , activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

 document.getElementById('score-0').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click' , function() {

   //1. random number
   var dice = Math.floor(Math.random()*6) + 1 ;

   //2. display the results
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice' + dice + '.png' ;

   //3. update the roundScore if the rolled no. was not 1
       
       if(dice !== 1){
        roundScore = roundScore + dice ;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
       } else {

        nextPlayer();
        
       }
});


document.querySelector('.btn-hold').addEventListener('click' , function() {
   
   //add current score to the global score
      scores[activePlayer] += roundScore;
   console.log(activePlayer);
   //update the ui
      document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
      console.log(activePlayer);
      nextPlayer();
      

   //check if the player is win
      if(scores[activePlayer] >= 100){
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!' ;
      }

});

function nextPlayer() {
   activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}









//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

//scores[roundScore] = document.querySelector('#current-' + roundScore).textContent;
