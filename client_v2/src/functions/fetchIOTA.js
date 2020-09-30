// Importing IOTA Libraries
import * as IotaProvider from '@iota/core';
import * as Converter from '@iota/converter';

// Store Things
var store = require('store')

// Function to collect IOTA data from a given address
export async function fetchIOTA() {
    
    alert('IOTA Reload started!');

    // Getting the current Container Address
    var ContainerCount = store.get("ContainerCount").count
    const address = store.get("container" + ContainerCount).address;

    // Getting the correspondent passphrase
    var passphrase = store.get("container" + ContainerCount).passphrase;
  
    alert(address)

    var iota = IotaProvider.composeAPI({
      provider: 'https://nodes.comnet.thetangle.org:443'
    });
    try {
      let result = await iota.findTransactionObjects({ addresses: [address] });
  
      var msg = result.sort(function (a, b) { return b.timestamp - a.timestamp; });
      msg = msg.map(tx => tx.signatureMessageFragment);
      msg = msg.join('');
      msg = msg.slice(0,2186);
  
      var data = Converter.trytesToAscii(msg);
  
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
      store.set("container" + ContainerCount + "_payload", {payload:payload})

      alert(JSON.stringify(store.get("container" + ContainerCount + "_payload").payload))
  
    } catch (error) {
        alert("Ein Fehler wurde festgestellt: " + error);
    }
  
  }