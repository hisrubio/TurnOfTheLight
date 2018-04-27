
document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('boton');
    boton.addEventListener('click', function() {
        //alert("enciende");
        window.open("http://192.168.1.42:80/led=1");
    });

    var boton = document.getElementById('botonOff');
    boton.addEventListener('click', function() {
        //alert("apaga");
        window.open("http://192.168.1.42:80/led=0");
    });
});