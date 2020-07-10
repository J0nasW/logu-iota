import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Nav, Navbar, Form, FormControl, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

//import Button from 'react-bootstrap/Button';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';

import 'bootstrap/dist/css/bootstrap.min.css';


const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
})

const address =
  'XSWFSZFGBNKLSJYVVSASFGVPRWIK9HY9ISQBTABPIWSBVDQRGZEZITFQOW9UZBZPJLCOAJOGSEBXCJCIC'

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

export default function App() {
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
            <FormControl type="text" placeholder="Addresse" className="mr-sm-2" />
            <Button variant="outline-info">Los</Button>
          </Form>
        </Navbar>
      </View>
      

      <View style={styles.content_area}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Current Temperature</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Temperature: 22°C</ListGroupItem>
            <ListGroupItem>Humidity: 96%</ListGroupItem>
            <ListGroupItem>Timestamp: 2020-07-10 14:32</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button onclick="IotaGet()">Reload</Button>
          </Card.Body>
        </Card>
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
    justifyContent: "center",
    marginTop: 20
  }
});
