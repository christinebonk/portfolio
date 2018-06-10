var portfolio = [
	{
		title: "Word Guess Game",
		subtitle: "HTML, CSS, Javascript",
		description: "This program uses HTML, CSS and Javscript to make a simple hangman game. Users are presented with unknown words that they must guess, letter by letter, until the hangman drawing is complete.",
		link: "https://christinebonk.github.io/Word-Guess-Game/"
	},
	{
		title: "Rock, Paper, Scissors",
		subtitle: "HTML, CSS, Javascript, Firebase",
		description: "Using firebase as a database, this rock paper scissors game allows two players to have a go at this classic game.",
		link: "https://christinebonk.github.io/RPS-Multiplayer/"
	},
	{
		title: "Pokeman Game",
		subtitle: "HTML, CSS, JQuery",
		description: "A simple JQuery game where a user can choose a pokemon to go into battle against other pokemon. You must defeat all enemy pokemon to win the game.",
		link: "https://christinebonk.github.io/unit-4-game/"
	},
	{
		title: "Japan Trivia",
		subtitle: "HTML, CSS, Javascript",
		description: "A timed Japan Trivia game where the user is given 10 seconds to answer each question.",
		link: "https://christinebonk.github.io/Trivia-Game/"
	},
	{
		title: "CryptoAdvi",
		subtitle: "HTML, CSS, Javascript, APIs",
		description: "This program uses HTML, CSS and Javscript to make a simple hangman game. Users are presented with unknown words that they must guess, letter by letter, until the hangman drawing is complete.",
		link: "https://christinebonk.github.io/crypto-website/"
	},
	{
		title: "Gifquarium",
		subtitle: "HTML, CSS, Javascript",
		description: "This program uses HTML, CSS and Javscript to make a simple hangman game. Users are presented with unknown words that they must guess, letter by letter, until the hangman drawing is complete.",
		link: "https://christinebonk.github.io/giftastic/"
	}
];

//Portfolio Click Buttons
$(".portfolio-buttons").on("click", function(event){
	event.preventDefault();
	$(".portfolio-buttons").removeClass("active");
	var index = $(this).attr("data");
	$(this).addClass("active");
	updatePortfolio(index);
	
});

function updatePortfolio(index) {
	$("#portfolio-title").text(portfolio[index].title);
	$("#portfolio-subtitle").text(portfolio[index].subtitle);
	$("#portfolio-description").text(portfolio[index].description);
	$("#portfolio-button").attr("href", portfolio[index].link);
}

updatePortfolio(0);


//Display Buttons
$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();

	//other
	var portfolioAnimation = function() {
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
	} else if ($(window).width() > 549 && $(window).width() <= 991) {
	    if ($(window).scrollTop() > 500) {
	        portfolioAnimation();
	    }
	} else {
	    if ($(window).scrollTop() > 300) {
	        portfolioAnimation();
	    }
	}

});




