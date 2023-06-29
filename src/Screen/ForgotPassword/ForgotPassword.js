import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../Components/CustomInput/CustomButton/CustomButton.js';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'
const ForgotPassword = () => {
  const navigation=useNavigation()

  const {control,handleSubmit}=useForm()

  const onSendPressed = (data) => {
    console.warn(data)
    navigation.navigate('ResetPassword')
  }

  const onSignPress = () => {
    console.warn(" bck to SignIn")
    navigation.navigate('SignIn')
  }


  return (
    <ScrollView>
      <View style={Styles.root}>
        <Text style={Styles.title}>Reset Your Password</Text>
        <CustomInput name ='Email' control={control} placeholder="Enter your Email" rules={{require:'email is required'}}/>
        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
        <CustomButton text="back to sign in" onPress={handleSubmit(onSignPress)} type="TERTIARY" />
      </View>
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    resizeMode: 'contain'
  },
  title:{
    fontSize : 25,
    fontWeight:'bold',
    color:"#051C60",
    margin:10,
  }
})

export default ForgotPassword