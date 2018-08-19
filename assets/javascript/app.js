var portfolio = [
	{
		title: "Super Candy Quest",
		subtitle: "Phaser 3, Handlebars, CSS, JQuery",
		description: "A game where you must collect as many ginger ale cans as possible in Candy Land before time runs out.",
		link: "https://shrouded-ridge-73704.herokuapp.com/",
		glink: "https://github.com/christinebonk/super-ryan",
		src: "assets/images/lollipop.png"
	},
	{
		title: "FriendFinder",
		subtitle: "HTML5, CSS, Javascript",
		description: "An application that matches you with your next best friend",
		link: "https://boiling-hamlet-41187.herokuapp.com/",
		glink: "https://github.com/christinebonk/FriendFinder",
		src: "assets/images/friendship.png"
	},
	{
		title: "Pokeman Game",
		subtitle: "HTML5, CSS, JQuery",
		description: "A simple JQuery game where a user can choose a pokemon to go into battle against other pokemon. The player must defeat all enemy pokemon to win the game.",
		link: "https://christinebonk.github.io/unit-4-game/",
		glink: "https://github.com/christinebonk/unit-4-game",
		src: "assets/images/pokemon.png"
	},
	{
		title: "Japan Trivia",
		subtitle: "HTML5, CSS, JQuery",
		description: "A timed Trivia game where the user is given 10 seconds to answer each question that tests their knowledge on Japan.",
		link: "https://christinebonk.github.io/Trivia-Game/", 
		glink: "https://github.com/christinebonk/Trivia-Game",
		src: "assets/images/trivia.png"
	},
	{
		title: "CryptoAdvi",
		subtitle: "HTML5, CSS, JQuery, APIs",
		description: "An investment research tool that consolidates information on crypto currencies that can be traded in Canadian dollars",
		link: "https://christinebonk.github.io/crypto-website/",
		glink: "https://github.com/christinebonk/crypto-website",
		src: "assets/images/crypto.png"
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
	$("#github-button").attr("href", portfolio[index].glink);
	$("#portfolio-image").attr("src", portfolio[index].src)
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




