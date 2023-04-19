import { Text, View, Pressable, TouchableOpacity, Alert, Platform } from 'react-native';
import styles from './Scanner.styles';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { ThemeContext } from '../constants/context';
import { useNavigation } from '@react-navigation/native';
import Themes from '../constants/ThemeColors';

import * as cocoSSD from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';
import * as tfrn from '@tensorflow/tfjs-react-native'
// import * as tfn from '@tensorflow/tfjs-node'


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
  const colors = Themes[theme];

  let requestAnimationFrameId = 0;

  let x = 0;
  let y = 0;
  let w = 0;
  let h = 0;

  const [boundingBoxes, setBoundingBoxes] = useState([<highlighter />])

  let textureDims;
  if (Platform.OS === 'ios') { 
    textureDims = {
      width: 1080, 
      height: 1920
    };
  }
  else {
    textureDims = {
      width: 1600, 
      height: 1200
    };
  }
  const tensorDims = { width: 640, height: 640 };     

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
  }

  const loadcocoSSDModel = async () => {
    console.log('Start loading model');
    // const model = await cocoSSD.load();
    const model = await tf.loadGraphModel('https://storage.googleapis.com/mindstormsjsmodel/CoreJSModel/model.json'); 
    // const model = await tf.loadGraphModel('file://jsmodel/model.json'); 
    console.log(`model loaded`);
    // const inputs = tf.zeros([1, 640, 640, 3])
    // const newmodel = await model.execute(inputs)
    return model;
  }

  const getPrediction = async(tensor) => {
    if(!tensor) { return; }
    //topk set to 1
    // const axis = 0
    // tf.expandDims(tensor, axis)
    const prediction = await cocoSSDModel.predict(tensor); // is undefined, only shows when it crashes
    if(prediction != 'undefined' || prediction != '[]') {
      console.log(`prediction: ${JSON.stringify(prediction)}`);
    }

    if(!prediction || prediction.length === 0) { return; }

    //only attempt detection when confidence is higher than 20%
    for(let i = 0; i < prediction.length; i++) {
      if(prediction[i].score > 0.5) {

        x = prediction[i].bbox[0];
        y = prediction[i].bbox[1];
        w = prediction[i].bbox[2];
        h = prediction[i].bbox[3];

        cancelAnimationFrame(requestAnimationFrameId);
        setPredictionFound(true);

        await DetectBrick(prediction[i].className);

        console.log("Adding bounding box.")
        setBoundingBoxes([...boundingBoxes,<Highlighter/>])
        console.log('Tensor count: ' + tf.memory().numTensors);
      }
    }
    tf.dispose(prediction)
  }

  const delay = async () => {
    if(!frameworkReady) delay();
  return;
  }

  const handleCameraStream = (imageAsTensors) => {
    const loop = async () => {
      if(!frameworkReady) {await delay();}
      // tf.expandDims(imageAsTensors)
      const nextImageTensor = await imageAsTensors.next().value;
      await getPrediction(nextImageTensor);
      
      requestAnimationFrameId = requestAnimationFrame(loop);
      tf.dispose(nextImageTensor);
      tf.dispose(imageAsTensors);
    };
    if(!predictionFound) loop();
  }

  //Load selected brick
  const loadNewBrick = () => {
    setPredictionFound(false);
    setBrickDetected(false);
  }

  const renderCameraView = () => {
    return <TensorCamera
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
        <View style={styles.header}>
          <Text style={styles.text}>Header</Text>
        </View>
        <View style={styles.cameraBody}>
          <Text style={styles.text}>Body</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>Footer</Text>
          <DetectStatusIndicator></DetectStatusIndicator>
        </View>
      </TensorCamera>;
  }


  const awaitFrameworkReady = () => {
    if(frameworkReady) {
      return( brickDetected ? DetectBrick() : renderCameraView(frameworkReady) );
    }
  }

 
  const DetectStatusIndicator = () => {
    return <View style={[
      styles.indicator,
      {
        flex: 1,
        bottom: 50,
        width: 50,
        height: 50,
      }
    ]} />
  }

  const Highlighter = (x,y,w,h) => {
    return <View style={[
      styles.highlighter,
      {
        top: y,
        left: x,
        width: w,
        height: h,
      }
    ]} />
  };

  return (
    <View accessible={true} accessibilityLabel="Lego Scanner" accessibilityRole="none"style={[styles.container, {backgroundColor: colors.background}] }>
      {awaitFrameworkReady()}
    </View>
  );
}

export default ScannerScreen;1