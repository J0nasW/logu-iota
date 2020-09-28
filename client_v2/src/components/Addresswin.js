import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Tooltip } from 'react-native-elements';

// REDUX MAGIC
import { connect } from 'react-redux'
import { addContainer } from '../actions'

class Addresswin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address_string: '',
      protocoll: '',
      loading: false };
  }

  handleChange = event => {
    this.setState({ address_string: event.target.value })
  };

  handleInput = () => {

    this.setState({ loading:true })

    let address = this.state.address_string;
    let address_length = this.state.address_string.length;

    const { dispatch } = this.props;  

    if (address_length > 50) {
      this.setState({ protocoll: "iota" });
      alert("Detected IOTA Protocoll - will fetch data.");
      this.props.store.dispatch(addContainer(address));
    }
    else {
      alert("No valid Address or Protocoll not found.")
    }

    setTimeout(()=>{
      this.setState({ loading:false })
    }, 1000)

  };

  render() {

    const {loading} = this.state;

    return (
      <View style={styles.rect}>
          <Text style={styles.adresse}>Fügen Sie einen neuen Container hinzu:</Text>
          <View style={styles.Row_address}>
            <View style={styles.company}>
              <Icon name="question" style={styles.icon}></Icon>
            </View>
              <Input
                placeholder='Container Adresse'
                value={this.state.address_string}
                onChange={this.handleChange}
                inputContainerStyle={styles.address_text}
              />
          </View>

          <Button
            title="Speichern"
            buttonStyle={styles.button_green}
            onPress={this.handleInput}
            loading={loading}
            disabled={loading}
          />

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
  },
  iota: {
    width: 40,
    height: 40
  }
});

export default connect(null, { addContainer })(Addresswin);
