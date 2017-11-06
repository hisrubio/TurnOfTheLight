

var SerialPort = require('serialport');
var port = new SerialPort('COM5', {
  baudRate: 9600
});

console.log("Starting up serial host...");

var message = "DATA GOES HERE";

var i=1;
function write() {
    port.open(function(err) {
        console.log('dir');
        if(i==1){
        	port.write('1')
        	i=2;
        }
    	else{
    		port.write('2')
    		i=1;
    	}

    });
}

setTimeout(write, 1000); //wait 1s for everything to initialize correctly
setInterval(write, 2000); //write data every 5s
