import React from 'react';
import {View, Text, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles, colors} from '../../styles/styles';

const QrScreen = () => {
  return (
      <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={[styles.flex, styles.center, styles.backgroundWhite]}>
        <View>
          <Text style={{fontSize: 40, fontWeight: '700', color: 'grey'}}>Coming Soon</Text>
        </View>
      </View>
      </>
  );
};

export default QrScreen;
