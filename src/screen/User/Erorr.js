import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native'
import {styles, colors} from '../../styles/styles'

const Erorr = () => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <LottieView 
        source={require('../../assets/lottie/40143-error-404.json')}
        autoPlay
        loop
        style={{width: 300, height: 300, alignItems: 'center', justifyContent: 'center'}}
      />
      <TouchableOpacity 
        style={{marginTop: '40%'}}
        >
          <Text style={{color: '#56E8F5', fontWeight: '700', fontSize: 16}}>Check your Network </Text>
          <Text style={{color: '#56E8F5', fontWeight: '700', fontSize: 16}}>  connection status</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Erorr;
