import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import TempButton from "./TempButton";
import HumidityButton from "./HumidityButton";

import {
  Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea,
} from 'recharts';

// Store Things
var store = require('store');
var data = [];

//var payload = store.get(this.props.data).payload;
//var history = store.get(this.props.data).history;
try {
var payload = store.get("container1").payload;
var history = store.get("container1").history;

// Data from Container History
data = [
  { name: history[9].dateTime, temp: parseInt(history[9].Temperature), hum: parseInt(history[9].Humidity), },
  { name: history[8].dateTime, temp: parseInt(history[8].Temperature), hum: parseInt(history[8].Humidity), },
  { name: history[7].dateTime, temp: parseInt(history[7].Temperature), hum: parseInt(history[7].Humidity), },
  { name: history[6].dateTime, temp: parseInt(history[6].Temperature), hum: parseInt(history[6].Humidity), },
  { name: history[5].dateTime, temp: parseInt(history[5].Temperature), hum: parseInt(history[5].Humidity), },
  { name: history[4].dateTime, temp: parseInt(history[4].Temperature), hum: parseInt(history[4].Humidity), },
  { name: history[3].dateTime, temp: parseInt(history[3].Temperature), hum: parseInt(history[3].Humidity), },
  { name: history[2].dateTime, temp: parseInt(history[2].Temperature), hum: parseInt(history[2].Humidity), },
  { name: history[1].dateTime, temp: parseInt(history[1].Temperature), hum: parseInt(history[1].Humidity), },
  { name: history[0].dateTime, temp: parseInt(history[0].Temperature), hum: parseInt(history[0].Humidity), },
];
} catch(e){
  alert("Didn't found any container. Maybe initializing?");
}

const initialState = {
  data,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: '25',
  bottom: '15',
  top2: '100',
  bottom2: '40',
  animation: true,
};

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = data.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

class Popupwin extends React.Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nhpemhgs/';
  
    constructor(props) {
    super(props);
    this.state = initialState;
    }

    zoom() {
      let { refAreaLeft, refAreaRight, data } = this.state;
      
      if (refAreaLeft === refAreaRight || refAreaRight === '') {
        this.setState(() => ({
          refAreaLeft: '',
          refAreaRight: '',
        }));
        return;
      }
      
      // xAxis domain
      if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];
      
      // yAxis domain
      const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'temp', 0);
      const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'hum', 0);
      
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
        data: data.slice(),
        left: refAreaLeft,
        right: refAreaRight,
        bottom,
        top,
        bottom2,
        top2,
      }));
      }
      
      zoomOut() {
        const { data } = this.state;
        this.setState(() => ({
          data: data.slice(),
          refAreaLeft: '',
          refAreaRight: '',
          left: 'dataMin',
          right: 'dataMax',
          top: 'dataMax+1',
          bottom: 'dataMin',
          top2: 'dataMax+50',
          bottom2: 'dataMin+50',
        }));
      }
    
//<IOTA_Chart style={styles.graph} />
  render() {
    const {
      data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2,
    } = this.state;
   
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
              <Text style={styles.container_name}>{payload.container}</Text>
            </View>
            <View style={styles.Row1Column2}>
              <Text style={styles.buchungsnummer_heading}>Buchungsnummer</Text>
              <Text style={styles.buchungsnummer}>{payload.booking_nr}</Text>
            </View>
          </View>

          <View style={styles.Row2}>
            <TempButton style={styles.tempButton} temp={payload.Temperature}></TempButton>
            <HumidityButton style={styles.humidityButton} humidity={payload.Humidity}></HumidityButton>
          </View>

          <View style={styles.graph}>
            <LineChart
            width={800}
            height={250}
            data={data}
            onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
            onMouseMove={e => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
            onMouseUp={this.zoom.bind(this)}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                allowDataOverflow
                dataKey="name"
                domain={[left, right]}
                type="category"
              />
              <YAxis
                allowDataOverflow
                domain={[15, 25]}
                type="number"
                yAxisId="1"
              />
              <YAxis
                orientation="right"
                allowDataOverflow
                domain={[40, 100]}
                type="number"
                yAxisId="2"
              />
              <Tooltip />
              <Line yAxisId="1" type="natural" dataKey="temp" stroke="#8884d8" animationDuration={300} />
              <Line yAxisId="2" type="natural" dataKey="hum" stroke="#82ca9d" animationDuration={300} />

              {
                (refAreaLeft && refAreaRight) ? (
                  <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />) : null
                }
            </LineChart>
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
              <Text style={styles.blattsalat}>{payload.content}</Text>
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
