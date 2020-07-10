///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

const address =
  'XSWFSZFGBNKLSJYVVSASFGVPRWIK9HY9ISQBTABPIWSBVDQRGZEZITFQOW9UZBZPJLCOAJOGSEBXCJCIC'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    const msg = response
      .sort(function (a, b) { return b.timestamp - a.timestamp; })
      .map(tx => tx.signatureMessageFragment)
      .join('')
    
    msg_slice = msg.slice(0,2186);
    console.log(msg_slice)
    const data = Converter.trytesToAscii(msg_slice)
    
    console.log('Encoded message:')
    console.log(data)

    //Parse JSON
    var payload = JSON.parse(data);
    console.log(payload.Temperature)
  })
  .catch(err => {
    console.error(err)
  })