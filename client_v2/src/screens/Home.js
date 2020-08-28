import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, TouchableHighlight, Button } from "react-native";
import Header from "../components/Header";
import Container from "../components/Container";
import Plus from "../components/Plus";

import Addresswin from "../components/Addresswin";
import Popupwin from "../components/Popupwin";

import Popup from "reactjs-popup";

var width = Dimensions.get('window').width; //full width
var width_80 = Dimensions.get('window').width*0.8; //80% width
var width_50 = Dimensions.get('window').width*0.5; //50% width
var height = Dimensions.get('window').height; //full height
var height_50 = Dimensions.get('window').height*0.5; //50% height
var height_30 = Dimensions.get('window').height*0.3; //30% height

// Might use REDUX for global state management...

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal1 = this.openModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
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

  render() {
    return (
      <View style={styles.container}>

        <Header style={styles.header}></Header>

        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          { this.state.address ? <Addresswin style={styles.addresswin}></Addresswin> : null }
          { this.state.detail ? <Popupwin style={styles.popupwin}></Popupwin> : null }
        </Popup>

        <View style={styles.Row}>
            <Text style={styles.container_text}>Container</Text>
            <View style={styles.rowfiller}></View>
            <Text style={styles.sortieren}>Sortieren:</Text>
            <Text style={styles.neuesteZuerst}>Neueste zuerst</Text>
        </View>

        <ScrollView style={styles.containerList}>
          <TouchableOpacity onPress={this.openModal2}>
            <Container style={styles.containerComponent}></Container>
          </TouchableOpacity>
        </ScrollView>

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
  
  plus: {
    marginBottom: 20,
    marginRight: 20,
    alignSelf: "flex-end"
  },

  addresswin: {
    height: height_30,
    width: width_50,
    alignSelf: "center",
  },
  addresswin: {
    height: height_50,
    width: width_50,
    alignSelf: "center",
  },
});

export default Home;
