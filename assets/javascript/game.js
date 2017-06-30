//global variables
var wins = 0;
var losses = 0;
//current scores
var addition = 0;
//selects a random number from 5 to 80
var total = Math.floor((Math.random()* 80) + 5);
//assigns random value to stars from 1-13
var blue = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var audioloss = new Audio('assets/Audio/Sad_Trombone-Joe_Lamb-665429450.mp3')
var audiowin = new Audio('assets/Audio/Ta Da-SoundBible.com-1884170640.mp3')
//A function that is assigned to a variable that updates the additions in html
var updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}
//restart function
var restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 80) + 5);

	$('.total').empty();
	$('.total').append(total);

	blue = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    //alert('restart');
    updateAddition();
}
// game logic
var logic = function (){
	if (addition == total) {
		wins = wins + 1;
		
		audiowin.play();
		restart();
	}else if(addition > total){
		losses = losses + 1;
		
		audioloss.play();
		restart();
	}else{
		updateAddition();
	}
}
$('.total').append(total);

$('.addition').append(addition);

//on click function. When user click on the star of choice
$(document).ready(function(){
	$('#blue').click(function(){
		addition = addition + red;
		logic();
	})
	$('#green').click(function(){
		addition = addition + blue;
		logic();
	})
	$('#red').click(function(){
		addition = addition + yellow;
		logic();
	})
	$('#yellow').click(function(){
		addition = addition + green;
		logic();
	})
});