var nav = document.getElementById('contentTabs');
var content = document.getElementById('contentArea');
var cFrame = document.getElementById('contentFrame');
var fFrame = document.getElementById('float');

var mainPages = ["AI","Games","Tools","Tests"];
var subPages = [["Desktop Ponies"],["Pony Sim City"],["Video File Streamer","FramerWare Protype","Canvas Animation","EmbededStreamer"]];
var lnkPages = [["desktop-ponies.html"],["pony-sim-city.html"],["video-file-streamer.html","framerware-protype.html","canvas-animation.html","embededstreamer.html"]];
addToNavigation(mainPages);

var _Spgs = 0;

function addToNavigation(dat){
	if(Array.isArray(dat)){
		for(var i = 0; i < dat.length;i++){
			var div = document.createElement('div');
			div.textContent=""+dat[i];
			nav.append(div);
			if(Array.isArray(subPages[i])){
				for(var q = 0; q < subPages[i].length;q++){
					var s = document.createElement('div');
					var p = document.createElement('p');
					p.textContent=""+subPages[i][q];
					var nmm = lnkPages[i][q];
					p.onclick = function(){/*var l =nmm; cFrame.src=l;*/openPage(this.textContent);};
					p.className="link";
					//a.addEventListener('mousedown', openPage(this),false);
					s.append(p);
					//s.innerHTML=""+subPages[i][q];
					
					s.className="small";
					//s.style.display="none";
					div.append(s);
				}
			}
		}
		return;
	}
}

function openPage(page){
	//animatePage();
	console.log(page);
	page = ""+page;
	page = page.toLowerCase();
	//page = page.replace(" ", "-");
	console.log(page);
	for(var i = 0; i < page.length;i++)
		if(page[i]==' ')
			page = page.replace(" ", "-");
	cFrame.src=page+".html";
}

function animatePage(){
	
}

function requestFullScreen(e){
	if(e.mozRequestFullScreen){
		e.mozRequestFullScreen();
		return;
	}
	if(e.webkitRequestFullScreen){
		e.webkitRequestFullScreen();
		return;
	}
	if(e.khtmlRequestFullScreen){
		e.khtmlRequestFullScreen();
		return;
	}
	if(e.requestFullScreen){
		e.requestFullScreen();
		return;
	}
	
	if(e.msRequestFullScreen){
		e.msRequestFullScreen();
		return;
	}
	/*if(e.mozRequestFullScreen){
		e.mozRequestFullScreen();
	}
	if(e.mozRequestFullScreen){
		e.mozRequestFullScreen();
	}*/
	
}

/*
var free =false;
function jailbreak(){
	if(free){
		
	}else{
		fFrame.style.display="visible";
		//fFrame.top=cFrame.top;
		//fFrame.left=cFrame.left;
		document.getElementsByTagName('iframe')[0].getAttribute('width');
		document.getElementsByTagName('iframe')[0].getAttribute('height');
		var w = cFrame.document.width;//cFrame.getAttribute('width');
		var h = cFrame.document.height;//cFrame.getAttribute('height');//+document.getElementById('pull').height;
		console.log(w);
		console.log(h);
		fFrame.append(cFrame);
		cFrame.style.zIndex=666;
		cFrame.width=w;
		cFrame.height=h;
		fFrame.width=w;
		fFrame.height=h;
		
		
		
		
		fFrame.style.display="visible";
		free=true;
	}
}
*/