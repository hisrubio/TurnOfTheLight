

mirar();
function mirar(){
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
	    // and use that tab to fill in out title and url
	    var x="http://www.filmaffinity.com/es/main.html";
	    var tab = tabs[0].url;
	   // console.log(tab.url);
	   // alert(tab);
	    
	if(x==tab)	   
		alert("yes");
	else
		mirar();

	});

}



	


	
