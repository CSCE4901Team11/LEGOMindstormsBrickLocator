import { Text, View, Pressable, TouchableOpacity, Alert, Platform } from 'react-native';
import styles from './Scanner.styles';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { ThemeContext } from '../constants/context';
import { useNavigation } from '@react-navigation/native';
import Themes from '../constants/ThemeColors';

import * as tf from '@tensorflow/tfjs';
import * as tfrn from '@tensorflow/tfjs-react-native'
import pieces from '../constants/MasterPartList.json';

const tensorPartIDs = [
  'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12',
  'C13','C14','C15','C16','C17','C18','C19','C20','C21','C22','C23','C24',
  'C25','C26','C27','C28','C29','C30','C31','C32','C33','C34','C35','C36',
  'C37','C38','C39','C40','C41','C42','C43','C44','C45','C46','C47','C48',
  'C49','C50','C51','C52','C53','C54','C55','C56','C57','C58','C59','C60',
  'C61','C62','C63','C64','C65','C66','C67','C68','C69','C70','C71','C72',
  'C73','C74','C75','C76','C77','C78','C79','C80','C81','C82','C83','C84',
  'C85','C90','C91','C94','E1','E2','E13','E14','E15','E19','E20','E21',
  'E22','E24','E27','E29','E30','E31','E32','E34','E35','E36','E37','E38',
  'E39','E40','E41','E42','E44','E47','E48','E50','E54','E55','E58',
  'E63','E64','E66','E71','E74','E76','E77','E79','E80','E82','E83','E85',
  'E86','E88','E91','E92','E95','E96','E98','E102','E104','E108','E109',
  'E110','E111','E112','E113','E114','E115','E116','E117','E118','E123',
  'E124','E126','E127','E128','E129','E130','E132','E133','E134','E135','E136'
]

const TensorCamera = tfrn.cameraWithTensors(Camera);

console.disableYellowBox = true;

function ScannerScreen() {
  let predictionFound = false;
  const [hasPermission, setHasPermission] = useState(false);
  const [predictions, setPredictions] = useState()

  const cameraRef = useRef(null);

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const [model, setModel] = useState(null); //Replace with custom model
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

        console.log(`Initialize TF`);
        //we must always wait for the Tensorflow API to be ready before any TF operation...
        await tf.ready();

        //load the model and save it in state
        setModel(await loadModel());

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

  const loadModel = async () => {
    console.log('Start loading model');
    const model = await tf.loadLayersModel('https://storage.googleapis.com/mindstormsjsmodel/TeachableMachine/model.json');

    console.log(`model loaded`);
    return model;
  }

  const getPrediction = async(tensor) => {
    if(!tensor) { return; }
  
    const prediction = await model.predict(tensor) ;
    const curMax = tf.max(prediction).dataSync();

    if(curMax > 0.80) { //only attempt detection when confidence is higher than 80%
      const pieceID = tf.argMax(tf.softmax(prediction), 1);
      const piece = tensorPartIDs[pieceID.dataSync()];
      console.log(`pieceID: ${piece} @ ${curMax}`);

      cancelAnimationFrame(requestAnimationFrameId);
      predictionFound = true;

      let partDetails = {
        officialName: 'NULL',
        mainPartID: -1,
        sheetPartID: -1,
        partColor: 'NULL'
      };
      
      findPiece(piece,partDetails)
      

      Alert.alert(`Found Brick: ${piece}`, `
      Official Name: ${partDetails.officialName}\n 
      Main Part ID: ${partDetails.mainPartID}\n 
      Sheet_Element_ID: ${partDetails.sheetPartID}\n 
      Color: ${partDetails.partColor}`, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => predictionFound = false,
        }
      ]);

      //console.log("Adding bounding box.")
      //setBoundingBoxes([...boundingBoxes,<Highlighter/>])
      //console.log('Tensor count: ' + tf.memory().numTensors);
    }
    tf.dispose(prediction) // it crashes before loading the camera if i put this back in. might conflict with the dispose in the camera section
  }

  const findPiece = (input,partDetails) => {
    const regex = new RegExp(input, "i")
    var data = (pieces.Parts).filter((item) => {
      if(regex.test(item.ID)) {
        partDetails.officialName = item.Official_Name;
        partDetails.mainPartID = item.Main_Part_ID;
        partDetails.sheetPartID = item.Sheet_Element_ID;
        partDetails.partColor = item.Color;
      }
    }
    );
  }

  const handleCameraStream = (imageAsTensors) => {
    if (!imageAsTensors){
      console.log("no tensors")
    }
    const loop = async () => {
      if(!frameworkReady) {await sleep(100);}
      if(!predictionFound) {
       // if (frameCount % everyNframes === 0){
        const nextImageTensor = await imageAsTensors.next().value;
  
        if (model){
          await getPrediction(nextImageTensor.expandDims()); //actually does the prediction part. still eventually crashes with undefined is not an object
        }
        tf.dispose(nextImageTensor);
        tf.dispose(imageAsTensors);
      }
      // }
      // frameCount += 1
      // frameCount = frameCount % everyNframes 
      requestAnimationFrameId = requestAnimationFrame(loop);
    };
    if(!predictionFound) loop();
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
      </TensorCamera>;
  }


  const awaitFrameworkReady = () => {
    if(frameworkReady) {
      return( renderCameraView(frameworkReady) );
    }
  }

  /*const Highlighter = (x,y,w,h) => {
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
  */

  return (
    <View accessible={true} accessibilityLabel="Lego Scanner" accessibilityRole="none"style={[styles.container, {backgroundColor: colors.background}] }>
      {awaitFrameworkReady()}
    </View>
  );
}

export default ScannerScreen;