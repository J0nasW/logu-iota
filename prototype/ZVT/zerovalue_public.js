/////////////////////////////////////////////
// This is a simple IOTA Implementation of sending Zero Value Transactions to the Tangle containing some information.
/////////////////////////////////////////////

//Packages
const Iota = require('@iota/core'); // Get IOTA Packages
const Converter = require('@iota/converter'); // Get IOTA Converter
const { asciiToTrytes } = require('@iota/converter') //IOTA Trytes Conversation
const fsLibrary  = require('fs'); //Load File System Package
const chalk = require('chalk'); // Nice Terminal Output
const moment = require('moment'); //For Timestamp!

// IOTA Variables
const provider = 'https://nodes.devnet.iota.org:443' //Using the public DEVNET tangle.
//const provider = 'http:127.0.0.1:14265'; //For private tangles.
const depth = 3 //Defining the security level (see https://docs.iota.org/docs/getting-started/0.1/clients/security-levels)
const securityLevel = 2 //Defining the security level (see https://docs.iota.org/docs/getting-started/0.1/clients/security-levels)
const minWeight = 9 //Optional minimum number of trailing zeros in transaction hash. This is used by attachToTangle function to search for a valid nonce. Currently is 14 on mainnet & spamnnet and 9 on most other devnets. Null value will set minWeightMagnitude to 9
const TIMEINTERVAL  = 15; // In seconds.

//----------------------------------------------------------------------------------------------------------------------------------------------
// FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
const random_seed = function (string_length){
    let random_string = '';
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

const newAdress = function (addseed, addsecurityLevel) {
    // Generate a new Address from the IOTA Tangle
    iota.getNewAddress(addseed, { index: 0, securityLevel: addsecurityLevel, total: 1 })
    .then(address => {
        console.log('Your address is: ' + address);
    })
    .catch(err => {
        console.log(err)
    });
}

const generateJSON = function() {
    // Generate some random numbers simulating sensor data
    const data = Math.floor((Math.random()*89)+10);
    const dateTime = moment().utc().format('DD/MM/YYYY hh:mm:ss');
    const json = {"data": data, "dateTime": dateTime};
    return json;
}
//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------



// Connect to a node
const iota = Iota.composeAPI({
  provider: provider
});

// Define a seed and an address.
// These do not need to belong to anyone or have IOTA tokens.
// They must only contain a mamximum of 81 trytes
// or 90 trytes with a valid checksum

//Defining the seed for which to generate an address (has to be 81 characters!)
//const seed = random_seed(81);
const seed = 'JMAJVBLNFPGCXCTSEVENEYWFWTTGFWXMPNHKSSVJLXXRETXTFLPUHEQEYIIFHIFEDYTAPNREOHPHYDVBW';
console.log(chalk.yellow("Your Seed is: " + seed));

//Getting the address
//const address = newAdress(seed, securityLevel);
const address = 'RLJMDVCJRFXKFMDJBWUJBYCLDF9PDU9OKRTBSBBTGIGTLWVBLNJFVBODPXUAPFQFSNGBFPPCKVNJGZCZC';
console.log(chalk.yellow("Your Address is: " + address));


// Define a message to send.
// This message must include only ASCII characters.
const json = JSON.stringify(generateJSON()); // Get a JSON Message
//const json = JSON.stringify({"message": "Hello world"});
const messageInTrytes = Converter.asciiToTrytes(json); // Convert the message to trytes
console.log(chalk.yellow("Your JSON is: " + JSON.stringify(json)));

// Define a zero-value transaction object
// that sends the message to the address
const transfers = [
  {
    value: 0,
    address: address,
    message: messageInTrytes
  }
];

// Create a bundle from the `transfers` array
// and send the transaction to the node
iota
  .prepareTransfers(seed, transfers)
  .then(trytes => {
    return iota.sendTrytes(trytes, depth, minWeight);
  })
  .then(bundle => {
    console.log(bundle[0].hash);
  })
  .catch(err => {
    console.error(err)
  });



