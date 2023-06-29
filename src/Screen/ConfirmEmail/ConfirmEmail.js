import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../Components/CustomInput/CustomButton/CustomButton.js';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const ConfirmEmail = () => {
  const navigation=useNavigation()
  const{control,handleSubmit}=useForm()

  const onConfirmPressed = (data) => {
    console.warn(data)
    navigation.navigate('Home')
  }

  const onSignPress = () => {
    console.warn(" bck to SignIn")
    navigation.navigate('SignIn')
  }

  const onResendPress = () => {
    console.warn(" bck to SignIn")
  }

  return (
    <ScrollView>
      <View style={Styles.root}>
        <Text style={Styles.title}>Confiration page</Text>
        <CustomInput name='code' control={control} placeholder="Enter your Confirmation Code" rules={{required:'Confirmation Code is required'}}/>
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton text="Resend Code" onPress={handleSubmit(onResendPress)} type="TERTIARY" />
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

export default ConfirmEmail