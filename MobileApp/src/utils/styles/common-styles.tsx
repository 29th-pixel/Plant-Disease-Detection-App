import { StyleSheet } from "react-native";
import { PRIMARY_WHITE,PRIMARY_ACCENT } from "../constants/colors";

export const commonStyles=StyleSheet.create({
    parentContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:PRIMARY_WHITE,
        paddingHorizontal:8
    },
    image:{
        borderRadius:4,
        marginVertical:2
    },
    text:{
        color:PRIMARY_ACCENT,
        marginVertical:2,
    },
    titleText:{
        color:PRIMARY_ACCENT,
        fontSize:24,
        fontWeight:'bold',
        marginVertical:8
    }
})