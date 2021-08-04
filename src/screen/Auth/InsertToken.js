import React from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  Text,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonView from '../../components/ButtonView';
import TextView from '../../components/TextView';
import {styles, colors} from '../../styles/styles';

const InsertToken = (props) => {
  return (
    <ScrollView style={[styles.backgroundLight, styles.flex, styles.padding0]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      {/* <NewPassword /> */}
      <View style={[styles.container5, styles.padding0]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={[styles.marginHm]}>
        <View style={[styles.flex, styles.row, styles.center, styles.marginVs]}>
          <Image
            source={require('../../assets/Icon/logo.png')}
            style={{width: 150, height: 80}}
          />
        </View>
        <View style={[styles.marginVM, styles.center]}>
          <Text style={[styles.textHeader2, styles.textH3]}>
            Masukkan kode konfirmasi
          </Text>
        </View>
        <View style={[styles.marginVM, styles.alignItems]}>
          <TextView placeholder="Masukkan Token" />
        </View>
        <ButtonView title="Kirim Token" dark onPress={NewPassword} />
        <View
          style={[styles.marginVM, styles.alignItems, styles.marginTop]}></View>
      </View>
    </ScrollView>
  );
};

export default InsertToken;

const NewPassword = (props) => {
  return (
    <ScrollView style={[styles.backgroundLight, styles.flex, styles.padding0]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={[styles.container5, styles.padding0]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={[styles.marginHm]}>
        <View style={[styles.flex, styles.row, styles.center, styles.marginVs]}>
          <Image
            source={require('../../assets/Icon/logo.png')}
            style={{width: 150, height: 80}}
          />
        </View>
        <View style={[styles.marginVM, styles.center]}>
          <Text style={[styles.textHeader2, styles.textH3]}>
            Masukkan password baru
          </Text>
        </View>
        <View style={[styles.alignItems]}>
          <TextView placeholder="New password" />
        </View>
        <View style={[styles.marginVM, styles.alignItems]}>
          <TextView placeholder="Password confirmation" />
        </View>
        <ButtonView title="Konfirmasi password" dark />
        <View
          style={[styles.marginVM, styles.alignItems, styles.marginTop]}></View>
      </View>
    </ScrollView>
  );
};
