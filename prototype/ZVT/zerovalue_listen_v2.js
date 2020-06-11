///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

const address =
  'QHYSLFFVQLFAYD9DMFKWMZRXOYEJDQVCVCFLWKRZTTJPU9ZIQDYCODEHCQPNMKGZAZHNTUEKFGPKBNXCWUCYTADQFC'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(transactions => {
    //Sorting Array on Timestamp
    transactions.sort(function (x, y) {
      return y.timestamp - x.timestamp;
    });
    console.log(transactions)
  })
  .catch(err => {
    console.error(err)
  })