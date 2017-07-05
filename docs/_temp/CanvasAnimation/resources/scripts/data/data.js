

//container for data -- class, not function, not JSON
class Curves{

	static placePoints(curvObj){

	}

	static connectPoints(curvObj){

	}

	static fillPoints(curvObj){

	}

	static straitenLine(curvObj){

	}

	static addCurve(curvObj,series,system,name){
		curvObj.series[series].systems[system].lines[curvObj.series[series].systems[system].lines.length]=function(){
			this.name=name+''=='undefined'? 'Line System' : name+'';
			this.pts=[];//raw data of points
		};
	}

	static addCurveSystem(curvObj,series,name){
		/*function(){
			var name = "Cuve System";
			var lines=[];
			var ids = [0];
		}*/
		curvObj.series[series].systems[curvObj.series[series].systems.length]=new function(){
			this.name=name+''=='undefined'? 'Line System' : name+'';
			this.lines=[];
		};
	}

	static addCurveSeries(curvObj,name){
		/*function(){
			var name = "Line Series";
			var systems = [];
			var ids = [0];
		}*/
		curvObj.series[curvObj.series.length]=new function(){
			this.name=name+''=='undefined'? 'Line Series' : name+'';
			this.systems=[];
		};
	}

	/*
	static Curve(type,x0,y0,x1,y1,x2,y2,x3,y3){

	}
	*/

	constructor(resource){
		this.series=[];
		this.name=resource+''=='undefined'? 'Line Resource' : resource+'';
		Curves.addCurveSeries(this);
		Curves.addCurveSystem(this,0);
		Curves.addCurve(this,0,0);
	}







}

//console.log("HEK: "+new Curves().systems);

var resources = [];
var res_id = [];
var res_type = [];
addResourceControl(0);
function addResourceControl(type,resource){
	switch(type){
		case(0):
		resources[resources.length]= new Curves(resource);
		break;
		default:
		//nothing, no break
	}
	res_id[res_id.length] = res_id.length;
	//console.log("HEK: "+res_id[res_id.length-1]+"            "+resources[resources.length-1].name);// -- id test print (should be 0, evaluates to 0)
	res_type[res_type.length]=type;
}


//adds resource -- built lines, and imported images as case 0,1
function addResource(type,resource){
	if((type+''=='undefined')){
		//default to line graphics
	}else
	switch(type){
		case(0)://line Graphics
		addNewSeries();
		addNewSystem();
		addNewLine();
		break;
		case(1)://image

		break;
		case(2)://.js

		break;
		case(3)://undefined

		break;
		default: //set to -1 for unknown data
		//break;
	}
}


//contains a series of systems
function addNewSeries(){

}
//contains a system of lines
function addNewSystem(){

}
//contains a series of points
function addNewLine(){

}





var html_data_tree = document.getElementById("left_data");
function addResourceTreeItem(){
	var overData = document.createElement('div');
	//overData.class='clean';
	overData.id='data';
	overData.width='100%';
	overData.onclick=resourceTreeToggleView;
	overData.innerHTML=
	"<div id='data_name'>Blank Resource </div>"+
	"<div id='data_data' style='display:none'>"+
		"<div id='data_type'>No Data</div>"+
		"<div id='data_list'></div>"+
	"</div>";


	html_data_tree.appendChild(overData);
}
function resourceTreeToggleView(){
if(this.getElementsByTagName("div")[1].style.display=='')this.getElementsByTagName("div")[1].style.display='none'; else this.getElementsByTagName("div")[1].style.display='';
try{
document.getElementsByClassName('data_select')[0].className='none';
}catch(e){}
this.className='data_select';
}

function renameResourceTreeItem(item,name){
html_data_tree.getElementsByTagName("div")[item].getElementsByTagName("div")[0].innerHTML=name;
}
addResourceTreeItem();
renameResourceTreeItem(0,"Canvas");
