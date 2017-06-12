function Column(x,y,color,w,h){
	this.x = x;
	this.y = y;
	this.color = color;
	this.w = w;
	this.h = h;
	this.pressed = false;
	//parameters


	//draw the columns and the line that split the "button" from the column


	//because every update of columns , other columns sets to false the press function , this returns white
	this.show = function (){
		stroke('black');
		if(this.pressed)
		fill(this.color);
		rect(this.x,this.y,this.w,this.h);
		stroke('black');
		line(this.x, this.y + this.h -60, this.x + this.w, this.y + this.h -60 );
	}
	
}

