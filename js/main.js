
var turn = 1
var sq1 = 0 
var sq2 = 0
var sq3 = 0
var sq4 = 0
var sq5 = 0
var sq6 = 0
var sq7 = 0
var sq8 = 0
var sq9 = 0
var gameOver = 0
var player1Score = 0
var player2Score = 0
var tie = 0

//Display status messages about turns, wins and leads
function displayStatus(msg){
	document.getElementById("status").innerHTML=msg;
}
function displayStatus2(msg){
	document.getElementById("status2").innerHTML=msg;
}

displayStatus("X kicks things off...")

//On each click of a square, a value is assigned that will help calculate a win
function assignSquareValue(){
	if(turn==1){
		return 1;
	}else{
		return 4;
	};
};

//Calculate winner and annouce status accordingly
function rowSum(x,y,z){
	if(x+y+z==3){
		$(".square").addClass("taken");
		$(".reset").css("display","inline-block");;
		turn=2;
		gameOver=1;
		increasePlayerOneScore();
		displayStatus("Yay X!");
		if(player1Score>player2Score){
			displayStatus2("You're ahead!");
		}else if(player1Score==player2Score){
			displayStatus2("You've pulled even!");
		}else{
			displayStatus2("Close that gap!");
		};
	}else if(x+y+z==12){
		$(".square").addClass("taken");
		$(".reset").css("display","inline-block");
		turn=1;
		gameOver=1;
		increasePlayerTwoScore();
		displayStatus("Go O!");
		if(player2Score>player1Score){
			displayStatus2("You're On fire!");
		}else if(player1Score==player2Score){
			displayStatus2("Back to deuce!");
		}else{
			displayStatus2("You're zeroing in!");
		};
	};
};

//Keep score
function increasePlayerOneScore(){
		if(gameOver==1){
			player1Score++;
			$(".playerOneScore").children("span").text(player1Score);
			console.log(player1Score);
		}
}

function increasePlayerTwoScore(){
		if(gameOver==1){
			player2Score++;
			$(".playerTwoScore").children("span").text(player2Score);
			console.log(player2Score);
		}
}


//Check for a Tie, announce tie and change turn
function checkForTie(){
	if((gameOver==0)&&sq1&&sq2&&sq3&&sq4&&sq5&&sq6&&sq7&&sq8&&sq9){
		if(player1Score==player2Score){
			displayStatus("All tied up!");
		}else{
			displayStatus("It's a tie!")
		}
		$(".square").addClass("taken");
		$(".reset").css("display","inline-block");
		if(turn==1){
			turn==2;
		}else{
			turn==1;
		};
	
	}
};


//The following check each 3-tile row that could comprise a win
function topRow(){
	rowSum(sq1,sq2,sq3);
};

function middleRow(){
	rowSum(sq4,sq5,sq6);
};

function bottomRow(){
	rowSum(sq7,sq8,sq9);
};

function rightColumn(){
	rowSum(sq1,sq4,sq7);
};

function centerColumn(){
	rowSum(sq2,sq5,sq8);
};

function leftColumn(){
	rowSum(sq3,sq6,sq9);
};

function diagonalRightToLeft(){
	rowSum(sq1,sq5,sq9);
};

function diagonalLeftToRight(){
	rowSum(sq3,sq5,sq7);
};

function checkForWin(){
	topRow();
	middleRow();
	bottomRow();
	rightColumn();
	centerColumn();
	leftColumn();
	diagonalLeftToRight();
	diagonalRightToLeft();
	checkForTie();
};

$(document).ready(function(){
	//The following assigns a value to a square on each click
	$("#sq1").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq1 = assignSquareValue();
		}
	});

	$("#sq2").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq2 = assignSquareValue();
		}
	});

	$("#sq3").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq3 = assignSquareValue();
		}
	});

	$("#sq4").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq4 = assignSquareValue();
		}
	});

	$("#sq5").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq5 = assignSquareValue();
		}
	});

	$("#sq6").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq6 = assignSquareValue();
		}
	});


	$("#sq7").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq7 = assignSquareValue();
		}
	});

	$("#sq8").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq8 = assignSquareValue();
		}
	});

	$("#sq9").on("click",function(){
		if(!$(this).hasClass("taken")){
		    sq9 = assignSquareValue();
		}
	});

	//The following changes the look of a square to indicate who's taken it
	$(".square").on("click",function(){
		if(!$(this).hasClass("taken")){
			if(turn==1){
			$(this).addClass("playerOnesSquare");
			$(this).addClass("taken");
			turn=2;
			displayStatus("O is On");
			checkForWin();
			}else{
				$(this).addClass("playerTwosSquare");
				$(this).addClass("taken");
				turn=1;
				displayStatus("X, mark the spot");
				checkForWin();
			}
		};
	});

	$(".reset").on("click",function(){
		$(".taken").removeClass("playerTwosSquare")
			.removeClass("playerOnesSquare")
			.removeClass("taken");
		sq1=0;
		sq2=0;
		sq3=0;
		sq4=0;
		sq5=0;
		sq6=0;
		sq7=0;
		sq8=0;
		sq9=0;
		console.log("reset");
		$(this).hide();
		gameOver=0;
		if(turn==1){
			displayStatus("X, mark the spot!");
		}else{
			displayStatus("O, you're up!");
		};
		displayStatus2("");
	});
});

//from:0px to:500px

/*$("form").on("submit",function(event){
	event.preventDefault();
	var userEntered = $("input").val();
	console.log(userEntered)
});*/

/*$("p").on("mouseenter",function(){
	console.log(this);
	$(this).css("color","red");
}).on("mouseleave",function(){
	console.log(this);
	$(this).css("color","blue");
});*/