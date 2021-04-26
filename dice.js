var scores , roundScore , activePlayer , gamePlaying ;

init();


document.querySelector('.btn-roll').addEventListener('click' , function() {
   if(gamePlaying){
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
       } 
       else {
         nextPlayer();
        
      }
   }
});

   
   

        

document.querySelector('.btn-hold').addEventListener('click' , function() {
   if(gamePlaying){
      //add current score to the global score
      scores[activePlayer] += roundScore;

   //update the ui
      document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

      var input = document.querySelector('.finalScore').value;
      var winningScore ;

      if(input){
         winningScore = input;
      }
      else{
         winningScore = 100;
      }


   //check if the player is win
      if(scores[activePlayer] >= winningScore){
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!' ;
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');   
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;   
      }
      else {
         nextPlayer();
      }
   }
});

   document.querySelector('.btn-new').addEventListener('click' , init);

function nextPlayer() {
   activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        
}

function init(){
   scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
   
 document.getElementById('score-0').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 document.querySelector('#name-0').textContent = 'PLAYER 1';
 document.querySelector('#name-1').textContent = 'PLAYER 2';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
 document.querySelector('.player-1-panel').classList.remove('active');
};

