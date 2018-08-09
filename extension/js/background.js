
chrome.commands.onCommand.addListener(function(command) {
	if(command == "apagar"){
		window.open("http://192.168.1.42:80/led=0");
    }
    if(command == "encender"){
		window.open("http://192.168.1.42:80/led=1");
    }

});

var pages = [
    /www.netflix.com/i,
    /www.plusdede.com/i,
    /es.hboespana.com/i
];//buscar lo de entre las barrras, la i para que no importen Mays o minusculas
var check=true;

mirar();
function mirar(){
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
					window.open("http://192.168.1.42:80/led=0");
					break;
				}
		}
		if(check)
			mirar();
	});
}



	


	
