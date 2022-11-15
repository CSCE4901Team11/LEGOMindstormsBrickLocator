export default ScannerScreen;


import { Text, View, Pressable, TouchableOpacity, Alert } from 'react-native';
import styles from './Scanner.styles';
import React, { useContext, useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import { ThemeContext } from '../constants/context';
import { useNavigation } from '@react-navigation/native';

import * as cocoSSD from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';
import * as tfrn from '@tensorflow/tfjs-react-native'

const TensorCamera = tfrn.cameraWithTensors(Camera);

console.disableYellowBox = true;

function ScannerScreen() {
  const [predictionFound, setPredictionFound] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [brickDetected, setBrickDetected] = useState(false);

  const cameraRef = useRef(null);

  const [cocoSSDModel, setcocoSSDModel] = useState(null); //Replace with custom model
  const [frameworkReady, setFrameworkReady] = useState(false);

  const navigation = useNavigation();
  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;

  let requestAnimationFrameId = 0;

  let x = 0;
  let y = 0;
  let w = 0;
  let h = 0;

  const textureDims = { width: 1080, height: 1920 };
  const tensorDims = { width: textureDims.width/4, height: textureDims.height/4 };     

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
        setcocoSSDModel(await loadcocoSSDModel());

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
    loadNewBrick()
    drawBoundingBoxes(x,y,w,h);
  }

  const loadcocoSSDModel = async () => {
    console.log('Start loading model');
    const model = await cocoSSD.load();
    console.log(`model loaded`);
    return model;
  }

  const getPrediction = async(tensor) => {
    if(!tensor) { return; }

    //topk set to 1
    const prediction = await cocoSSDModel.detect(tensor);
    if(prediction != 'undefined' || prediction != '[]') {
      console.log(`prediction: ${JSON.stringify(prediction)}`);
    }

    if(!prediction || prediction.length === 0) { return; }
    
    //only attempt detection when confidence is higher than 20%
    if(prediction[0].score > 0.5) {

      x = prediction[0].bbox[0];
      y = prediction[0].bbox[1];
      w = prediction[0].bbox[2];
      h = prediction[0].bbox[3];

      cancelAnimationFrame(requestAnimationFrameId);
      setPredictionFound(true);

      await DetectBrick(prediction[0].className);

      drawBoundingBoxes(x,y,w,h);
    }
  }

  const delay = async () => {
    if(!frameworkReady) delay();
  return;
  }

  const drawBoundingBoxes = (x,y,w,h) => {
    console.log("Drawing bounding boxes.")
    return(
      <View style={[styles.highlighter, {top: y-10,left: x-10,width: w*2,height: h*2, zIndex: 9999}]}>
        <Text>???????????????</Text>
      </View>
    );
  }

  const handleCameraStream = (imageAsTensors) => {
    const loop = async () => {
      if(!frameworkReady) {await delay();}
      const nextImageTensor = await imageAsTensors.next().value;
      await getPrediction(nextImageTensor);
      drawBoundingBoxes(x,y,w,h);
      requestAnimationFrameId = requestAnimationFrame(loop);
      tf.dispose(imageAsTensors);
    };
    if(!predictionFound) loop();
  }

  //Load selected brick
  const loadNewBrick = () => {
    setPredictionFound(false);
    setBrickDetected(false);
  }

  const renderCameraView = (frameworkReady) => {
    return <View flex={1}>
        <TensorCamera
          style={styles.camera_window}
          type={Camera.Constants.Type.back}
          ref={cameraRef}
          zoom={0}
          cameraTextureHeight={textureDims.height}
          cameraTextureWidth={textureDims.width}
          resizeHeight={tensorDims.height}
          resizeWidth={tensorDims.width}
          resizeDepth={3}
          onReady={imageAsTensors => handleCameraStream(imageAsTensors)}
          autorender={true} >
          </TensorCamera>
    </View>;
  }

  const awaitFrameworkReady = () => {
    if(frameworkReady) {
      return( brickDetected ? DetectBrick() : renderCameraView(frameworkReady) );
    }
  }

  return (
      <View style={theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue}>
        {awaitFrameworkReady()}
      </View>
  );
}