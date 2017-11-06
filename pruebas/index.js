// incluimos la libreria j5
   var five = require(“johnny-five”);

   //configuramos nuestra placa arduino en una variable
   var board = new five.Board({
   // seleccionamos el puerto de comunicacion con el que fue seteado, no es requerido, pero tampoco esta demas incluirlo
   port: "/dev/cu.usbmodemfa141"
});

   // funcion que se ejecuta cuando la placa ya esta lista
   board.on("ready", function() {
   // mensaje que se muestra por consola informandonos de que la placa esta lista
   console.log("Placa lista.");

   // en una variable la configuramos el tipo de componente que es y a que pin esta conectado, en este caso al 7.
   var led = new five.Led(7);
   // funcion de parpadeo aplicado a la variable del componente, junto con el tiempo de intermitencia 
   led.blink(500);
});

   // mensaje que se muestra por consola mientras se espera a que se inicie la placa
   console.log("\nEsperando a que inicialice el dispositivo...");