//Cargamos la librería de jonny-five
var five = require("johnny-five");
//Declaramos la placa con que vamos a trabajar
var board = new five.Board();

//Cuando este lista la board, se ejecuta el programa
board.on("ready", function() {
  //Iniciamos el pin13 y lo declaramos en una variable 
  var led = new five.Led(13);
  //Con la instrucción blink hacemos que se encienda y apague en 5ms (1/2 segundo)
  led.on();
});