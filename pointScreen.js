function PointScreen(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h
	this.points = 0;

	this.show = function(){
		stroke(0);
		rect(this.x,this.y,this.w,this.h);
		textSize(16);
		text(this.points, this.x+2, this.y+20);
	}

	this.addPoints = function(n){
		this.points+=n;
		//maybe....
		this.show();
	}
	this.removePoints = function(n){
		this.points-=n; //REALLY?
		//maybe...
		this.show();
	}
}