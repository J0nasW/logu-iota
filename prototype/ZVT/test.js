///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

const address =
  'HDSLPMUBBJSRUEKGTKZXUZZJFHIVGDPMFNUZYYBAWNUKLUCJT9OKNYXWUSOBRXCXNMJS99KTSIMQTKPUDPVBFJ9KVW'


iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    const msg = response
      .sort(function (a, b) { return b.timestamp - a.timestamp; })
      .map(tx => tx.signatureMessageFragment)
      .join('')
      
    const msg_slice = msg.slice(0,2186);
    console.log(msg_slice)
    var data = Converter.trytesToAscii(msg_slice)
    
    console.log('Encoded message:')
    console.log(data)

    //Parse JSON
    // preserve newlines, etc - use valid JSON
    data = data.replace(/\\n/g, "\\n")  
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


    //var payload = JSON.parse(data);
    console.log(payload.Temperature)
    console.log(payload.Humidity)
    console.log(payload.dateTime)

  })
  .catch(err => {
    console.error(err)
  })
  