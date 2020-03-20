// Require IOTA Packages
const Iota = require('@iota/core');

//Connect to a Node in IOTA's DevNet
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });

//Defining the security level (see https://docs.iota.org/docs/getting-started/0.1/clients/security-levels)
const securityLevel = 2;

//Defining the seed for which to generate an address
const seed =
'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

//Getting the address from IOTA + Console output
iota.getNewAddress(seed, { index: 0, securityLevel: securityLevel, total: 1 })
    .then(address => {
        console.log('Your address is: ' + address);
    })
    .catch(err => {
        console.log(err)
    });