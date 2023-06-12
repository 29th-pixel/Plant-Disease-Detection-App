import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import { PRIMARY_WHITE } from '../utils/constants/colors'

type ButtonProps={
    title:string;
    onPress:()=>void,
    style?:Object;
}
const Button:React.FC<ButtonProps> = ({title,onPress,style}) => {
  return (
    <TouchableOpacity style={[{paddingVertical:4,paddingHorizontal:8,width:'90%',alignItems:'center',justifyContent:'center',},style]}>
        <Text style={{color:PRIMARY_WHITE}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button