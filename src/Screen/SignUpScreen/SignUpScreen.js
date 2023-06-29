import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../Components/CustomInput/CustomButton/CustomButton.js';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const SignUpScreen = () => {
  const navigation=useNavigation()

  const {control,handleSubmit,watch}=useForm( )
  const pwd =watch('Password')

  const onRegisterPressed = () => {
    console.warn("register done")
    navigation.navigate('ConfirmEmail')
  }

  const onSignInPress = () => {
    console.warn("Sign In please")
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView>
      <View style={Styles.root}>
        <Text style={Styles.title}>Create Account</Text>
        <CustomInput name='Email' control={control} placeholder="Email" rules={{required:'Email is required'}} />
        <CustomInput name='Name' control={control} placeholder="Name" rules={{required:'Name is required'}}/>
        <CustomInput name='Password' control={control} placeholder="Password" secureTextEntry rules={{required:'Password is required',minLength:{value:8,message:'Password must be minimum length of 8'}}}/>
        <CustomInput name='ReEnter' control={control} placeholder="ReEnter" rules={{validate:value=>value==pwd || 'Password do not match'}}/>
        <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
        <CustomButton text="Have an account Sign in" onPress={handleSubmit(onSignInPress)} type="TERTIARY" />
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

export default SignUpScreen