var Mam = require('@iota/mam')
const { asciiToTrytes } = require('@iota/converter')
const chalk = require('chalk')
const moment = require('moment') //For Timestamp!

const mamType = 'restricted' //Choose between public, private or restricted - NOTE: When using restricted, provide a Secret Key!
const mamSecret = 'VERYSECRETKEY' //Secret Key for restricted MAM usage.
const provider = 'https://nodes.devnet.iota.org:443' //Using the public tangle.
//const provider = 'http:127.0.0.1:14265'; //For private tangles.
const iotaDepth = 3 //Optional depth at which Random Walk starts. A value of 3 is typically used by wallets, meaning that RW starts 3 milestones back.
const minWeight = 10 //Optional minimum number of trailing zeros in transaction hash. This is used by attachToTangle function to search for a valid nonce. Currently is 14 on mainnet & spamnnet and 9 on most other devnets. Null value will set minWeightMagnitude to 9
const TIMEINTERVAL  = 10; // In seconds.

const mamExplorerLink = `https://mam-explorer.firebaseapp.com/?provider=${encodeURIComponent(provider)}&mode=${mamType}&key=${mamSecret.padEnd(81, '9')}&root=`

// Initialise MAM State
let mamState = Mam.init(provider)

// Some Information
console.log (chalk.blue("Provider: " + provider))
console.log (chalk.blue("Mode: " + mamType))

// Set channel mode
if (mamType == 'restricted') {
  mamState = Mam.changeMode(mamState, mamType, mamSecret);
  console.log (chalk.red.bold.bgYellow("key: " + mamSecret));
} else {
  mamState = Mam.changeMode(mamState, mamType);
}

// Publish to tangle
const publish = async packet => {
    // Convert the JSON to trytes and create a MAM message
    const trytes = asciiToTrytes(JSON.stringify(packet))
    const message = Mam.create(mamState, trytes)

    // Update the MAM state to the state of this latest message
    mamState = message.state

    // Attach the message
    await Mam.attach(message.payload, message.address, iotaDepth, minWeight);
    console.log(chalk.green("Message is attached!"));
    console.log(chalk.green.bold("Root: " + message.root));
    console.log(chalk.green("Address: " + message.address));
    return message.root;
}

const generateJSON = function() {
  // Generate some random numbers simulating sensor data
  const data = Math.floor((Math.random()*89)+10);
  const dateTime = moment().utc().format('DD/MM/YYYY hh:mm:ss');
  const json = {"data": data, "dateTime": dateTime};
  return json;
}

const executeDataPublishing = async function() {
  const json = generateJSON();
  console.log("json=",json);

  const root = await publish(json);
  console.log(`dateTime: ${json.dateTime}, data: ${json.data}, root: ${root}`);
}


// Start it immediately
executeDataPublishing();
// Setting a time interval for publishing
setInterval(executeDataPublishing, TIMEINTERVAL*1000);