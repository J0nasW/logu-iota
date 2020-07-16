import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// For the Header Menu
import { Button, Nav, Navbar, Form, FormControl, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// For Temperature and Humidity Charts
import { Chart } from 'react-charts'

//import Button from 'react-bootstrap/Button';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';

import 'bootstrap/dist/css/bootstrap.min.css';
import { anchorClosest, alignAuto } from 'react-charts/dist/react-charts.development';


function IotaGet (address) {
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
    return data;
  })
  .catch(err => {
    console.error(err)
  })
}

function handleReload() {
  console.log('Click happened');
}

export default function App() {

  // OWN FUNCTIONS

  

  // IOTA Things
  const iotaLibrary = require('@iota/core')
  const Converter = require('@iota/converter')

  const iota = iotaLibrary.composeAPI({
    provider: 'https://nodes.comnet.thetangle.org:443'
  })

  const address =
    'XSWFSZFGBNKLSJYVVSASFGVPRWIK9HY9ISQBTABPIWSBVDQRGZEZITFQOW9UZBZPJLCOAJOGSEBXCJCIC'

  //- REACT Charts ----------------------------------------------
  const data = React.useMemo(
    () => [
      {
        label: 'Temperature',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: 'Humidity',
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  )

  const tooltipAlign = alignAuto;
  const tooltipAnchor = anchorClosest

  const axes = React.useMemo(
    () => [
      { primary: true, position: 'bottom', type: 'time' },
      { position: 'left', type: 'linear' }
    ],
    []
  )

  const tooltip = React.useMemo(
    () => ({
      align: tooltipAlign,
      anchor: tooltipAnchor
    }),
    [tooltipAlign, tooltipAnchor]
  )

  //- END REACT CHARTS -------------------------------------------

  return (
    <View style={styles.container}>
      <View style={styles.container_navbar}>
        <Navbar fixed="top" sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            LogU IOTA Inspector
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Address" className="mr-sm-2" />
            <Button variant="outline-info">Go</Button>
          </Form>
        </Navbar>
      </View>
      

      <View style={styles.content_area}>
        <Card style={{ width: '18rem', zIndex: 1}}>
          <Card.Body>
            <Card.Title>Current Data</Card.Title>
            <Card.Text>
              Here you can see the current temperature and humidity data read from the IOTA Tangle.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Temperature: 22°C</ListGroupItem>
            <ListGroupItem>Humidity: 96%</ListGroupItem>
            <ListGroupItem>Timestamp: 2020-07-10 14:32</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button onClick={this.handleReload.bind(this)}>Reload</Button>
          </Card.Body>
        </Card>

        <View style={styles.temp_chart}>
          <Chart data={data}
                  axes={axes}
                  primaryCursor
                  secondaryCursor
                  tooltip={tooltip}
            />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },

  container_navbar: {
    
  },

  content_area: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },

  temp_chart: {
    height: '350px',
    width: '40rem',
    marginLeft: 20,
    zIndex: 1
  }
});
