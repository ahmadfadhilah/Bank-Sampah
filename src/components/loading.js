import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LottieView from 'lottie-react-native'

const Loading = () => {
  return (
    <View style={Styles.container}>
      <LottieView 
        source={require('../../assets/lottie/aaa.json')}
        autoPlay
        loop
        style={Styles.lottie}
      />
    </View>
  );
};

export default Loading;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lottie: {
    width: 200,
    height: 200
  }
});
