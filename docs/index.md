# Welcome the LogU IOTA Project Documentations

Here you can find an overview of the Project as well as detailled installation instructions to get an IOTA based temperature-controlled supply chain up and running.

## The Idea

Our daily business in 2020 requires a lot of services and goods in order to work properly. Importing and exporting volues has increased a lot due to the globalization of the world. In 2018, the global export volume of trade in goods as risen to an all time high of about 20 Trd. USD (according to [Statista](https://www.statista.com/statistics/264682/worldwide-export-volume-in-the-trade-since-1950/)).

To ensure a smooth transport of various goods, supply chains need to get smart and lean. Trust has to be built in order to be transparent and honest about data. Especially in so called "cold-chains", where sensor data like temperature and humidity is collected constantly, transperancy and honesty is more important than ever.

However, bringing several actors along the supply chain together and getting them to use one and only one tool for providing true and safe data is very difficult. Here, IOTA Blockchain Technology comes into play, giving every company inside individual supply chains the possibility to publish data, which cannot be manipulated.

This Project outlines a sample implementation for a temperature-controlled cold chain with all participants and gives a prototype based on a Raspberry Pi 4. It tries to tackle known problems in supply chain management and gives a new and fresh apporach towards an honest and transparent communication.

## The Repository

The GitHub Repository consists of several files and folders:

* client (Folder)</br>
Here you can find most of the client code. The client is dockerized, so that the installation is as easy as possible and all necessary dependencies will be installed automatically. Please refer to the "Client"-Section of this documentation for more details.
* examples (Folder)</br>
This folder contains some example scripts (JS) to test and verify IOTA code. With these scripts, you can generate addresses in the IOTA devnet, make test-transactions and even use the MAM-Service, on which this project is built upon.
* prototype (Folder)</br>
The Prototype-folder contains the code, which can be deployed on a Raspberry Pi in order to collect and send sensor data to the IOTA Tangle. Please refer to the "Prototype"-Section of this documentation for more details.

## In Development

Please keep in mind, that we have started this project on February 2020 and are deeply in development of the core code. Currently we are working on:

* Code on the Raspberry Pi with DHT11 Integration
* Web-Client and Docker Environment for a Client Station

![UC](img/under-construction.jpg)