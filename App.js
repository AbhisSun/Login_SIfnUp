/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Navigation from './src/Navigation/index.js';
// import { Amplify } from 'aws-amplify';
// import {withAuthenticator} from 'aws-amplify-react-native'
// import awsExports from './src/aws-exports';
// Amplify.configure(awsExports);

import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App=()=>{
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
  };

  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
      {/* <Navigation/> */}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC'
  }
});

// export default withAuthenticator(App); 
export default App;
