[DHT11_GPIO]: \img\dht11_gpio.png

# The Raspberry Pi Prototype

Each Raspberry Pi can be installed on a temperature-controlled container in order to collect sensor data and alert the clients.

## Prequisites:
- Raspberry Pi 4  Model B (4GB RAM)
- Raspberry Pi Official Power Brick
- 32GB microSD Card
- DHT11 Temperature & Humidity Sensor
- Working WiFi Connection

# Getting Started

To get the Raspberry Pi up and running, follow the steps.
1. Copy Noobs on the 32GB microSD Card.
2. Select Raspbian Lite on the Pi and install it.
3. Let the Rasperry Pi boot up and activate SSL access in order to use PuTTY.
4. Connect the DHT11 Sensor as shown in Figure 01.

![DHT11_GPIO]
</br>Figure 01: Connection of DHT11 Sensor with RaspberryPi


| DHT11 Sensor  | GPIO Raspberry Pi |
| ------------- |-------------------| 
| GND           | PIN X - GND       | 
| DATA          | PIN X - DATA      | 
| VCC           | PIN X - VCC       | 

# Installation

In order to push sensor-data onto the tangle, you'll need some apps and dependencies.

1. Get the connection between the DHT11 Sensor and the Raspberry Pi working:</br></br>
Download the BCM2835 Library:</br>
`wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.56.tar.gz`</br>
Build and install bcm2835-1.56:</br>
Unzip the package: `tar zxvf bcm2835-1.56.tar.gz`</br>
Go into the folder: `cd bcm2835-1.56`</br>
Type: `./configure`</br>
Type: `make`</br>
Type: `sudo make check`</br>
Type: `sudo make install`</br>

2. Install Git on the Raspberry Pi:</br>
Type: `sudo apt-get install git`

3. Navigate to a suitable workplace (e.g. `\home\iota`).
4. Use `git clone xxx` to get the IOTA Code.
5. Navigate into `logu-iota\raspi_4`.
6. Run `npm-install`. It will install all necessary dependencies and set up the environment.

# Contents

The Github Repository consists of the following files:

- Folder: **client**</br>
All necessary scripts with an docker-image for the web-based client.
- Folder: **docs**</br>
Holds every documentation-file.
- Folder: **examples**</br>
Some basic JS-Files demonstrating the usage of IOTA's libraries.
- Folder: **raspi_4**</br>
All necessary scripts for the Raspberry Pi Prototype.
- File: **readme.md**</br>
GitHub's Readme File.

# Usage

