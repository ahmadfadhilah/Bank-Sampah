// import React, { useCallback } from "react";
// import { Alert, Button, Linking, StyleSheet, View, Text,  TouchableOpacity } from "react-native";

// const supportedURL = "http://mail.google.com/mail";

// const OpenURLButton = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     const supported = await Linking.canOpenURL(url);

//     if (supported) {
//       await Linking.openURL(url);
//     } 
//   }, [url]);

//   return <TouchableOpacity title={children} onPress={handlePress} />;
// };

// const ForgotPassword = () => {
//   return (
//     <View style={styles.container}>
//       <OpenURLButton url={supportedURL}>Forgot Password</OpenURLButton>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
// });

// export default ForgotPassword;

import React from 'react'
import { ScrollView, StatusBar, TouchableOpacity, View, Image, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ButtonView from '../../components/ButtonView'
import TextView from '../../components/TextView'
import { styles, colors } from '../../styles/styles'

const ForgotPassword = (props) => {
  return (
    <ScrollView style={[styles.backgroundLight, styles.flex, styles.padding0]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content"/>
        <View style={[styles.container5]}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon name="chevron-left" size={20} color={colors.primary}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.marginHm]}>
          <View style={[
            styles.flex,
            styles.row,
            styles.center,
            styles.marginVs
          ]}>
            <Image source={require('../../assets/Icon/logo.png')} style={{width: 150, height: 80}}/>
          </View>
          <View style={[styles.marginVM, styles.center]}>
            <Text style={[styles.textHeader2, styles.textH3]}>
              Masukkan email akun anda
            </Text>
          </View>
          <View style={[styles.marginVM, styles.alignItems]}>
            <TextView 
              placeholder="Masukkan email"
            />
          </View>
          <ButtonView 
            title="Kirim kode konfirmasi"
            dark
          />
          <View style={[styles.marginVM, styles.alignItems]}>
            <Text style={[
              styles.textMedium]} onPress={() => props.navigation.navigate('InsertToken')}>Sudah punya Token ?
            </Text>
          </View>
        </View>
    </ScrollView> 
  )
}

export default ForgotPassword

