import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'
import { PRIMARY_WHITE } from '../utils/constants/colors'

type ButtonProps={
    title:string;
    onPress:()=>void,
    style?:Object;
}
const Button:React.FC<ButtonProps> = ({title,onPress,style}) => {
  return (
    <TouchableOpacity style={[styles.parentContainer,style]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  parentContainer:{
    paddingVertical:4,
    paddingHorizontal:8,
    width:'90%',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{color:PRIMARY_WHITE}
})

export default Button