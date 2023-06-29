import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../Components/CustomInput/CustomButton/CustomButton.js';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const ResetPassword = () => {
  const navigation=useNavigation()

  const {control,handleSubmit}=useForm()

  const onSubmitPressed = (data) => {
    console.warn(data)
    navigation.navigate('Home')
  }

  const onSignPress = () => {
    console.warn(" bck to SignIn")
    navigation.navigate('SignIn')
  }


  return (
    <ScrollView>
      <View style={Styles.root}>
        <Text style={Styles.title}>Enter New Password</Text>
        <CustomInput name='Code' control={control} placeholder="code" rules={{required:'code is required',minLength:{value:8,message:'Password must be minimum length of 8'}}}/>
        <CustomInput name='NewPassword' control={control} placeholder="Enter New Password"/>
        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
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

export default ResetPassword