/*
MODULES NEEDED FOR U-blox NEO 6M GPS Module

npm install serialport --save
npm install gps --save

https://developer.here.com/blog/read-gps-data-with-a-raspberry-pi-zero-w-and-node.js?cid=Developer-Facebook_Comms-CM--Devblog-
*/

var SerialPort = require('serialport');
var port = new SerialPort.SerialPort('/dev/tty.usbserial', { // change path
  baudrate: 4800,
  parser: SerialPort.parsers.readline('\r\n')
});
 
var GPS = require('gps');
var gps = new GPS;
 
gps.on('data', function(data) {
  console.log(data, gps.state);
});
 
port.on('data', function(data) {
  gps.updatePartial(data);
});