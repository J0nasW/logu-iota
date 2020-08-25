import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Addresswin(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect3}>
        <Text style={styles.adresse}>Adresse:</Text>
        <View style={styles.rect4Row}>
          <View style={styles.rect4}>
            <Icon name="question" style={styles.icon}></Icon>
          </View>
          <View style={styles.rect5}></View>
        </View>
        <View style={styles.rect6}>
          <Text style={styles.los}>Los</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect3: {
    width: 916,
    height: 266,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 30
  },
  adresse: {
    fontFamily: "roboto-regular",
    color: "rgba(119,119,119,1)",
    fontSize: 30,
    marginTop: 46,
    marginLeft: 158
  },
  rect4: {
    width: 89,
    height: 89,
    borderWidth: 3,
    borderColor: "rgba(155,155,155,1)",
    borderRadius: 22
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 65,
    height: 65,
    width: 37,
    marginTop: 12,
    marginLeft: 26
  },
  rect5: {
    width: 707,
    height: 74,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderRadius: 22,
    marginLeft: 27,
    marginTop: 4
  },
  rect4Row: {
    height: 89,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 42,
    marginRight: 51
  },
  rect6: {
    width: 137,
    height: 42,
    borderRadius: 100,
    backgroundColor: "rgba(39,144,84,1)",
    marginTop: 15,
    marginLeft: 728
  },
  los: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 3,
    marginLeft: 44
  }
});

export default Addresswin;
