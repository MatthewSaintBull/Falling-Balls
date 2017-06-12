function GameOver(x,y,w,h){
	this.x = x;
	this.y = y;
	this.h = h;
	this.w = w;
	

	this.show = function(points){
		stroke('black');
		fill(0);
		rect(this.x,this.y,this.w,this.h);
		textSize(64);
		fill('red');
		text("THE GAME IS OVER . \nPOINTS : " + points,100,100); //YES
	}
}