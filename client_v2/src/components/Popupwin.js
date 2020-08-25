import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import TempButton from "./TempButton";

function Popupwin(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/Maersk1.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.container1Column}>
            <Text style={styles.container1}>Container</Text>
            <Text style={styles.mwbnb1}>MWBNB564534884a</Text>
          </View>
          <View style={styles.buchungsnummer1Column}>
            <Text style={styles.buchungsnummer1}>Buchungsnummer</Text>
            <Text style={styles.hamburgDeutschland2}>35646794533</Text>
          </View>
        </View>
        <TempButton style={styles.tempButton}></TempButton>
        <View style={styles.rect2}></View>
        <Image
          source={require("../assets/images/001-lettuce.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <View style={styles.image1Row}>
          <Image
            source={require("../assets/images/003-snowflake.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <View style={styles.gefroren1Stack}>
            <Text style={styles.gefroren1}>gefroren</Text>
            <Text style={styles.blattsalat1}>Blattsalat</Text>
          </View>
        </View>
        <View style={styles.abfahrt3Row}>
          <Text style={styles.abfahrt3}>Abfahrt</Text>
          <Text style={styles.ankunft1}>Ankunft</Text>
        </View>
        <View style={styles.hamburgDeutschland3Row}>
          <Text style={styles.hamburgDeutschland3}>Hamburg, Deutschland</Text>
          <Text style={styles.hamburgDeutschland1}>Rotterdam, Niederlande</Text>
        </View>
        <View style={styles.abfahrt2Row}>
          <Text style={styles.abfahrt2}>26. September 2020, 08:32 Uhr</Text>
          <Text style={styles.abfahrt1}>27. September 2020, 15:53 Uhr</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 916,
    height: 916,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 30
  },
  image: {
    width: 98,
    height: 98
  },
  container1: {
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 20
  },
  mwbnb1: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  container1Column: {
    width: 377,
    marginLeft: 42,
    marginTop: 13,
    marginBottom: 13
  },
  buchungsnummer1: {
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 20
  },
  hamburgDeutschland2: {
    fontFamily: "roboto-500",
    color: "rgba(0,0,0,1)",
    fontSize: 30
  },
  buchungsnummer1Column: {
    width: 188,
    marginLeft: 96,
    marginTop: 19,
    marginBottom: 18
  },
  imageRow: {
    height: 98,
    flexDirection: "row",
    marginTop: 46,
    marginLeft: 45,
    marginRight: 70
  },
  tempButton: {
    height: 60,
    width: 279,
    marginTop: 47,
    marginLeft: 103
  },
  rect2: {
    width: 718,
    height: 264,
    backgroundColor: "#E6E6E6",
    marginTop: 37,
    marginLeft: 99
  },
  image2: {
    width: 106,
    height: 106,
    marginTop: 44,
    marginLeft: 405
  },
  image1: {
    width: 37,
    height: 37,
    marginTop: 9
  },
  gefroren1: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 20
  },
  blattsalat1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 25
  },
  gefroren1Stack: {
    width: 106,
    height: 51,
    marginLeft: 9
  },
  image1Row: {
    height: 51,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 382,
    marginRight: 382
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
