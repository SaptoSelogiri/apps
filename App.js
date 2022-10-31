import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navi from './routes/homeStack';

export default function App() {
  const state_1 =true;
  return (
    <Navi/>
   //<Game/>
   //<Home/>
    
    
//   <View style={styles.container}>
//    <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
