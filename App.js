import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, TouchableOpacity } from "react-native";
import styles from "./App.style.js";
import React, { Component } from "react";
import { GLView } from "expo-gl";
import { Camera } from "expo-camera";

function onContextCreate(gl) {
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0, 0, 0, 0);

  //Implement pulling data from preview or take pic async.

  // Create vertex shader (shape & position)
  const vert = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(
    vert,
    `
    void main(void) {
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      gl_PointSize = 100.0;
    }
  `
  );
  gl.compileShader(vert);

  // Create fragment shader (color)
  const frag = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(
    frag,
    `
    void main(void) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
  `
  );
  gl.compileShader(frag);

  // Link together into a program
  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  gl.useProgram(program);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.POINTS, 0, 1);

  gl.flush();
  gl.endFrameEXP();
}

export default function App() {
  const [startCamera, setStartCamera] = React.useState(false)
  const [capturedFrame, setCapturedFrame] = React.useState(null)

  const __takePicture = async () => {
    const frame = await Camera.takePictureAsync()
    setCapturedFrame(frame)
  }  

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
        <View style={{ flex: 1, width: "100%" }}>
          <Camera style={{ flex: 1, width: "100%" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GLView
                style={{ width: "100%", height: "100%" }}
                onContextCreate={onContextCreate}
              />
            </View>
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
