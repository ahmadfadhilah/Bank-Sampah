import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles, colors} from '../../styles/styles';

const Splash = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={Styles.container}>
        <Image
          source={require('../../assets/Icon/logo.png')}
          style={Styles.image}
        />
        <LottieView
          source={require('../../assets/lottie/aaa.json')}
          autoPlay
          loop
          style={Styles.lottie}
        />
      </View>
    </>
  );
};

export default Splash;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  lottie: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: 140,
    marginTop: '20%',
  },
});
