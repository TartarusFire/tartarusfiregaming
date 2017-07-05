/*class CanvasGraphics{
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
	constructor() {

	}
	static staticMethod() {
		return 'Static method has been called';
	}
	static anotherStaticMethod() {
		return this.staticMethod() + ' from another static method';
	}
}*/

function CanvasGraphics(canvasObject) {

	if(canvasObject==null||canvasObject=='undefined'){
		var canvas = cdocument.createElement('canvas');
	}//changed to create graphics no matter what -- will use passed in graphics instead of relying on null return as a fallback
	else var canvas = canvasObject;
	
	var ctx = canvas.getContext('2d');
	var isNumber = function(num){
		switch(num){
			case(0):break;
			case(1):break;
			case(2):break;
			case(3):break;
			case(4):break;
			case(5):break;
			case(6):break;
			case(7):break;
			case(8):break;
			case(9):break;
			default:return false;
		}
		return true;
	}

	/////////////////////////////////////////////
	//User Calls
	////////////////////////////////////////////

	this.getWidth = function(){
		return canvas.width;
	}

	this.getHeight = function(){
		return canvas.height;
	}

	this.getCanvas = function(){
		return canvas;
	}

	this.getContext = function(){
		return ctx;
	}

	/////////////////////////////////////////////
	//Variable Calls
	////////////////////////////////////////////

	this.resizeCanvas = function(wwidth,hheight){
		canvas.width=wwidth;
		canvas.height=hheight;
	}

	this.setColor = function(hex){
		hex = ""+hex;
		if(isNumber(hex.charAt(0))){
			hex = "#"+hex;
		}
		ctx.fillStyle=hex;
	}

	this.setFont = function(font,height){
		 if(typeof p2 !== "undefined") {//if it is defined then do this
		 var dat = ""+height;
		 if(dat.substring(dat.length-2,2)==="px")
			ctx.setFont(font+" "+height+"px");
		else
			ctx.setFont(font+" "+height);
		 }
		 //if it is not defined, assumed to have full data do this
		ctx.font = font;
	}

	/////////////////////////////////////////////
	//Edged graphics
	////////////////////////////////////////////

	this.eraseRectangle = function(x,y,width,height){
		ctx.clearRect(x,y,width,height);
	}

	this.fillRect = function(x, y, width, height){
		ctx.fillRect(x,y,width,height);
	}

	this.drawRect = function(x, y, width, height){
		ctx.strokeRect(x,y,width,height);
	}

	/////////////////////////////////////////////
	//Point Graphics
	////////////////////////////////////////////

	this.drawLine = function(x0,y0,x1,y1){
		ctx.moveTo(x0,y0);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}

	/*
	this.drawLines = function(x0,y0,x1,y1){//this does single and double dimension arrays -- more efficient than single line drawings multiple times -- pass in trash data except for first to define action :V
		if(y0=="undefined"){//everything in 1 array (xy array)
			for(var i = 2; i < x0.length;i+=2){//i there is 1 pair or less than 1 pair, this will exit and not handle any data
				ctx.moveTo(y0[i-2],y0[i-1]);
				ctx.lineTo(y0[i],y[i+1]);
			}
			return;
		}
		if(x1=="undefined"){//everything in 2 arrays (x array, y array)
			for(var i = 1; i < x0.length;i++){//i there is 1 pair or less than 1 pair, this will exit and not handle any data
				ctx.moveTo(x0[i-1],y0[i-1]);
				ctx.lineTo(x0[i],y0[i]);
			}
			return;
		}
		if(y1=="undefined"){//x1 defines if it is a double array: e.g var[X][Y]
			for(var i = 2; i < x0.length;i+=2){//i there is 1 pair or less than 1 pair, this will exit and not handle any data

			}
			return;
		}
		//ASSUMED OTHER VARIBALES ARE DEFINED
		//x2 defines if it is a double double array: e.g var[Line ID][X][Y] --
		ctx.moveTo(x0,y0);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}
	*/

	this.drawCircle = function(x,y,radius){
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.stroke();
	}

	/////////////////////////////////////////////
	//Image Graphics
	////////////////////////////////////////////

	this.drawImage = function(img, sx,sy,swidth,sheight,x,y,width,height){
		ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	}

	this.drawImage_Fast = function(img, sx,sy,swidth,sheight,x,y,width,height){
		/*
		if(""+swidth=="undefined"){//draw on point x,y
			ctx.drawImage(img,Math.round(sx),Math.round(sy));
			return;
		}
		if(""+x=="undefined"){//scale on point x,y
			ctx.drawImage(img,Math.round(sx),Math.round(sy),Math.round(swidth),Math.round(sheight));
			return;
		}//draw image rectangle on surface from other image rectangle*/
		
		//normal Interface handles everything
		ctx.drawImage(img,Math.round(sx),Math.round(sy),Math.round(swidth),Math.round(sheight),Math.round(x),Math.round(y),Math.round(width),Math.round(height));
	}

	/////////////////////////////////////////////
	//Calculating Graphics
	////////////////////////////////////////////

	this.drawString = function(string, x,y,fill){
		if(typeof fill !== "undefined"){
			if(fill){
				ctx.fillText(string, x,y);
				return;
			}
			ctx.strokeText(string, x,y);
			return;
		}
		ctx.fillText(string, x,y);
	}

	this.getStringWidth = function(txt){
		return ctx.measureText(txt).width;
	}

};
