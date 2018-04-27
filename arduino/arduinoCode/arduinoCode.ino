#include <SoftwareSerial.h>
SoftwareSerial esp8266(3, 2); // RX | TX

//int state=0;
void setup()
{ Serial.begin(9600); //recibe
  esp8266.begin(9600); //manda

  //state=0;
  pinMode(13, OUTPUT);
  digitalWrite(13, 1);

  sendData("AT+CWJAP=\"REDWIFI\",\"WIFIPASSWORD\"\r\n", 8000); //conectar wifi
  sendData("AT+CIPMUX=1\r\n", 500); //permite conexiones multiples
  sendData("AT+CIPSERVER=1,80\r\n", 500); //crea un servidor en el puerto 80
  sendData("AT+CIFSR\r\n", 500); //ip del modulo cliente y del servidor, servidor 192.168.1.53
}

void loop()
{
  if (esp8266.available())  // revisar si hay mensaje del ESP8266
  {
    if (esp8266.find("+IPD,")) // revisar si el servidor recibio datos
    {
      delay(1500); // esperar que lleguen los datos hacia el buffer
      int conexionID = esp8266.read() - 48; // obtener el ID de la conexión para poder responder
      
      /*if(esp8266.find("LedOn")){ 
       state=1;
       }else{
       state=0;}     */
      
      esp8266.find("led=");
      int state = (esp8266.read() - 48); // Obtener el estado del pin a mostrar
      digitalWrite(13, state); // Cambiar estado del pin
      while (esp8266.available()) {
        char c = esp8266.read();
        Serial.print(c);
      }

      //responder y cerrar la conexión para que el navegador no se quede cargando
      // página web a enviar
      //String webpage = "";
      String webpage = "<html><body Onload=\"cerrar()\"><script type=\"text/javascript\">function cerrar(){window.close();}</script></body></html>";
     /* if (state == 1) webpage += "<h1>Encendido</h1>";
      else {
        webpage += "<h1>Apagado</h1>";
      }*/

      // comando para enviar página web
      String comandoWebpage = "AT+CIPSEND=";
      comandoWebpage += conexionID;
      comandoWebpage += ",";
      comandoWebpage += webpage.length();
      comandoWebpage += "\r\n";
      sendData(comandoWebpage, 1000);
      sendData(webpage, 1000);


      // comando para terminar conexión
      String comandoCerrar = "AT+CIPCLOSE=";
      comandoCerrar += conexionID;
      comandoCerrar += "\r\n";
      sendData(comandoCerrar, 3000);
    }
  }
}




/*
  Enviar comando al esp8266 y verificar la respuesta del módulo, todo esto dentro del tiempo timeout
*/
void sendData(String comando, const int timeout)
{
  long int time = millis(); // medir el tiempo actual para verificar timeout

  esp8266.print(comando); // enviar el comando al ESP8266

  while ( (time + timeout) > millis()) //mientras no haya timeout
  {
    while (esp8266.available()) //mientras haya datos por leer
    {
      // Leer los datos disponibles
      char c = esp8266.read(); // leer el siguiente caracter
      Serial.print(c);
    }
  }
  return;
}


