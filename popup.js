
document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('boton');
    // onClick's logic below:
    boton.addEventListener('click', function() {
        //alert("enciende");
        window.open("http://172.0.250.180:80/led=1");

    });

    var boton = document.getElementById('botonOff');
    // onClick's logic below:
    boton.addEventListener('click', function() {
        
        //location.href ="http://192.168.1.53:80/LedOff";
        window.open("http://172.0.250.180:80/led=0");
        //alert("apaga");
    });
});