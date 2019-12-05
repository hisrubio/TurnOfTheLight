
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
	encendida=true;
    //alert("enciende");
	console.log("encendiendo");
    //httpGet("http://192.168.1.42:80/led=1");
    httpGetAsync("http://192.168.1.42:80/led=1", function(){});
	//window.open("http://192.168.1.42:80/led=1");
}
function apagar(){
	encendida=false;
    //alert("apaga");
	console.log("apagando");
    //httpGet("http://192.168.1.42:80/led=0");
    httpGetAsync("http://192.168.1.42:80/led=0", function(){});
	//window.open("http://192.168.1.42:80/led=0");
}

//accesos directos
chrome.commands.onCommand.addListener(function(command) {
	if(command == "apagar"){
		apagar();
    }
    if(command == "encender"){
		encender();
    }
});

//botones del popup.html
document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('boton');
    boton.addEventListener('click', function() {
        encender();
    });

    var boton = document.getElementById('botonOff');
    boton.addEventListener('click', function() {
        apagar();
    });
});




var oldUrl;
var pages = [
    /www.netflix.com/i,
    /www.megadede.com/i,
    /es.hboespana.com/i
]; //buscar lo de entre las barrras, la i para que no importen Mays o minusculas
var encendida=true;

//leer url cuando cambia
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)  {
	//alert(changeInfo.status +" "+ changeInfo.url);
	if(oldUrl!=tab.url){
		oldUrl=tab.url;
		checkearLuz(tab.url);
	}
});

function checkearLuz(url){
	if(encendida){
		for(i=0; i<pages.length; i++){
			var page = url.search(pages[i]); //search, string method, with regular expresion
    		if(page!=-1){
				apagar();
				break;
			}
		}
	}
}