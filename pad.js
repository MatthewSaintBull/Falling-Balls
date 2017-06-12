function Pad(x,y,color,r,ref){
	this.pos = createVector(x,y);
	this.color = color;
	this.r = r;
	this.vel = 1;
	this.column_reference = ref; //where it will spawn
	this.clicked = false;
	
	this.show = function(t){
		
			stroke('black');
			ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);

			
	}
	this.move = function(t){
		sleep(t).then(() => {
    		this.pos.y+=this.vel;
		});
		
	}
	function sleep (time) {
 		 return new Promise((resolve) => setTimeout(resolve, time));
	}
	this.setVelocity = function(){
		this.vel = floor(random() * 5)+1;
	}

}