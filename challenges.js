var scores , roundScore , activePlayer , gamePlaying ;

init();


document.querySelector('.btn-roll').addEventListener('click' , function() {
   if(gamePlaying){
      //1. random number
   var dice1 = Math.floor(Math.random()*6) + 1 ;
   var dice2 = Math.floor(Math.random()*6) + 1 ;

   //2. display the results
     
      document.getElementById('dice1').style.display = 'block';
      document.getElementById('dice2').style.display = 'block';
      document.getElementById('dice1').src = 'dice' + dice1 + '.png' ;
      document.getElementById('dice2').src = 'dice' + dice2 + '.png' ;

   //3. update the roundScore if the rolled no. was not 1
 //        if (prevScore === 6 && dice === 6){
 //         scores[activePlayer] = 0;
 //         document.getElementById('score-' + activePlayer).textContent = '0';
 //         nextPlayer();

 // }
 //       else if(dice !== 1){
 //        roundScore = roundScore + dice ;
 //        document.querySelector('#current-' + activePlayer).textContent = roundScore;
 //       }
 //       else {
 //         nextPlayer();
        
 //      }
 //      prevScore = dice;


 if(dice1 !== 1 && dice2 !== 1){
  roundScore = roundScore + dice2 + dice1 ;
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

   //check if the player is win
      if(scores[activePlayer] >= 100){
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!' ;
         document.getElementById('dice1').style.display = 'none';
         document.getElementById('dice2').style.display = 'none';
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
        
        document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';
        
}

function init(){
   scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
// prevScore = 0;

document.getElementById('dice1').style.display = 'none';
document.getElementById('dice2').style.display = 'none';

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

