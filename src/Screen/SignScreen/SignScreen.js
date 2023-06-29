import { View, Text, Image,TextInput, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../Components/CustomInput/CustomButton/CustomButton.js';
import Logo from '../../../assets/images/download.jpeg'
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'


const SignInScreen = () => {
  const { height } = useWindowDimensions()
  const navigation=useNavigation()

  const {control,handleSubmit,formState:{errors}}=useForm()

  const onSignInPressed = (data) => {
    console.log(data)
    navigation.navigate('Home')
  }

  const onForgotPasswordPresse = () => {
    console.warn("Forgot your Password")
    navigation.navigate("ResetPassword")
  }
  const onSignUpPress = () => {
    console.warn("Sign Up please")
    navigation.navigate("SignUp")
  }

  return (
    <ScrollView style={Styles.root}>
      <View  style={Styles.center}>
        <Image source={Logo} style={[Styles.logo, { height: height * 0.3 }]} />
        <CustomInput name="Email" placeholder="Email" control={control} rules={{required:'Email is Reequired'}} />
        <CustomInput name="Password" placeholder="Password" secureTextEntry control={control} rules={{required:'Password is Reequired',minLength:{value:8 ,message:'Password should be 3 char'}}}/>
      
        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton text="Forgot Password?" onPress={onForgotPasswordPresse} type="TERTIARY" />
        <CustomButton text="Don't have an Account" onPress={onSignUpPress} type="TERTIARY" />
      </View>
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  root: {
    // alignItems: 'center',
    padding: 20,
    backgroundColor:'white'
  },
  center:{
    alignItems:"center"
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    resizeMode: 'contain',
    // backgroundColor:'white'
  }
})

export default SignInScreen