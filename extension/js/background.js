function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpGetAsync(theUrl, callback)
{
	console.log("dentro");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function encender(){
	console.log("encendiendo");
    //httpGet("http://192.168.1.42:80/led=1");
    httpGetAsync("http://192.168.1.42:80/led=1", function(){});
}
function apagar(){
	console.log("apagando");
    //httpGet("http://192.168.1.42:80/led=0");
    httpGetAsync("http://192.168.1.42:80/led=0", function(){});
}

//accesos directos
chrome.commands.onCommand.addListener(function(command) {
	if(command == "apagar"){
		//window.open("http://192.168.1.42:80/led=0");
		apagar();
    }
    if(command == "encender"){
		//window.open("http://192.168.1.42:80/led=1");
		encender();
    }

});

var pages = [
    /www.netflix.com/i,
    /www.megadede.com/i,
    /es.hboespana.com/i
];//buscar lo de entre las barrras, la i para que no importen Mays o minusculas
var check=true;

mirar();
function mirar(){
	//chrome.tabs mirar eventos (liseners) onUpdate
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
	    // and use that tab to fill in out title and url
	    
		var currentPage = tabs[0].url;
		// console.log(tab.url);
		// alert(tab);
	   
		for(i=0;i<pages.length;i++){
			var page = currentPage.search(pages[i]);//search, string method, with regular expresion
	    		if(page!=-1){
	    			check=false;
					//alert("apaga la luz");
					//window.open("http://192.168.1.42:80/led=0");
					apagar();
					break;
				}
		}
		if(check)
			mirar();
	});
}



	


	
