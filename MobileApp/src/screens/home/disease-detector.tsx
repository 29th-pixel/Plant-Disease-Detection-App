import React,{useState} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {StyleSheet,Image,Text,ScrollView} from 'react-native'
import { commonStyles } from '../../utils/styles/common-styles'

import Button from '../../components/button'
import { PRIMARY_ACCENT, PRIMARY_GREEN } from '../../utils/constants/colors'

import ImagePicker from 'react-native-image-crop-picker';
const DiseaseDetectorScreen = () => {
  const buttonStyle={
    backgroundColor:PRIMARY_GREEN,
    marginVertical:8
  }

  type imageData={
    path:string;
  }

  const [selectedImage,setSelectedImage]=useState<imageData>({path:''})
  const [outputText,setOutputText]=useState<string>('');

  const openCamera=()=>{
    setOutputText('')
    ImagePicker.openCamera({
      width: 250,
      height: 250,
      cropping: false,
    }).then(image => {
      setSelectedImage({path:image.path})
    });
  }

  const openGallery=()=>{
    setOutputText('')
    ImagePicker.openPicker({
      multiple: false
    }).then(image => {
      setSelectedImage({path:image.path})
    });
  }

  const computeOutput=()=>{
    setOutputText('demo string')
  }
  return (
    <SafeAreaProvider style={[commonStyles.parentContainer,{paddingHorizontal:0}]}>
      <ScrollView contentContainerStyle={style.scrollview} showsVerticalScrollIndicator={false}>
        <Text style={[commonStyles.titleText]}>🏵️ Plant Disease Detector 🏵️</Text>
        <Image source={require('../../assets/images/plant.png')} style={[commonStyles.image,style.image]} />
        <Button title='Open Camera' onPress={openCamera} style={buttonStyle} />
        <Button title='Select from gallery' onPress={openGallery} style={buttonStyle} />
        {selectedImage.path?
        <>
        <Image source={{uri:selectedImage.path}} style={[commonStyles.image,style.plantImage]} />
        <Button title='FIND DISEASE' onPress={computeOutput} style={buttonStyle} />
        </>
        :
        null}

        
        {outputText?<Text style={style.outputText}>{`* ${outputText} *`}</Text>:null}
      </ScrollView>
    </SafeAreaProvider>
  )
}

const style=StyleSheet.create({
  image:{
    width:180,
    height:180
  },
  plantImage:{
    width:250,
    height:250,
    borderRadius:8
  },
  outputText:{
    color:PRIMARY_ACCENT,
    fontSize:24,
    marginTop:24,
    fontWeight:'bold'
  },
  scrollview:{
    alignItems:'center',
  }
})

export default DiseaseDetectorScreen