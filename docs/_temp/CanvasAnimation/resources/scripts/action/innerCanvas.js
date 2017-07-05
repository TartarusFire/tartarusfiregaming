var video = new CanvasGraphics(document.createElement('canvas'));
video.resizeCanvas(640,360);
drawVideoCanvas();

function drawVideoCanvas(){
	video.setColor("#FFFFFF");
	video.fillRect(0,0,video.getWidth(),video.getHeight());
}

var vidVars = [

//PANNING
0,0,//pair 1 for normal position
0,0,//pair 2 or calculating new position
0,0,//computed new position of canvas

//FUNCTION MEMORY
20,//FPS -- UNNECESSARY AS OF NOW
1000/24,//calculated wait in MS
0,//last time used
false//need to rerender frame
];

function calculateNextFrameRender(){
	if(!vidVars[9])return;
	vidVars[9]=false;
	vidVars[8] = Date.now();
	redrawCanvas();
}

function panCanvas(){

	//if(btn!=0)return;
	/*vidVars[0]+=(mx-vidVars[2]);
	vidVars[1]+=(my-vidVars[3]);
	vidVars[2]=mx;
	vidVars[3]=my;*/

	if(!press){
		vidVars[2] = mx;
		vidVars[3] = my;
		vidVars[4] = vidVars[0];
		vidVars[5] = vidVars[1];
	}else{
		if(btn!=0)return;
		vidVars[0] = vidVars[4]+(mx-vidVars[2]);
		vidVars[1] = vidVars[5]+(my-vidVars[3]);
	}


	vidVars[9]=true;
	if(Date.now()-vidVars[8]<vidVars[7])return;//if the FPS are lower than the last frame -- this can block the last frame update
	vidVars[9]=false;//reset the need for another frame render
	//if(Date.now()-vidVars[8]<vidVars[7])//only creates a new timeout if there is greater delay than last
	setTimeout(calculateNextFrameRender, vidVars[7]+100);//this can handle the last frame update

	vidVars[8] = Date.now();//time last frame was called
	redrawCanvas();

}
