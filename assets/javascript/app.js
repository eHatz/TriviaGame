//Albert Einstein, in his theory of special relativity, determined that the laws of physics are the same for 
//all non-accelerating observers, and he showed that the speed of light within a vacuum is the same no matter 
//the speed at which an observer travels. Based on this theory, if a tree falls in the woods, how many pancakes
//does the bear have?

// click on small craig

// wait for it

// click on the green button

// click on jump scare

//choose the best presidential candidate

//what was the answer to question 2

//click on the biggest troll


var questNum = 0;
var counter;
var pelegTime;
var rhetoricalTime;
var allQuestions = {
	time: 30,
	startGame: function(){ // initial button
		questNum = 0;
		var startBtn = $('<button/>', {
			text: 'Start!',
			id: 'start',
			class: 'btn btn-primary answerButtons'
		});
		$('.ansDiv').html(startBtn);
		$('#start').on('click', allQuestions.question1);
	},
	timer: function() {
		var currentTime = allQuestions.time;
		counter = setInterval(startTimer, 1000);
		$('.time').html('30');
		function startTimer() {
			$('.time').html(currentTime);
			if (currentTime <= 0){
				clearInterval(counter);
				allQuestions.wrong();
			}
			currentTime--
		}
	},
	wrong: function() {
		var wrongSound = $('<audio>', {
			src: 'assets/images/wrong-sound.mp3',
			id: 'wrong-Sound',
			type: 'audio/mpeg',
		});
		$(wrongSound)[0].play();
		clearInterval(counter);
		clearInterval(pelegTime);
		clearInterval(rhetoricalTime);
		$('.time').html('');
		$('.questDiv').html('');
		$('.ansDiv').html('<img id="redX" src="assets/images/Red-X.png" />');
		$('#redX').delay(500).fadeOut();
		setTimeout(allQuestions.check, 1000);
	},
	right: function() {
		var rightSound = $('<audio>', {
			src: 'assets/images/clap2.mp3',
			id: 'right-Sound',
			type: 'audio/mpeg',
		});
		$(rightSound)[0].play();
		clearInterval(counter);
		clearInterval(pelegTime);
		clearInterval(rhetoricalTime);
		$('.time').html('');
		$('.ansDiv').html('');
		$('.questDiv').html('');
		$('.ansDiv').html('<img id="clap" src="assets/images/clap.gif" />');
		$('#clap').delay(1000).fadeOut();
		setTimeout(allQuestions.check, 1500);
	},
	check: function() {
		if (questNum === 1) {allQuestions.question2();} 
		else if (questNum === 2){allQuestions.question3();}
		else if (questNum === 3){allQuestions.question4();}
		else if (questNum === 4){allQuestions.question5();}
		else if (questNum === 5){allQuestions.question6();}
		else if (questNum === 6){allQuestions.question7();}
		else if (questNum === 7){allQuestions.question8();}
		else if (questNum === 8){allQuestions.question9();}
		else if (questNum === 9){allQuestions.startGame();}		
	},
	question1: function() {
		questNum++
		allQuestions.timer();
		var q1No1 = $('<button>', {
			text: 'No',
			id: 'q1No1',
			class: 'btn btn-success answerButtons'
		});
		var q1No2 = $('<button>', {
			text: 'No',
			id: 'q1No2',
			class: 'btn btn-danger answerButtons'
		});
		var yes = $('<span>', {
			text: 'Yes',
			id: 'yes'
		})
		$('.questDiv').html(questNum + '. Are You Sure?')
		$('.ansDiv').html(q1No1);
		$('.ansDiv').append(yes);
		$('.ansDiv').append(q1No2);
		$('#q1No2').on('click', allQuestions.wrong);
		$('#yes').on('click', allQuestions.right);
		$('#q1No1').on('click', allQuestions.wrong);
	},
	question2: function() {
		questNum++
		allQuestions.timer();

		var q2Correct = $('<button>', {
			text: 'Correct',
			id: 'q2Correct',
			class: 'btn btn-primary answerButtons'
		});
		var q2Incorrect = $('<button>', {
			text: 'Incorrect',
			id: 'q2Incorrect',
			class: 'btn btn-primary answerButtons'
		});
		$('.questDiv').html(questNum + '. Choose The Right Answer')
		$('.ansDiv').html(q2Correct);
		$('.ansDiv').append(q2Incorrect);
		$('#q2Incorrect').on('click', allQuestions.right);
		$('#q2Correct').on('click', allQuestions.wrong);
	},
	question3: function() {
		questNum++
		allQuestions.timer();

		$('.questDiv').html(questNum + '. Click The Biggest Peleg');
		$('.ansDiv').html('<img id="peleg" src="assets/images/peleg.png" width=100px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=50px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=150px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=80px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=200px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=120px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=75px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=240px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=190px;/>');
		$('.ansDiv').append('<img id="peleg" src="assets/images/peleg.png" width=25px;/>');
		function bigPeleg() {
			$('.ansDiv').html('<img id="bigPelegImg" src="assets/images/peleg.png" width=500px;/>');
			$('#bigPelegImg').on('click', allQuestions.right);
		}
		pelegTime = setTimeout(bigPeleg, 10000);
		$('.ansDiv #peleg').on('click', allQuestions.wrong);
	},
	question4: function() {
		questNum++
		allQuestions.timer();

		$('.questDiv').html(questNum + '. Choose The Best Presidential Candidate');
		$('.ansDiv').html('<img id="q4Trump" src="assets/images/trump.jpg" width=200px;/>');
		$('.ansDiv').append('<img id="q4Answer" src="assets/images/poop.jpeg" width=200px;/>');
		$('.ansDiv').append('<img id="q4Hillary" src="assets/images/hillary.jpg" width=200px;/>');
		$('#q4Answer').on('click', allQuestions.right);
		$('#q4Trump').on('click', allQuestions.wrong);
		$('#q4Hillary').on('click', allQuestions.wrong);
	},
	question5: function() {
		questNum++
		allQuestions.timer();
		var q5Ans = $('<span>', {
			text: '5',
			id: 'q5Answer'
		});		
		$('.questDiv').html(q5Ans);
		$('.questDiv').append('. Albert Einstein, in his' + ('<img id="theory" src="assets/images/theory.png" width=70px;/>') + 'of special relativity, determined that the laws of physics are the same for all non-accelerating observers, and he showed that the speed of light within a vacuum is the same no matter the speed at which an observer travels. Based on this' + ('<img id="theory" src="assets/images/theory.png" width=70px;/>') + ', if a tree falls in the woods and no one is around, how many pancakes does the bear have?');
			
			var q5No1 = $('<button>', {
				text: 'Just Enough',
				id: 'q5No1',
				class: 'btn btn-primary answerButtons'
			});
			var q5No2 = $('<button>', {
				text: 'Bear-ly Any',
				id: 'q5No2',
				class: 'btn btn-primary answerButtons'
			});
			var q5No3 = $('<button>', {
				text: 'NaN',
				id: 'q5No3',
				class: 'btn btn-primary answerButtons'
			});

			$('.ansDiv').html(q5No1);
			$('.ansDiv').append(q5No2);
			$('.ansDiv').append(q5No3);

			$('#q5No1').on('click', allQuestions.wrong);
			$('#q5No2').on('click', allQuestions.wrong);
			$('#q5No3').on('click', allQuestions.wrong);
			$('#q5Answer').on('click', allQuestions.right);
	},
	question6: function() {
		questNum++
		allQuestions.timer();
		var q6Ans = $('<span>', {
			text: 'Craig',
			id: 'q6Answer'
		});

		$('.questDiv').html(questNum + '. Click On The Smallest ');
		$('.questDiv').append(q6Ans);
		$('.ansDiv').html('<img id="craig" src="assets/images/craig.png" width=120px;/>');
		$('.ansDiv').append('<img id="craig" src="assets/images/craig.png" width=150px;/>');
		$('.ansDiv').append('<img id="craig" src="assets/images/craig.png" width=200px;/>');
		$('.ansDiv').append('<img id="craig" src="assets/images/craig.png" width=90px;/>');
		$('.ansDiv').append('<img id="craig" src="assets/images/craig.png" width=250px;/>');
		$('.ansDiv').append('<img id="craig" src="assets/images/craig.png" width=190px;/>');
		$('.ansDiv').append('<img id="craig" src="assets/images/craig.png" width=150px;/>');
		$('.ansDiv').append('<img id="craig" src="assets/images/craig.png" width=275px;/>');
		
		$('.ansDiv #craig').on('click', allQuestions.wrong);
		$('#q6Answer').on('click', allQuestions.right);
	},
	question7: function() {
		questNum++
		allQuestions.timer();
		$('.questDiv').html(questNum + '. What do a banana and a hellicopter have in common?');
		
		var q7Answers1 = $('<button>', {
			text: 'Neither are a mango',
			id: 'q7Answer',
			class: 'btn btn-primary answerButtons'
		});
		var q7Answers2 = $('<button>', {
			text: 'The gift of flight',
			id: 'q7Wrong1',
			class: 'btn btn-primary answerButtons'
		});
		var q7Answers3 = $('<button>', {
			text: 'Both are yellow',
			id: 'q7Wrong2',
			class: 'btn btn-primary answerButtons'
		});
		$('.ansDiv').html(q7Answers1);
		$('.ansDiv').append(q7Answers2);
		$('.ansDiv').append(q7Answers3);

		$('#q7Wrong1').on('click', allQuestions.wrong);
		$('#q7Wrong2').on('click', allQuestions.wrong);
		$('#q7Answer').on('click', allQuestions.right);
	},
	question8: function() {
		questNum++
		allQuestions.timer();
		$('.questDiv').html(questNum + '. What was the answer to question 2?');
		var q8Answers1 = $('<button>', {
			text: 'This One',
			id: 'q8Wrong',
			class: 'btn btn-primary answerButtons'
		});
		var q8Answers2 = $('<button>', {
			text: 'This One',
			id: 'q8Answer',
			class: 'btn btn-primary answerButtons'
		});
		$('.ansDiv').html(q8Answers1);
		$('.ansDiv').append(q8Answers2);
		$('#q8Wrong').on('click', allQuestions.wrong);
		$('#q8Answer').on('click', allQuestions.right);
	},
	question9: function() {
		questNum++
		allQuestions.timer();
		$('.questDiv').html(questNum + '. What do get when you cross a joke with a rhetorical question?');
		

		var q9Answers1 = $('<button>', {
			text: 'Undefined',
			id: 'q9Wrong1',
			class: 'btn btn-primary answerButtons'
		});
		var q9Answers2 = $('<button>', {
			text: 'Silence',
			id: 'q9Wrong2',
			class: 'btn btn-primary answerButtons'
		});
		var q9Answers3 = $('<button>', {
			text: 'Cunfusion',
			id: 'q9Wrong3',
			class: 'btn btn-primary answerButtons'
		});
		$('.ansDiv').html(q9Answers1);
		$('.ansDiv').append(q9Answers2);
		$('.ansDiv').append(q9Answers3);
		$('#q9Wrong1').on('click', allQuestions.wrong);
		$('#q9Wrong2').on('click', allQuestions.wrong);
		$('#q9Wrong3').on('click', allQuestions.wrong);
		rhetoricalTime = setTimeout(allQuestions.right, 29000);
	},
};
allQuestions.startGame();
// whats red and bad for your teeth? a brick
//what do a banana and a hellicopter have in common? neither are a police officer
//what do get when you cross a joke with a rhetorical question?
//whats red and smells like blue paint? red paint