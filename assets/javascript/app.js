var portfolio = [
	{
		title: "Hangman Game",
		subtitle: "HTML, CSS, Javascript",
		description: "This program uses HTML, CSS and Javscript to make a simple hangman game. Users are presented with unknown words that they must guess, letter by letter, until the hangman drawing is complete.",
		img: ""
	},
	{
		title: "Rock Paper Scissors",
		subtitle: "HTML, CSS, Javascript, Firebase",
		description: "Using firebase as a database, this rock paper scissors game allows two players to have a go at this classic game.",
		img: ""
	},
	{
		title: "Pokeman Game",
		subtitle: "HTML, CSS, JQuery",
		description: "A simple JQuery game where a user can choose a pokemon to go into battle against other pokemon. You must defeat all enemy pokemon to win the game.",
		img: ""
	},
	{
		title: "Japan Trivia",
		subtitle: "HTML, CSS, Javascript",
		description: "A timed Japan Trivia game where the user is given 10 seconds to answer each question.",
		img: ""
	},
	{
		title: "CryptoAdvi",
		subtitle: "HTML, CSS, Javascript, APIs",
		description: "This program uses HTML, CSS and Javscript to make a simple hangman game. Users are presented with unknown words that they must guess, letter by letter, until the hangman drawing is complete.",
		img: ""
	},
	{
		title: "Gifquarium",
		subtitle: "HTML, CSS, Javascript",
		description: "This program uses HTML, CSS and Javscript to make a simple hangman game. Users are presented with unknown words that they must guess, letter by letter, until the hangman drawing is complete.",
		img: ""
	}
];

//Portfolio Click Buttons


$(".portfolio-buttons").on("click", function(event){
	event.preventDefault();
	var index = $(this).attr("data");
	$("#portfolio-title").text(portfolio[index].title);
	$("#portfolio-subtitle").text(portfolio[index].subtitle);
	$("#portfolio-description").text(portfolio[index].description);
});


//Display Buttons

$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();

	//other
	var thirdAnimation = function() {
	    $('#portfolio-buttons').animate({
	            opacity: 1, 
	            left: 0
	        }, 'slow'
	    );

	    $('#portfolio-main').animate({
	            opacity: 1, 
	            left: 0
	        }, 'slow'
	    );
	};

	//stuff
	if ($(window).width() <= 549) {
	    if ($(window).scrollTop() > 500) {
	        thirdAnimation();
	    }
	} else if ($(window).width() > 549 && $(window).width() <= 991) {
	    if ($(window).scrollTop() > 500) {
	        thirdAnimation();
	    }
	} else {
	    if ($(window).scrollTop() > 300) {
	        thirdAnimation();
	    }
	}

});

