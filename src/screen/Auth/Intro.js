import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonView from '../../components/ButtonView';
import { styles, colors } from '../../styles/styles';

const Intro = (props) => {
  return (
    <>
    <StatusBar translucent backgroundColor="transparent" />
    <View style={S.container}>
      <StatusBar />
      <View style={S.intro}>
        <Text style={S.text1}>Jual Sampah dapat Uang</Text>
        <Text style={S.text2}>Ayo mulai jual sampahmu dan dapatkan</Text>
        <Text style={S.text3}>uang dari penjualan secara langsung!</Text>
      </View>
      <View style={S.Image}>
        <Image
          source={require('../../assets/Icon/7952.jpg')}
          style={{width: '90%', height: '70%'}}
        />
      </View>
      <View style={{marginHorizontal: 25 }}>
        <ButtonView
          onPress={() => props.navigation.navigate('Register')}
          title="Daftar Sekarang"
          dark
        />
      </View>
      <View style={[styles.marginBot, styles.row, styles.center]}>
      <Text style={[styles.textCenter, styles.textMedium, styles.textHeader2]}>Sudah punya akun, </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={[styles.textCenter, styles.textMedium, styles.textBlue]}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default Intro;

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 8
  },
  intro: {
    alignItems: 'center',
    marginTop: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2EB5E0',
    paddingTop: 12,
  },
  text2: {
    fontSize: 17,
    color: '#2EB5E0',
    fontWeight: '700',
    paddingTop: 13,
  },
  text3: {
    fontSize: 17,
    color: '#2EB5E0',
    fontWeight: '700',
  },
  Image: {
    alignItems: 'center',
    marginTop: 30,
  },
});
