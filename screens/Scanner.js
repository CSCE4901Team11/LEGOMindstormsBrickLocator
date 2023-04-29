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
  const [predictions, setPredictions] = useState()

  const cameraRef = useRef(null);

  const [cocoSSDModel, setcocoSSDModel] = useState(null); //Replace with custom model
  const [frameworkReady, setFrameworkReady] = useState(false);

  const navigation = useNavigation();

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;
  const colors = Themes[theme];

  let frameCount = 0;
  let everyNframes = 1; //how often it predicts. changing to decimal get one prediction and stops but doesnt freeze camera. 

  let x = 0;
  let y = 0;
  let w = 0;
  let h = 0;

  const [boundingBoxes, setBoundingBoxes] = useState([<highlighter />])

  let textureDims;
  if (Platform.OS === 'ios') { 
    textureDims = {
      width: 1080, 
      height: 1920,
    };
  }
  else {
    textureDims = {
      width: 1600, 
      height: 1200,
    };
  }

  const tensorDims = { 
    width: 224, 
    height: 224 ,
  }; 

  let requestAnimationFrameId = 0;


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
    // const model = await tf.loadGraphModel('https://storage.googleapis.com/mindstormsjsmodel/CoreJSModel/model.json'); //loads model, cannot make it any faster without other conversion method
    // const model = await tf.loadGraphModel('https://storage.googleapis.com/mindstormsjsmodel/CompressedModel/model.json'); 
    // const model = await tflite.loadTFLiteModel('https://storage.googleapis.com/mindstormsjsmodel/TfliteModel/mobilenet_coreset.tflite') // the tfjs tflite api is so incredibly broken
    // const model = await tf.loadGraphModel('file://jsmodel/model.json'); // tfjs node maybe doesnt exist?
    const model = await tf. loadLayersModel('https://storage.googleapis.com/mindstormsjsmodel/TeachableMachine/model.json');

    console.log(`model loaded`);
    return model;
  }

  const getPrediction = async(tensor) => {
    if(!tensor) { return; }
    //topk set to 1
  
    const prediction = await cocoSSDModel.predict(tensor) ; // it doesnt lik ethis method idk why
    // const prediction = await cocoSSDModel.executeAsync(tensor) // works  but camera goes black when model loads and the app is so laggy you cant tell it works. changing model does nothing to fix this
     console.log(`prediction: ${JSON.stringify(prediction.dataSync())}`);
    // console.log(prediction.dataSync()) // says data sync isnt a function but it is. needed to get readable data instead of raw tensor
    // return prediction
    // if(prediction != 'undefined' || prediction != '[]') {
    //   console.log(`prediction: ${JSON.stringify(prediction)}`);
    // }

    // if(!prediction || prediction.length === 0) { return; }

    // //only attempt detection when confidence is higher than 20%
    // for(let i = 0; i < prediction.length; i++) {
    //   if(prediction[i].score > 0.5) {

    //     x = prediction[i].bbox[0];
    //     y = prediction[i].bbox[1];
    //     w = prediction[i].bbox[2];
    //     h = prediction[i].bbox[3];

        cancelAnimationFrame(requestAnimationFrameId);
    //     setPredictionFound(true);

    //     await DetectBrick(prediction[i].className);

    //     console.log("Adding bounding box.")
    //     setBoundingBoxes([...boundingBoxes,<Highlighter/>])
    //     console.log('Tensor count: ' + tf.memory().numTensors);
    //   }
    // }
    // tf.dispose(prediction) // it crashes before loading the camera if i put this back in. might conflict with the dispose in the camera section
  }

  const delay = async () => {
    if(!frameworkReady) delay();
  return;
  }

  const handleCameraStream = (imageAsTensors) => {
    if (!imageAsTensors){
      console.log("no tensors")
    }
    const loop = async () => {
      if(!frameworkReady) {await delay();}
      
      // if (frameCount % everyNframes === 0){
        const nextImageTensor = await imageAsTensors.next().value;
  
        if (cocoSSDModel){
          // const reshapedTensor = nextImageTensor.expandDims() // chamges shape to be 4d tensor. gets first few tensors? then crashes saying it cant find the variable avoided by not putting things in variables
          const results = await getPrediction(nextImageTensor.expandDims()); //actually does the prediction part. still eventually crashes with undefined is not an object
          // const results = await getPrediction(nextImageTensor);
          setPredictionFound(true)
          setPredictions(results)
        }
        tf.dispose(nextImageTensor);
        tf.dispose(imageAsTensors);
      // }
      // frameCount += 1
      // frameCount = frameCount % everyNframes 
      requestAnimationFrameId = requestAnimationFrame(loop); // all of this did not fix the camera issue
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

export default ScannerScreen;