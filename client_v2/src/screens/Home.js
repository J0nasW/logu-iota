import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Container from "../components/Container";
import Plus from "../components/Plus";

import Modal from 'react-native-modal';

var width = Dimensions.get('window').width; //full width
var width_80 = Dimensions.get('window').width*0.8; //full width

var state = {
  isModalVisible:false
  }

openModal = () =>{
  this.setState({
  isModalVisible:true
  })
}

// SEE: https://medium.com/@alexb72/how-to-create-your-first-modal-popup-for-your-react-native-app-5e50b24d3df1

function Home(props) {
  return (
    <View style={styles.container}>

      <Header style={styles.header}></Header>
      
      <View style={styles.Row}>
          <Text style={styles.container_text}>Container</Text>
          <View style={styles.rowfiller}></View>
          <Text style={styles.sortieren}>Sortieren:</Text>
          <Text style={styles.neuesteZuerst}>Neueste zuerst</Text>
      </View>

      <ScrollView style={styles.containerList}>
        <Container style={styles.containerComponent}></Container>
      </ScrollView>
      
      <TouchableOpacity onPress={()=>this.openModal()}>
        <Plus style={styles.plus}></Plus>
      </TouchableOpacity>

      <Modal isVisible={this.state.isModalVisible} style={{backgroundColor:'white'}}>>
        <View style={{ flex: 1 }}>
          <Text>This is the modal content for now!</Text>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerList: {
    flex: 1,
    alignSelf: "center",
    padding: 30
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
  }
});

export default Home;
