import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, TouchableHighlight, Button } from "react-native";
import { Input } from 'react-native-elements';
import Popup from "reactjs-popup";
import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../components/Header";
import Container from "../components/Container";
import Plus from "../components/Plus";
import Reload from "../components/reload"

//import Addresswin from "../components/Addresswin";
import Popupwin from "../components/Popupwin";

import * as IotaProvider from '@iota/core';
import * as Converter from '@iota/converter';

var width = Dimensions.get('window').width; //full width
var width_80 = Dimensions.get('window').width*0.8; //80% width
var width_50 = Dimensions.get('window').width*0.5; //50% width
var width_30 = Dimensions.get('window').width*0.3; //30% width
var height = Dimensions.get('window').height; //full height
var height_50 = Dimensions.get('window').height*0.5; //50% height
var height_30 = Dimensions.get('window').height*0.3; //30% height

// Might use REDUX for global state management...

var IotaAddressContext = '';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, address_string: '', container1: false, payload: '' };
    this.openModal1 = this.openModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  handleChange = event => {
    this.setState({ address_string: event.target.value });
    IotaAddressContext = event.target.value;
  };

  openModal1() {
    this.setState({ open: true });
    this.setState({ address: true });
    this.setState({ detail: false });
  }
  openModal2() {
    this.setState({ open: true });
    this.setState({ detail: true });
    this.setState({ address: false });
  }
  closeModal() {
    this.setState({ open: false });
  }

  async handleData() {
    
      //alert('IOTA Reload started!');
    
      const address = IotaAddressContext.toString();
    
      var iota = IotaProvider.composeAPI({
        provider: 'https://nodes.comnet.thetangle.org:443'
      });
      try {
        let result = await iota.findTransactionObjects({ addresses: [address] });
    
        var msg = result.sort(function (a, b) { return b.timestamp - a.timestamp; });
        msg = msg.map(tx => tx.signatureMessageFragment);
        msg = msg.join('');
        msg = msg.slice(0,2186);
    
        var data = Converter.trytesToAscii(msg);
    
        //Parse JSON
        // preserve newlines, etc - use valid JSON
        data = data.toString().replace(/\\n/g, "\\n")  
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
        // remove non-printable and other non-valid JSON chars
        data = data.replace(/[\u0000-\u0019]+/g,"");
        var payload = JSON.parse(data);
        //alert("Got it!");
        // Format: {"Temperature":"26.0","Humidity":"61.0","dateTime":"18/08/2020 12:09:18"}
        //alert("Temperature:" + payload.Temperature);
        //alert("Humidity:" + payload.Humidity);
        //alert("Timestamp:" + payload.dateTime);
        this.setState({payload: payload});
        this.setState({container1: true});
  
      } catch (error) {
          alert("Ein Fehler wurde festgestellt: " + error);
      }
    
  }

  render() {
    return (
      <View style={styles.container}>

        <Header style={styles.header}></Header>

        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          { this.state.address ? 
          
            <View style={styles.rect}>
            <Text style={styles.adresse}>Adresse:</Text>
            <View style={styles.Row_address}>
              <View style={styles.company}>
                <Icon name="question" style={styles.icon}></Icon>
              </View>
              <Input
                placeholder='Your IOTA Address'
                value={this.state.address_string}
                onChange={this.handleChange}
                inputContainerStyle={styles.address_text}
              />

            </View>
              <TouchableOpacity style={styles.button_green} onPress={this.closeModal}>
                <Text style={styles.los}>Los</Text>
              </TouchableOpacity>
            </View>

          : null }
          { this.state.detail ? <Popupwin style={styles.popupwin} containerData={this.state.payload}></Popupwin> : null }
        </Popup>

        <View style={styles.Row}>
            <Text style={styles.container_text}>Container</Text>
            <View style={styles.rowfiller}></View>
            <Text style={styles.sortieren}>Sortieren:</Text>
            <Text style={styles.neuesteZuerst}>Neueste zuerst</Text>
        </View>

        <ScrollView style={styles.containerList}>
          {this.state.container1 ? 
          <TouchableOpacity onPress={this.openModal2}>
            <Container style={styles.containerComponent}></Container>
          </TouchableOpacity>
          : null }
        </ScrollView>

        <TouchableOpacity onPress={this.handleData.bind(this)} style={styles.reload}>
          <Reload style={styles.reload}></Reload>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.openModal1} style={styles.plus}>
          <Plus style={styles.plus}></Plus>
        </TouchableOpacity>

      </View>
    
    );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerList: {
    flex: 1,
    alignSelf: "center",
    padding: 30,
    zIndex:2,
  },

  containerComponent: {
    alignSelf: "center",
    width: width_80,
    height: 300,
  },

  header: {
    height: 90,
    width: width
  },

  Row: {
    height: 75,
    width: width_80,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 75
  },

  container_text: {
    fontFamily: "roboto-700",
    color: "rgba(1,66,137,1)",
    fontSize: 36,
    textAlign: "left"
  },
  rowfiller: {
    flex: 1,
    flexDirection: "row"
  },
  sortieren: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    textAlign: "right",
    marginRight: 10
  },
  neuesteZuerst: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    textAlign: "right"
  },

  reload: {
    marginBottom: 20,
    marginRight: 20,
    alignSelf: "flex-end"
  },
  
  plus: {
    marginBottom: 20,
    marginRight: 20,
    alignSelf: "flex-end"
  },


  // STYLES FOR ADDRESS POPUP

  rect: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  adresse: {
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 22,
    marginTop: 40,
    marginLeft: 150
  },
  Row_address: {
    height: 75,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 40,
  },
  company: {
    width: 75,
    height: 75,
    borderWidth: 3,
    borderColor: "rgba(155,155,155,1)",
    borderRadius: 25
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 50,
    height: 50,
    width: 30,
    marginTop: 5,
    marginLeft: 19
  },
  address_text: {
    width: 775,
    height: 60,
    //borderWidth: 1,
    //borderColor: "rgba(155,155,155,1)",
    //borderRadius: 25,
    marginLeft: 25,
    marginTop: 5,
    paddingLeft: 10
  },
  button_green: {
    width: 135,
    height: 40,
    borderRadius: 100,
    backgroundColor: "rgba(39,144,84,1)",
    marginTop: 15,
    marginLeft: 775,
    marginBottom: 20
  },
  los: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 3,
    alignSelf: "center"
  }


});

export default Home;
