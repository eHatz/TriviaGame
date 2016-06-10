// Albert Einstein, in his theory of special relativity, determined that the laws of physics are the same for 
// all non-accelerating observers, and he showed that the speed of light within a vacuum is the same no matter 
// the speed at which an observer travels. Based on this theory if a tree falls in the woods, how many pancakes
// does the bear have?

// click on biggest craig

// click on smallest theory

// wait for it

// click on the green button

// click on jump scare

//click on the biggest troll


var allQuestions = {
	time: 0,
	startGame: function(){ // initial button
		var startBtn = $('<button/>', {
			text: 'Start!',
			id: 'start',
			class: 'btn btn-primary'
		});
		$('.questDiv').html(startBtn);
		$('#start').on('click', allQuestions.areYouSure);
	},
	areYouSure: function(){
		var yes = $('<button/>', {
			text: 'Yes',
			id: 'yes',
			class: 'btn btn-success'
		});
		var no = $('<button/>', {
			text: 'No',
			id: 'no',
			class: 'btn btn-danger'
		});
		$('.questDiv').html(yes);
		$('.questDiv').append(no);
		$('#no').on('click', allQuestions.wrong);
		setInterval(allQuestions.startGame, 2000);
	},
	wrong: function() {
		$('.time').html('');
		$('.questDiv').html('');
		$('.ansDiv').html('<img id="redX" src="assets/images/Red-X.png" />');
	}
}
allQuestions.startGame();