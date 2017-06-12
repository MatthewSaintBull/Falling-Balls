
/***

LET'S FIX POINTSCREEN IN GAMEOVER

**/
var gameover;
var number_columns = 4;
var columns = [];
var pads = [];
var pointScreen;
var number_pads = 4;
var total_pads = 0;
var counter_pads = 0;
var game = 1;
var pos_first = {
	x: 100,
	y: 190,
	w: 100,
	h: 400,
} 
var color_set = ['red','blue','green','purple'];
function draw(){
	if(game===1){
		background(127);
	frameRate(60);
	pointScreen.show();
	for(var i = 0; i<number_columns;i++){
		keyCheck();
		columns[i].show();
	}
	for(var i=0;i<number_pads;i++){
		pads[i].setVelocity(); //this will set velocity
		pads[i].show();
	}
	//console.log("TOTALE : "+total_pads);
	movePads();
	checkPads();
	}
	else gameover.show(pointScreen.points);
	
}




function checkPoint(n){
	for(var i = 0; i < number_pads; i++){
		if(pads[i].column_reference === n){
			if(pads[i].pos.y > pos_first.y + pos_first.h - 60 && !pads[i].clicked){
				pointScreen.addPoints(100);
				pads[i].clicked = true;
				return true;
			} 
		}


	}
	pointScreen.removePoints(1); 
	
}

function keyCheck(){
	console.log(keyCode);
	if(keyIsDown(65)){
		fill('red');
		checkPoint(1);
	}else if(keyIsDown(83)){
		fill('blue');
		checkPoint(2);
	}else if(keyIsDown(68)){
		fill('green');
		checkPoint(3);
	}else if(keyIsDown(70)){
		fill('purple');
		checkPoint(4);
	}
}
function keyReleased(){
	fill(255);
}
function checkPads(){
	for(var i = 0; i < number_pads; i++){
		if(counter_pads >= 100) {
			number_pads = 0; 
			game = 0;
		}
		if(pads[i].pos.y > pos_first.y + pos_first.h ){
			pads.splice(i,1);
			total_pads -= 1;
			counter_pads+=1;
			new_pad();
		}
	}
	
}
function movePads(){
	for(var i = 0; i < number_pads; i++){
		var t = floor(random()*4000) + 400;
			pads[i].move(t);
	}
}


function new_pad(){

	for(var i = total_pads;i < number_pads; i++){ 
		random_choise = Math.floor(Math.random() * 4) + 1;
		if (random_choise === 1){
			pads[i] = new Pad(pos_first.x+pos_first.w+50,pos_first.y,color_set[0],20,1);
		}
		else if (random_choise === 2){
			pads[i] = new Pad(pos_first.x+(pos_first.w*2)+50,pos_first.y,color_set[1],20,2);
		} 
		else if(random_choise === 3){
			pads[i] = new Pad(pos_first.x+(pos_first.w*3)+50,pos_first.y,color_set[2],20,3);
		}
		else if(random_choise === 4){
			pads[i] = new Pad(pos_first.x+(pos_first.w*4)+50,pos_first.y,color_set[3],20,4);
		}
		total_pads+=1;

	}
		
}
function setup(){
	createCanvas(800,600);
	pointScreen = new PointScreen(10,10,100,30);
	gameover = new GameOver(0,0,800,600);
	for(var i = 0; i < number_columns; i++){
		columns[i]= new Column(pos_first.x+(pos_first.w*(i+1)), pos_first.y,color_set[i], pos_first.w,pos_first.h);
	}
	new_pad();
}