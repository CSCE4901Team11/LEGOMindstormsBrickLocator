import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TouchableOpacity } from 'react-native';
import styles from './Scanner.styles';
import React, { useContext, useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import { ThemeContext } from '../constants/context';
import { useNavigation } from '@react-navigation/native';

import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import * as tfrn from '@tensorflow/tfjs-react-native'

const TensorCamera = tfrn.cameraWithTensors(Camera);

console.disableYellowBox = true;

function ScannerScreen() {
  const [predictionFound, setPredictionFound] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [brickDetected, setBrickDetected] = useState(false);

  const [mobilenetModel, setMobilenetModel] = useState(null); //Replace with custom model
  const [frameworkReady, setFrameworkReady] = useState(false);

  const navigation = useNavigation();
  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;

  let requestAnimationFrameId = 0;

  const textureDims = Platform.OS === "ios"? { width: 1080, height: 1920 } : { width: 1600, height: 1200 };
  const tensorDims = { width: 152, height: 200 }; 

  /*
  const highlight = document.createElement('div');
    highlight.setAttribute('class', 'highlight');
    highlight.style = 'left: ' + prediction[n].bbox[0] + 'px; top: ' + prediction[n].bbox[1] + 'px; width: ' + prediction[n].bbox[2] + 'px; height: ' + prediction[n].bbox[3]+ 'px;';

    */

  useEffect(() => {
    if(!frameworkReady) {
      (async () => {

        //check permissions
        const { status } = await Camera.requestCameraPermissionsAsync();
        console.log(`permissions status: ${status}`);
        setHasPermission(status === 'granted');

        //we must always wait for the Tensorflow API to be ready before any TF operation...
        await tf.ready();

        console.log(`tf status: ${tf.ready()}`)
        //load the mobilenet model and save it in state
        setMobilenetModel(await loadMobileNetModel());

        console.log(`tf ready`)
        setFrameworkReady(true);
      })();
    }
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestAnimationFrameId);
    };
  }, [requestAnimationFrameId]);

  
  const DetectBrick = async (className) => { //To Implement
    setBrickDetected(true);
    Alert.alert("Detected:","Alert: " + className + " detected.", [{text:"OK"}]);
    loadNewBrick();
  }
  

  const loadMobileNetModel = async () => {
    const model = await mobilenet.load();
    console.log(`model loaded`);
    return model;
  }

  const getPrediction = async(tensor) => {
    if(!tensor) { return; }

    //topk set to 1
    const prediction = await mobilenetModel.classify(tensor, 1);
    console.log(`prediction: ${JSON.stringify(prediction)}`);

    if(!prediction || prediction.length === 0) { return; }
    
    //only attempt detection when confidence is higher than 20%
    if(prediction[0].probability > 0.2) {

      cancelAnimationFrame(requestAnimationFrameId);
      setPredictionFound(true);

      await DetectBrick(prediction[0].className);
    }
  }

  const handleCameraStream = (imageAsTensors) => {
    const loop = async () => {
      const nextImageTensor = await imageAsTensors.next().value;
      await getPrediction(nextImageTensor);
      requestAnimationFrameId = requestAnimationFrame(loop);
    };
    if(!predictionFound) loop();
  }

  //Load selected brick
  const loadNewBrick = () => {
    setPredictionFound(false);
    setBrickDetected(false);
  }

  const renderCameraView = () => {
    return <View flex={1}>
                <TensorCamera
                  style={styles.camera_window}
                  type={Camera.Constants.Type.back}
                  zoom={0}
                  cameraTextureHeight={textureDims.height}
                  cameraTextureWidth={textureDims.width}
                  resizeHeight={tensorDims.height}
                  resizeWidth={tensorDims.width}
                  resizeDepth={3}
                  onReady={imageAsTensors => handleCameraStream(imageAsTensors)}
                  autorender={true} >
                    <Text style={theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue}>
                    Point to a brick to identify it.
                    </Text>
                  </TensorCamera>
            </View>;
  }
  return (
      <View style={theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue}>
        {brickDetected ? DetectBrick() : renderCameraView() }
        <StatusBar style="auto" />
      </View>
  );
}

export default ScannerScreen;
