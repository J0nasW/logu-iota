/*
A Script by Jonas Wilinski working @ LogU TUHH.

It just recieves data from the IOTA Devnet Tangle. Nothing more - just for testing purposes.

*/

var Mam = require('@iota/mam')
var IOTA = require('@iota/core');
var iota = new IOTA({ provider: 'https://nodes.devnet.iota.org:443' })

let root = 'UNSQBFKGSC9RTAWRHAFFZEWUEBFKUOLERABCGJJEWAJCDLDNUWUFJNCNKCRPAZZNSIWZTZ9KTZWFFOZDT';

// Initialize MAM State - PUBLIC
var mamState = Mam.init(iota)

//if (!process.argv[2]) return console.log('No Address!')

/*
const args = process.argv;
if(args.length !=3) {
    console.log('Missing root as argument: node mam_receive.js <root>');
    process.exit();
}
*/

const logData = data => console.log(JSON.parse(iota.utils.fromTrytes(data)))

const recieveAll = async () => {

    var resp = await Mam.fetch(root, 'public', null, logData)
  console.log(resp)

}

recieveAll()

// const readMam = async root => {
//   try {
//     // Fetch a single tx
//     const data = await Mam.fetchSingle(root, 'public')
//     // Console long that Data
//     showData(data.payload)
//     // Set that as the latest address
//     latestAddress = data.payload
//     // Self invoke the function again
//     readMam(data.nextRoot)
//   } catch (e) {
//     return console.log('Reached end of stream')
//   }
// }

/*
let active = false
let latestAddress = process.argv[2]

setInterval(async () => {
  if (active) return
  active = true
  await readMam(latestAddress)
  active = false
}, 5000)
*/