import { View, Text ,StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.conatainer,styles[`conatainer_${type}`]]}>
      <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({
    conatainer:{
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    conatainer_PRIMARY:{
        backgroundColor:'black'
    },
    conatainer_TERTIARY:{
        color:"grey"
    },
    text_PRIMARY:{
        fontWeight:'bold',
        color:"white"
    },
    text_TERTIARY:{
        fontWeight:'bold',
        color:"grey"
    }
})

export default CustomButton