import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TouchableOpacity } from 'react-native';
import styles from './Scanner.styles.js';
import React from 'react';
import { Camera } from 'expo-camera';

function ScannerScreen() {
  const [startCamera,setStartCamera] = React.useState(false)

  const __startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Life is pain</Text>
      <Pressable style={styles.button}>
        {({ pressed }) => (
          <Text style={styles.button}>
            {pressed ? 'Bruh' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      
      {startCamera ? (
        <Camera
          style={{flex: 1,width:"100%"}}
          ref={(r) => {
            camera = r
          }}
        ></Camera>
      ) : (

          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
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

export default ScannerScreen;