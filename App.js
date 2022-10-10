import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, TouchableOpacity } from "react-native";
import styles from "./App.style.js";
import React, { Component } from "react";
import { ProcessingView } from "expo-processing";
import { Camera } from "expo-camera";

class ObjectDetection extends React.Component {
  render() {
    return (<ProcessingView style={{ flex: 1 }} sketch={this.sketch} />);
  }

  _sketch = (p) => {
    p.setup = () => {
      p.strokeWeight(7);
    };

    p.draw = () => {
      p.background(0,0,0,0);
    };
  };
}

export default function App() {
  const [startCamera, setStartCamera] = React.useState(false);
  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      // start the camera
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Life is pain</Text>
      <Pressable style={styles.button}>
        {({ pressed }) => (
          <Text style={styles.button}>{pressed ? "Bruh" : "Press Me"}</Text>
        )}
      </Pressable>

      {startCamera ? (
        <View style={{flex:1, width: '100%'}}>
          <Camera style={{flex:1, width: '100%'}}>
            <ObjectDetection style={{flex:1, width: '100%', backgroundColor: 'transparent'}}/>
          </Camera>
        </View>
      ) : (
        <TouchableOpacity
          onPress={__startCamera}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: "#14274e",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Camera
          </Text>
        </TouchableOpacity>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
