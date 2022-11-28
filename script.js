let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let myQuestions = [
	{
		question: "what is the name of darth vader's ship?",
		answers: {
			a: 'Rouge One',
			b: 'Executor',
			c: 'Milennium Falcon',
            d: 'Home One'
		},
		correctAnswer: 'b'
	},
	{
		question: "who trained luke skywalker ?",
		answers: {
			a: 'Yoda',
			b: 'Han Solo',
			c: 'C-3PO',
            d: 'Palpatine'
		},
		correctAnswer: 'a'
	}, {
		question: "What is the name of the Anakin Skywalker Master?",
		answers: {
			a: 'Palpatine',
			b: 'Ahsoka Tano',
			c: 'Obi-Wan Kenobi',
            d: 'Boba Fett'
		},
		correctAnswer: 'c'
	}, {
		question: "Who is Lukes's Mother?",
		answers: {
			a: 'Amilyn Holdo',
			b: 'Lei Organa',
			c: 'Mon Mothma',
            d: 'Padme Amidala'

		},
		correctAnswer: 'd'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
       
        let output = [];
        let answers;
    
        
        for(let i=0; i<questions.length; i++){
            
            
            answers = [];
    
            
            for(letter in questions[i].answers){
    
                
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        
        quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
	
        
        let answerContainers = quizContainer.querySelectorAll('.answers');
        
        
        let userAnswer = '';
        let numCorrect = 0;
        
        
        for(let i=0; i<questions.length; i++){
    
            
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            
            if(userAnswer===questions[i].correctAnswer){
                
                numCorrect++;
                
                
                answerContainers[i].style.color = 'lightgreen';
            }
           
            else{
                
                answerContainers[i].style.color = 'red';
            }
        }
    
        
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);