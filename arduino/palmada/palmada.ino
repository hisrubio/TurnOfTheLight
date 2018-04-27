int sensorPin = A0;   // entrada para nuestro sensor de sonido
int relayPin = 10;    // pin relé
int sensorValue = 0;  // variable para almacenar el valor del sensor
int knockUp;


void setup() {
  // declarar la relayPin como salida:
  pinMode(relayPin, OUTPUT);  
  knockUp = 0;
  digitalWrite(relayPin, LOW); 
  Serial.begin(9600);
}

void loop() {
  
  sensorValue = analogRead(sensorPin);    

 long startTime = millis();
 while(millis() - startTime < 1000){
      sensorValue = analogRead(sensorPin); 
       if (sensorValue < 900)
       {
        knockUp = knockUp + 1;
        Serial.println(knockUp); 
        digitalWrite(relayPin, HIGH);
        delay(100);
       } 
 }
 
 if (knockUp == 2){
   digitalWrite(relayPin, LOW);  
 }
 
 knockUp = 0;


}

