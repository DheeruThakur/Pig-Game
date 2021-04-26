//quiz  game
(function() {
function Question(question, answers,correct) {
 this.question = question;
 this.answers = answers;
 this.correct = correct;
 }

Question.prototype.displayQuestion = function() {
 console.log(this.question);
 for(var i=0; i<this.answers.length; i++){
  console.log(i + ':' + this.answers[i]);
   }
}

Question.prototype.checkAns = function(ans , callback) {
  var sc;
 if(ans === this.correct){
  console.log('correct answer')
  sc = callback(true);
 }else{
   console.log('wrong answer , Try Again.')
   sc = callback(false);
  }
  this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
  console.log('Your score is ' + score);
  console.log('-----------------------------------------------------------------');
}



 var q1 = new Question('what is owner\'s name ?' , ['dheeru' , 'ashu'] , 0);

 var q2 = new Question('what is your surname ?' , ['shukla' , 'chauhan' ,'thakur'] , 2);

 var q3 = new Question('what is your job ?' , ['coder' , 'developer' ,'designer'] , 1);
 var questions = [q1 , q2 , q3];
 var score = 0 ;

 function Score() {
   var sc = 0;
    return function(correct){
      if(correct){
       sc++;
    }
   return sc;
  }
}

 var keepScore = Score();
 
 function nextQuestion() {
  
  var n = Math.floor(Math.random()*questions.length);
 
  questions[n].displayQuestion();
 var answer =  prompt("what is the correct answer ?");
 
 

 if(answer !== 'exit'){
  questions[n].checkAns(parseInt(answer) , keepScore);
  nextQuestion();
 };
 
 };

 nextQuestion();
})();
