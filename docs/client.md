[UC]: img/under-construction.jpg

# The Client Software

Currently, IOTA does not support dApps and Smart Contracts in order to process computation and rules right on the blockchain. To overcome this, a client software has to be written, which can be accessed via CLI or any web-browser supporting JavaScript. Participants of the IOTA Tangle can log in to this client and either register a new device (e.g. a new Raspberry Pi Sensor) or subscribe to a sensor data flow. Aditionally, a warning system has to be integrated for warnings on the cold chain, if for example temperature is not constant or a sensor has problems pushing data to the tangle.

This Documentation provides an installation guide for hosting your own client software as well as a user guide for navigating a hosted client.

# Installation

## Prequisites:
- PHP Web Server with SSH access
- Git and Docker has to be installed
- Working Internet Connection

## Getting the code

To get the client up and running, log in on your Web-server and follow the steps:
1. Navigate to a suitable place (e.g. `\var\www`) and clone the GitHub Repository using the following command:</br>
`git clone ...`
2. Navigate to `...\client` and run `docker-compose up`. A Docker container will build up and soon you will be able to reach the Web-Client via **localhost:8880**.

# Using the Client

![UC]

## Important Addresses:

* Main Web-based client: **localhost:8880**

![UC]