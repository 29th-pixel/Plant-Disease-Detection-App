import { Image, View,Text } from 'react-native';
import { commonStyles } from '../utils/styles/common-styles';
import { PRIMARY_WHITE,PRIMARY_GREEN } from '../utils/constants/colors';
type ImageItemProps={
    imageData:{
        imageUrl:string;
        title:string;
    }
}

const ImageItem:React.FC<ImageItemProps> = ({ imageData }) => (
  <View style={[{ flex: 1, margin:5,backgroundColor:PRIMARY_GREEN, padding:4,alignItems:'center',justifyContent:'center',borderRadius:8 }]}>
    <Image source={{ uri: imageData.imageUrl }} style={[{ flex: 1,width:100,height:100 },commonStyles.image]} resizeMode="cover" />
    <Text style={{fontSize:16,fontWeight:'600'}}>{imageData.title}</Text>
  </View>
);

export default ImageItem