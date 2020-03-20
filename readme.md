# LogU IOTA Implementation
##### by Jonas Wilinski - LogU at Hamburg University of Technology

This Repo is dedicated to gather some sample scripts for IOTA Implementations. There will be some scripts in the "examples" folder and hopefully a working ledger with a private tangle coming soon.

To get it working, you need the latest `node.js` and all required packages. Go to the official [Node.js Download Page](https://nodejs.org/en/download/) to get it.
For information on the required packages, see `package.json`.

## Example Scripts
These Scripts are for testing and get to know IOTA.
### connect.js
This script will give some information on the IOTA DevNet and the last milestone.
### send-helloworld.js
Creating a zero-value transaction with a "Hello World" Message and commits it to the IOTA DevNet.
### receive-helloworld.js
This script can read the commited Message from `send-helloworld.js` and displays it on the console.
### address.js
Getting a new Address with a given Seed from the IOTA DevNet.