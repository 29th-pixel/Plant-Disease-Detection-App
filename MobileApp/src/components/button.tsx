import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'
import { PRIMARY_WHITE } from '../utils/constants/colors'

type ButtonProps={
    title:string;
    onPress:()=>void,
    style?:Object;
    disabled?:boolean
}
const Button:React.FC<ButtonProps> = ({title,onPress,style,disabled}) => {
  return (
    <TouchableOpacity style={[styles.parentContainer,style]} onPress={onPress} disabled={disabled}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  parentContainer:{
    paddingVertical:12,
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4
  },
  text:{color:PRIMARY_WHITE}
})

export default Button