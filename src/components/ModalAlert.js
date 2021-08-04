import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';

const ModalAlert = () => {
  
  return (
    <View style={[styles.container, styles.center]}>
      <View style={[styles.shadowButton, styles.center]}>
        <TouchableOpacity style={[styles.mainButton, styles.center]} onPress={() => console.log('react')}>
          <Text style={[styles.text]}>Open</Text>
        </TouchableOpacity>
      </View>
      <Animated.View>
        <View style={[styles.wrap]}>
          <Text style={[styles.helloText, styles.text]}>Hello</Text>
          <Text style={[styles.moreText, styles.text1]}>Apakah anda yakin? keluar dari akun ini sekarang</Text>
          <View style={[styles.row]}>
            <TouchableOpacity style={[styles.modalButton, styles.center]} onPress={() => console.log('Keluar')}>
              <Text style={[styles.text1]}>Keluar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.center]} onPress={() => console.log('Tidak')}>
              <Text style={[styles.text1]}>Tidak</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default ModalAlert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButton: {
    zIndex: 10,
    width: 200,
    height: 70,
    borderRadius: 100,
    shadowColor: '#4048BF',
    shadowOffset: {
      width: 6.4,
      height: 6.4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    backgroundColor: '#2D3953',
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Avenir'
  },
  text1: {
    fontSize: 19,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Avenir'
  },
  shadowButton: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 105,
    width: 210,
    height: 80,
    shadowColor: '#4048BF',
    shadowOffset: {
        width: 8.4,
        height: 8.4
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10
  },
  wrap: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    backgroundColor: "#2D3953",
    shadowColor: "#4048BF",
    shadowOffset: {
      width: 8.4,
      height: 8.4
    },
    shadowOpacity: 0.74,
    shadowRadius: 30,
    elevation: 10
  },
  helloText: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 20
  },
  moreText: {
    textAlign: "center",
    marginTop: 50
  },
  modalButton: {
    backgroundColor: "transparent",
    borderRadius: 100,
    borderColor: "#ffffff",
    marginTop: 50,
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 25,
    paddingRight: 25,
    marginHorizontal: 5,
    flex: 1
  }
});
