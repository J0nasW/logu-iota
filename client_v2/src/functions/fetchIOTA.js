// Importing IOTA Libraries
import * as IotaProvider from '@iota/core';
import * as Converter from '@iota/converter';

//import crypto from "simple-crypto-js";
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';


// Store Things
var store = require('store');


// Getting the current Container Address
/** 
var ContainerCount = store.get("ContainerCount").count;
var Str_ContainerCount = "container"  + ContainerCount;

alert(Str_ContainerCount);
var Str_ContainerCountPayload = "container"  + ContainerCount + "_payload";
alert(Str_ContainerCountPayload);

**/
//var ContainerCount = store.get("ContainerCount").count;

// Function to collect IOTA data from a given address
const fetchIOTA = async function() {

    try {
      var containerName = "container" + store.get("count").count;
      var address = store.get(containerName).address;
      var passphrase = store.get(containerName).passphrase;
      //var encryptor = new crypto(passphrase);
    } catch(e){
      alert("Didn't found any container. Maybe initializing?");
    }

    var iota = IotaProvider.composeAPI({
      provider: 'https://nodes.comnet.thetangle.org:443'
    });
    try {
      let result = await iota.findTransactionObjects({ addresses: [address] });
  
      var msg = result.sort(function (a, b) { return b.timestamp - a.timestamp; });
      msg = msg.map(tx => tx.signatureMessageFragment);
      msg = msg.join('');

      /** 
      var history = []; // Should contain the last 10 datapoints of one address!
      var begin = 0;
      var end = 2186;
      var datapoint = "";
      for (var i = 0; i < 10; i++) {
        datapoint = msg.slice(begin,end);
        alert(datapoint)
        datapoint = Converter.trytesToAscii(datapoint);
        datapoint = datapoint.replace(/"([^"]+(?="))"/g, '$1');
        datapoint = CryptoAES.decrypt(datapoint, passphrase).toString(CryptoENC);
        datapoint = datapoint.toString().replace(/\\n/g, "\\n")  
          .replace(/\\'/g, "\\'")
          .replace(/\\"/g, '\\"')
          .replace(/\\&/g, "\\&")
          .replace(/\\r/g, "\\r")
          .replace(/\\t/g, "\\t")
          .replace(/\\b/g, "\\b")
          .replace(/\\f/g, "\\f")
          .replace(/[\u0000-\u0019]+/g,"");
        var datapoint = JSON.parse(datapoint);

        history.push(datapoint)
        begin = 2186 + 3;
        end = begin;
        alert(i)
      }
      */

      msg = msg.slice(0,2186);
  
      // STILL ENCRYPTED AND IN TRYTES
      var data = Converter.trytesToAscii(msg);
      var data = data.replace(/"([^"]+(?="))"/g, '$1');
      
      // NOW DECRYPT IT - THIS STEP DOSENT WORK AT THE MOMENT...
      data = CryptoAES.decrypt(data, passphrase).toString(CryptoENC);

      //Parse JSON
      // preserve newlines, etc - use valid JSON
      data = data.toString().replace(/\\n/g, "\\n")  
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f");
      // remove non-printable and other non-valid JSON chars
      data = data.replace(/[\u0000-\u0019]+/g,"");
      var payload = JSON.parse(data);
      //alert("Got it!");
      // Format: {"Temperature":"26.0","Humidity":"61.0","dateTime":"18/08/2020 12:09:18"}
      //alert("Temperature:" + payload.Temperature);
      //alert("Humidity:" + payload.Humidity);
      //alert("Timestamp:" + payload.dateTime);
      //this.setState({payload: payload});
      //this.setState({container1: true});

      // Setting Store Object container<count>_payload
      store.set(containerName, {payload:payload})

      alert(JSON.stringify(store.get(containerName).payload))
  
    } catch (error) {
        alert("Ein Fehler wurde festgestellt: " + error);
    }
  
  }

  export default fetchIOTA;