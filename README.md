# TurnOfTheLight

Este proyecto consiste en apagar la luz de la habitacion cuando entremos en netflix desde nuestro ordenador. Para ello se utiliza arduino uno conectado a un modulo wifi ESP8266

## Preparacion
Se prepara la primera conexion de la placa arduino con el modulo wifi,
se sigue este esquema. <p align="center"><img src="/documentacion/primeresquema.jpg" width="500"/></p>
Esta primera conexion sirve para que se entiendan el arduino y el modulo, hay que cargar este archivo [Conexion_Modulowifi1](arduino/Conexion_Modulowifi1/Conexion_Modulowifi1.ino) que nos permitira comunicarnos con el modulo wifi por serial.
El modulo ESP8266 viene por defecto configurado a 115200 baudios pero esta velocidad no es la adecuada, se puede cambiar a 9600 baudios con el comando AT+CIOBAUD=9600 <p align="center"><img src="/documentacion/ajustebaudios.png" width="400"/></p>
Cargamos [Conexion_Modulowifi](arduino/Conexion_Modulowifi/Conexion_Modulowifi.ino) en la placa podremos jugar con estos comandos
* AT devuelve ok	
* AT+CIOBAUD=? Devuelve la velocidad a la que esta
* AT+CWMODE? Devuelve el modo en el que estas
* AT+CWMODE=x cambia el modo (1 cliente,2 servidor, 3 cliente+servidor)
* AT+CWLAP escanea las wifis
* AT+CWJAP=”red”,”contraseña” conecta a la red
* AT+CWQAP desconecta de la red
* AT+CIFSR devuelve la ip
* AT+CIPMUX=1 activa la multi conexión
* AT+CIPSERVER=1,80 conecta el servidor en el puerto 80

Para comprobar que funciona hay que conectarse a una red wifi y pedir la ip (AT+CIFSR)

Como cada persona tendra una ip en su red diferente habra que guardarse la ip y **cambiarla** en los archivos [js](extension/js/) de la extension 

## Montaje

El montaje final seguira esta extructura <p align="center"><img src="/documentacion/esquemafinal.png" width="500"/></p>

La placa tendra cargada este archivo [codigo final](arduino/arduinoCode/arduinoCode.ino). **Rellena** en esta linea el nombre de nuestra red wifi y contraseña 

*sendData("AT+CWJAP=\"**REDWIFI**\",\"**WIFIPASSWORD**\"\r\n", 8000); //conectar wifi*


## Uso 

Por ultimo habra que cargar la extension a nuestro navegador chrome, y a disfrutar

<p align="center"><img src="/documentacion/extension.png" width="500"/></p>
 




