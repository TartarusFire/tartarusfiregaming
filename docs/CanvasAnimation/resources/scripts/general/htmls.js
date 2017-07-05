var html_file = document.getElementById('fileMenu');
var html_video = document.getElementById('videoMenu');
var html_canvas = document.getElementById('canvasMenu');
var html_preferences = document.getElementById('preferenceMenu');
var html_tools = document.getElementById('toolsMenu');
//sets the indexes to raw numbers, so first use will not clip
html_file.style.zIndex=-3;
html_video.style.zIndex=-3;
html_canvas.style.zIndex=-3;

html_preferences.style.zIndex=-3;



html_tools.style.zIndex=-3;


function html_toggle_menus(menu){
	if(menu+""=="undefined")return;

	if(menu!=0)
	html_file.style.zIndex=-3;
	if(menu!=1)
	html_video.style.zIndex=-3;
	if(menu!=2)
	html_canvas.style.zIndex=-3;
	//3 is blank space currently
	if(menu!=4)
	html_preferences.style.zIndex=-3;
	//5 is blank space currently
	//6 is blank space currently
	//7 is blank space currently
	if(menu!=8)
	html_tools.style.zIndex=-3;


	switch(menu){
		case(0):
		html_file.style.zIndex=-html_file.style.zIndex;
		break;
		case(1):
		html_video.style.zIndex=-html_video.style.zIndex;
		break;
		case(2):
		html_canvas.style.zIndex=-html_canvas.style.zIndex;
		break;
		case(3):

		break;
		case(4):
		html_preferences.style.zIndex=-html_preferences.style.zIndex;
		break;
		case(5):

		break;
		case(6):

		break;
		case(7):

		break;
		case(8):
		html_tools.style.zIndex=-html_tools.style.zIndex;
		break;
		default:break;
	}
}





var html_video_sizes = document.getElementById('canvasSizes');
function html_video_sizes_toggle(){
	if(html_video_sizes.style.display=='none'){
	html_video_sizes.style.display='';
	}else
	html_video_sizes.style.display='none';
}
function html_video_sizes_select_toggle(row){
	document.getElementById("csm_sel").id='csm';
	if(row+''=='undefined')
	document.getElementById("canvasSizes").getElementsByTagName("div")[1].id='csm_sel';
	else document.getElementById("canvasSizesMenu").rows[row].id='csm_sel';
}
var html_custom_video_sizeX = document.getElementById('csmx');
var html_custom_video_sizeY = document.getElementById('csmy');
function html_custom_video_sizes(){
	var a = html_custom_video_sizeX.value;var b = html_custom_video_sizeY.value;
	if(Math.floor(a*b)+''!=='NaN'){//prevent resize from happening
	if(a>0&&b>0){
		video.resizeCanvas(Math.floor(html_custom_video_sizeX.value),Math.floor(html_custom_video_sizeY.value));
		drawVideoCanvas();
		redrawCanvas();
	}
	}
}

var html_video_fps = document.getElementById('fpsValues');
function html_video_fps_toggle(){
	if(html_video_fps.style.display=='none'){
	html_video_fps.style.display='';
	}else
	html_video_fps.style.display='none';
}

var html_local_fps = document.getElementById('localFPS');
function html_local_fps_toggle(){
	if(html_local_fps.style.display=='none'){
	html_local_fps.style.display='';
	}else
	html_local_fps.style.display='none';
}
function html_local_fps_select_toggle(row){
	document.getElementById("lfps_sel").id='lfps';
	if(row+''=='undefined')
	document.getElementById("localFPS").getElementsByTagName("div")[1].id='lfps_sel';
	else document.getElementById("localFPS").getElementsByTagName("table")[0].rows[row].id='lfps_sel';
}

















var html_canvas_context = document.getElementById('canvas_context');
function html_canvas_context_toggle(){
	if(html_canvas_context.style.display=='none'){
	html_canvas_context.style.display='';
	}else
	html_canvas_context.style.display='none';
}

var html_resource_context = document.getElementById('resource_context');
function html_resource_context_toggle(){
	if(html_resource_context.style.display=='none'){
	html_resource_context.style.display='';
	}else
	html_resource_context.style.display='none';
}

var menu_context=0,menu_resource=0;
var allowContextMenu = false;
function allowContextMenuCheck(menu){
/*if(allowContextMenu){//disable as soon as it is called
allowContextMenu=false;
return true;
}else*/

if(!(menu+''==undefined)){
switch(menu){
case(0):
menu_context=1;
html_canvas_context.style.top=wy+'px';
html_canvas_context.style.left=wx+'px';
setContextMenu_canvas();
break;
case(1):
menu_resource=1;
html_resource_context.style.top=wy+'px';
html_resource_context.style.left=wx+'px';
if(html_resource_context.offsetWidth-wx>0)
html_resource_context.style.left='0px';
setContextMenu_resource();
break;
case(2):

break;
case(3):

break;
}
}



return allowContextMenu;
}


function setContextMenu_canvas(){
	switch(menu_context){
	/*case(0):
	html_canvas_context.style.display='none';
	break;*/
	case(1):
	html_canvas_context.style.display='';
	break;
	default:
	html_canvas_context.style.display='none';
	break;
	}
	menu_context--;
}

function setContextMenu_resource(){
	switch(menu_resource){
	/*case(0):
	html_canvas_context.style.display='none';
	break;*/
	case(1):
	html_resource_context.style.display='';
	break;
	default:
	html_resource_context.style.display='none';
	break;
	}
	menu_resource--;
}
