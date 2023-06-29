import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

const CustomInput = ({ control, name, rules={}, placeholder, secureTextEntry }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: {error} }) => (
        <>
        <View style={[styles.container,{borderColor: error?'red':'#0B0705'}]}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder} placeholderTextColor="pink"
            secureTextEntry={secureTextEntry} />
        </View>
        {error && (<Text style={{color:'red',alignSelf:'stretch'}}>{error.message || 'Error'}</Text>)}
        </>
      )
      }
    />

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    borderColor: '#0B0705',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5
  },
  input: {
    color: "black",
    fontSize: 18,

  },
})

export default CustomInput