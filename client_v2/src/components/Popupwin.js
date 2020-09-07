import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import TempButton from "./TempButton";
import HumidityButton from "./HumidityButton";

class Popupwin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { containerData: '' };
  }

  render() {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.Row1}>
          <Image
            source={require("../assets/images/Maersk1.png")}
            resizeMode="contain"
            style={styles.company}
          ></Image>
          <View style={styles.Row1Column1}>
            <Text style={styles.container_heading}>Container</Text>
            <Text style={styles.container_name}>MWBNB564534884a</Text>
          </View>
          <View style={styles.Row1Column2}>
            <Text style={styles.buchungsnummer_heading}>Buchungsnummer</Text>
            <Text style={styles.buchungsnummer}>35646794533</Text>
          </View>
        </View>

        <View style={styles.Row2}>
          <TempButton style={styles.tempButton} temp={this.props.containerData.Temperature}></TempButton>
          <HumidityButton style={styles.humidityButton} humidity={this.props.containerData.Humidity}></HumidityButton>
        </View>

        <View style={styles.graph}>
          <Text>Graph here</Text>
        </View>

        <Image
          source={require("../assets/images/001-lettuce.png")}
          resizeMode="contain"
          style={styles.image_lettuce}
        ></Image>
        <View style={styles.Row3}>
          <Image
            source={require("../assets/images/003-snowflake.png")}
            resizeMode="contain"
            style={styles.image_frozen}
          ></Image>
          <View style={styles.Content_Stack}>
            <Text style={styles.blattsalat}>Blattsalat</Text>
            <Text style={styles.gefroren}>gefroren</Text>
          </View>
        </View>

        <View style={styles.Row4}>
          <View style={styles.Row4Column1}>
            <Text style={styles.abfahrt}>Abfahrt</Text>
            <Text style={styles.abfahrt_ort}>Hamburg, Deutschland</Text>
            <Text style={styles.abfahrt_zeit}>26. September 2020, 08:32 Uhr</Text>
          </View>

          <View style={styles.Row4Column2}>
            <Text style={styles.ankunft}>Ankunft</Text>
            <Text style={styles.ankunft_ort}>Rotterdam, Niederlande</Text>
            <Text style={styles.ankunft_zeit}>27. September 2020, 15:53 Uhr</Text>
          </View>
        </View>

      </View>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  Row1: {
    height: 100,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 40,
  },
    company: {
      width: 80,
      height: 80
    },

    Row1Column1: {
      width: 350,
      marginLeft: 40,
      marginTop: 15
    },
      container_heading: {
        fontFamily: "roboto-regular",
        color: "rgba(119,119,119,1)",
        fontSize: 20,
        marginTop: -5
      },
      container_name: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        fontSize: 30,
        marginTop: -3
      },

    Row1Column2: {
      width: 180,
      marginLeft: 80,
      marginTop: 15,
    },
      buchungsnummer_heading: {
        fontFamily: "roboto-regular",
        color: "rgba(119,119,119,1)",
        fontSize: 20,
        marginTop: -5
      },
      buchungsnummer: {
        fontFamily: "roboto-500",
        color: "rgba(0,0,0,1)",
        fontSize: 25,
        marginTop: -3
      },
  
  Row2: {
    height: 60,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 100,
  },
    tempButton: {
      height: 60,
      width: 280,
      marginRight: 20
    },
    humidityButton: {
      height: 60,
      width: 280,
      marginLeft: 20
    },


  graph: {
    width: 720,
    height: 250,
    backgroundColor: "#E6E6E6",
    marginTop: 35,
    marginLeft: 100
  },

  Row3: {
    height: 51,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 382,
    marginRight: 382
  },
    image_lettuce: {
      width: 100,
      height: 100,
      marginTop: 40,
      alignSelf: "center"
    },
  image_frozen: {
    width: 35,
    height: 35,
    marginTop: 10
  },
  Content_Stack: {
    width: 120,
    height: 50,
    marginLeft: 10,
    alignSelf: "center"
  },
    blattsalat: {
      fontFamily: "roboto-regular",
      color: "rgba(0,0,0,1)",
      fontSize: 25
    },
    gefroren: {
      fontFamily: "roboto-regular",
      color: "rgba(119,119,119,1)",
      fontSize: 20,
    },
  
  Row4: {
    height: 200,
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center"
  },
    Row4Column1: {
      width: 400,
      marginLeft: 10
    },
      abfahrt: {
        fontFamily: "roboto-regular",
        color: "rgba(119,119,119,1)",
        fontSize: 20,
        marginTop: 30
      },
      abfahrt_ort: {
        fontFamily: "roboto-500",
        color: "rgba(0,0,0,1)",
        fontSize: 30
      },
      abfahrt_zeit: {
        fontFamily: "roboto-regular",
        color: "rgba(119,119,119,1)",
        fontSize: 20
      },
    Row4Column2: {
      width: 400,
      marginRight: 10
    },
      ankunft: {
        fontFamily: "roboto-regular",
        color: "rgba(119,119,119,1)",
        fontSize: 20,
        marginTop: 35
      },
      ankunft_ort: {
        fontFamily: "roboto-500",
        color: "rgba(0,0,0,1)",
        fontSize: 30
      },
      ankunft_zeit: {
        fontFamily: "roboto-regular",
        color: "rgba(119,119,119,1)",
        fontSize: 20
      },


  abfahrt3: {
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 20
  },
  ankunft1: {
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 20,
    marginLeft: 477
  },
  abfahrt3Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 27,
    marginRight: 276
  },
  hamburgDeutschland3: {
    fontFamily: "roboto-500",
    color: "rgba(0,0,0,1)",
    fontSize: 30
  },
  hamburgDeutschland1: {
    fontFamily: "roboto-500",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    marginLeft: 237
  },
  hamburgDeutschland3Row: {
    height: 37,
    flexDirection: "row",
    marginLeft: 27,
    marginRight: 28
  },
  abfahrt2: {
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 20
  },
  abfahrt1: {
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 20,
    marginLeft: 270
  },
  abfahrt2Row: {
    height: 24,
    flexDirection: "row",
    marginLeft: 27,
    marginRight: 72
  }
});

export default Popupwin;
