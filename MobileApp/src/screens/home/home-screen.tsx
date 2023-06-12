import React from 'react'
import {Text,StyleSheet,ScrollView,View } from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { commonStyles } from '../../utils/styles/common-styles';
import { data as imageData } from '../../utils/image-data';
import ImageItem from '../../components/image-item';
import { PRIMARY_ACCENT, PRIMARY_GREEN } from '../../utils/constants/colors';
import Button from '../../components/button';
const HomeScreen = () => {
  return (
    <SafeAreaProvider style={[commonStyles.parentContainer]}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text style={[commonStyles.titleText]}>🏵️Plant Disease Detection🏵️</Text>
        <Text style={[commonStyles.text,styles.description]}>Plant Disease Detection is necessary for every farmer so we are created Plant disease detection using Deep learning. In which we are using Convolutional Neural Network for classifying Leaf images into 39 Different Categories. The Convolutional Neural Code build in Pytorch Framework. For Training we are using Plant village dataset</Text>

        <View style={{ width:'90%' }}>
      {imageData.map((image, index) => {
        if (index % 2 === 0) {
          // Render the first image in the row
          return (
            <View key={image.title} style={{ flexDirection: 'row' }}>
              <ImageItem imageData={image} />
              {/* Render the second image in the row if available */}
              {index + 1 < imageData.length && (
                <ImageItem imageData={imageData[index + 1]} />
              )}
            </View>
          );
        }
        // Skip rendering when the index is odd since it will be handled in the previous if block
        return null;
      })}
    </View>
      </ScrollView>
      <Button title='Try It' style={{backgroundColor:PRIMARY_ACCENT, width:60,height:60,borderRadius:100,shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,position:'absolute',bottom:4,right:4}} onPress={()=>{}} />
    </SafeAreaProvider>
  )
}

const styles=StyleSheet.create({
  scrollview:{
    alignItems:'center'
  },
  description:{
    color:'black'
  }
})

export default HomeScreen