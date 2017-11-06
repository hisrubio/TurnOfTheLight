

var pages = [
    /www.netflix.com/i,
    /www.plusdede.com/i,
    /es.hboespana.com/i
];//buscar lo de entre las barrras y la i no importan Mays o minusculas
var check=true;

mirar();
function mirar(){
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
	    // and use that tab to fill in out title and url
	    
		var currentPage = tabs[0].url;
		// console.log(tab.url);
		// alert(tab);
	   
		for(i=0;i<pages.length;i++){
			var page = currentPage.search(pages[i]);
	    		if(page!=-1){
	    			check=false;
					//alert("apaga la luz");
					window.open("http://192.168.43.75:80/led=0");
					break;
				}
		}
		if(check)
			mirar();
	});
}



	


	
