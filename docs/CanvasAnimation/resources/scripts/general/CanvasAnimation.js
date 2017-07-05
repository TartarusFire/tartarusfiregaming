var g = new CanvasGraphics(document.createElement('canvas'));
var surface = new CanvasGraphics(document.getElementById("canvas"));
function resizeCanvas(){
	g.resizeCanvas(Math.floor(document.getElementById("north_panel").offsetWidth),Math.floor(document.getElementById("north_panel").offsetHeight));
	surface.resizeCanvas(g.getWidth(),g.getHeight());
	redrawCanvas();
}
function redrawCanvas(){
	drawVideo();
	//drawScrollBars();
	drawToWindow();
}

function drawToWindow(){
	surface.drawImage_Fast(g.getCanvas(),0,0);
}

function drawVideo(){
	g.setColor("#000000");
	g.fillRect(0,0,g.getWidth(),g.getHeight());
	g.drawImage_Fast(video.getCanvas(),vidVars[0],vidVars[1]);
}

/*
function drawScrollBars(){
	g.setColor("#999999");
	if(g.getHeight()<video.getHeight()+vidVars[1]){
		var h = g.getHeight()*g.getHeight()/(video.getHeight()+vidVars[1]);
		if(h<10)h=10;
		g.fillRect(g.getWidth()-10,0,10,h);
	}else if(vidVars[1]<0){
		var h = g.getHeight()*g.getHeight()/(video.getHeight()+vidVars[1]);
		if(h<10)h=10;
		g.fillRect(g.getWidth()-10,0,10,h);
	}
	if(g.getWidth()<video.getWidth()+vidVars[0]&&vidVars[0]>0){
		var w = g.getWidth()*g.getWidth()/(video.getWidth()+vidVars[0]);
		if(w<10)w=10;
		g.fillRect(0,g.getHeight()-10,w,10);
	}else if(vidVars[0]<0){
		var w = video.getWidth()*video.getWidth()/(-vidVars[0]+video.getWidth());
		if(w<10)w=10;
		g.fillRect(0,g.getHeight()-10,w,10);
	}
}
*/

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();
