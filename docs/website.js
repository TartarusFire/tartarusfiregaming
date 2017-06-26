var nav = document.getElementById('contentTabs');
var content = document.getElementById('contentArea');
var cFrame = document.getElementById('contentFrame');

var mainPages = ["AI","Games","Tools"];
var subPages = [["Desktop Ponies"],["Pony Sim City"],["VideoFileStreamer"]];
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
					p.onclick = function(){openPage(this.textContent);};
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