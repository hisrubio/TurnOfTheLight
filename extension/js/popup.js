function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function encender(){
    httpGet("http://192.168.1.42:80/led=1");
}
function apagar(){
    httpGet("http://192.168.1.42:80/led=0");
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