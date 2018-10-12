function SubmitAnswer(){
	var total=10;
	var score=0;
	//getting the user's answer
	var q1 = document.forms['QuizForm']['q1'].value;
	var q2 = document.forms['QuizForm']['q2'].value;
	var q3 = document.forms['QuizForm']['q3'].value;
	var q4 = document.forms['QuizForm']['q4'].value;
	var q5 = document.forms['QuizForm']['q5'].value;
	var q6 = document.forms['QuizForm']['q6'].value;
	var q7 = document.forms['QuizForm']['q7'].value;
	var q8 = document.forms['QuizForm']['q8'].value;
	var q9 = document.forms['QuizForm']['q9'].value;
	var q10 = document.forms['QuizForm']['q10'].value;
	//validation
	
	for(i=1;i<=total;i++)
	{
		if(eval('q'+i)== null || eval('q'+i)== ' ')
		{
			alert('you missed question'+i );
			return false;
		}
	}
	//Correct Answer
	var answers=["d","d","c","d","c","a","c","a","c","b"];
	//  check Answers
	for(i=1;i<=total;i++)
	{
	if( eval('q'+i) == answers[i-1]){
		score++;
	}
	}
	//display score
	var result= document.getElementById('results');
	result.innerHTML='<h3>Congratulations You Score  <span>'+score+'</span> Out Of <span>'+total+'</span></h3>';
	alert('You Score '+score+' Out Of '+total);
	return false;
}