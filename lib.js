/*
	This is a messy script that will quickly become hard to manage
*/

//Global Variables
var canvas;
var display;
var loop;
var lastUpdate;
var x1 = '?';
var x2 = '?';
var but;
var reveal;
var points = 0;
var correct;
var wrong;
var ans = '?';
var q;
var ansinput;
var pointEel;

function init(){
	//Setup require objects

	begin();
	but=document.getElementById('new');
	but.addEventListener('click', function(){makeX();})
	q = document.getElementById('q');
	ansinput = document.getElementById('answer');
	correct = new Audio('correct.mp3');
	x1 = Math.floor(Math.random()*12)+1;
	x2 = Math.floor(Math.random()*12)+1;
	q.textContent='what is '+x1+'x'+x2;
	pointEel = document.getElementById('points');
}

function begin(){
	//Launch
	lastUpdate=Date.now();

	loop=setInterval(mainLoop,0);
	console.log(x1);
}

function makeX() {
	ans = ansinput.value;

	if (ans == (x1*x2)) {
		points++;
	}else {
		points--;
	}
	x1 = Math.floor(Math.random()*12)+1;
	x2 = Math.floor(Math.random()*12)+1;
	q.textContent='what is '+x1+'x'+x2;
	ansinput.value = '';
}

function revealFun() {
	ans = x1*x2;
}

function mainLoop(){
	//Get time since last refresh
	var tick=Date.now()-lastUpdate;
	pointEel.textContent = points;


	//Draw to the display

}
