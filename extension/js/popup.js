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

document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('boton');
    boton.addEventListener('click', function() {
        //alert("enciende");
        //window.open("http://192.168.1.42:80/led=1");
        encender();
    });

    var boton = document.getElementById('botonOff');
    boton.addEventListener('click', function() {
        //alert("apaga");
        //window.open("http://192.168.1.42:80/led=0");
        apagar();
    });
});