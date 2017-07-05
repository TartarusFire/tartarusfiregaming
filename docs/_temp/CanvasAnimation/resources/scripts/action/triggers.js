
function onMove(){
	panCanvas();
}


var mx=-1,my=-1,px=-1,py=-1,wx=-1,wy=-1;
var press =false;
var btn = 0;

function setMousePos(evt){//called anyway even with the press events
	//if(!press){
	mx = Math.floor(evt.clientX - canvas.getBoundingClientRect().left);
	my = Math.floor(evt.clientY - canvas.getBoundingClientRect().top);
	//}
	onMove();
}

function setMousePress(evt){
	//px = evt.clientX - canvas.getBoundingClientRect().left;
	//py = evt.clientY - canvas.getBoundingClientRect().top;
	//btn=event.button;
	press=true;
	btn=evt.button;
}

function setMouseNotPress(evt){
	//px = evt.clientX - canvas.getBoundingClientRect().left;
	//py = evt.clientY - canvas.getBoundingClientRect().top;
	press=false;
}

window.addEventListener('mousemove', setMousePos,false);
surface.getCanvas().addEventListener('mousedown', setMousePress,false);
window.addEventListener('mouseup', setMouseNotPress,false);
//surface.getCanvas().addEventListener('onmouseleave', setMouseNotPress,false);

//*
function setHtmlsPress(evt){
	html_toggle_menus(-1);
	wx = Math.floor(evt.clientX- canvas.getBoundingClientRect().left);
	wy = Math.floor(evt.clientY- canvas.getBoundingClientRect().top);
	setContextMenu_canvas();
	setContextMenu_resource();
	//if(html_canvas_context.style.display=='none')html_canvas_context_toggle();
}

//window.addEventListener('mousedown', setHtmlsPress,false);
document.getElementById("full").addEventListener('mousedown', setHtmlsPress,false);
document.getElementById("filebar").addEventListener('mousedown', setHtmlsPress,false);
//*/
