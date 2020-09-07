import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, form, input } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


class Addresswin extends React.Component {

  constructor(props){
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = event => {
    this.setState({ address: event.target.value });
  };
  
  closeModal() {
    this.setState({ open: false });
  }


  render() {

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.adresse}>Adresse:</Text>
        <View style={styles.Row}>
          <View style={styles.company}>
            <Icon name="question" style={styles.icon}></Icon>
          </View>
          <View style={styles.address_text}></View>
          <form>
            <input 
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </form>
        </View>
          <TouchableOpacity style={styles.button_green} onPress={this.closeModal}>
            <Text style={styles.los}>Los</Text>
          </TouchableOpacity>
      </View>
    </View>
  );}
}

const styles = StyleSheet.create({
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
  Row: {
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
    width: 700,
    height: 70,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderRadius: 25,
    marginLeft: 25,
    marginTop: 5
  },
  button_green: {
    width: 135,
    height: 40,
    borderRadius: 100,
    backgroundColor: "rgba(39,144,84,1)",
    marginTop: 15,
    marginLeft: 700
  },
  los: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 3,
    alignSelf: "center"
  }
});

export default Addresswin;
