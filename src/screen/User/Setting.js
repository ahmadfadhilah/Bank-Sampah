import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonView from '../../components/ButtonView';
import TextView from '../../components/TextView';
import {styles, colors} from '../../styles/styles';

const Setting = ({navigation}) => {
  const [secure, setSecure] = useState(true);
  
  return (
    <ScrollView style={[styles.backgroundLight, styles.flex, styles.marginVs]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={[styles.flex, styles.marginBot]}>
        <View style={[styles.row, styles.center, styles.padding1]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={22} color={colors.secondary} />
          </TouchableOpacity>
          <Text
            style={[
              styles.text1,
              styles.textHeader2,
              styles.marginHm,
              styles.flex,
            ]}>
            Pengaturan
          </Text>
        </View>
        <View style={{marginHorizontal: 16, marginVertical: 12}}>
          <Text style={[styles.text1, styles.textHeader2]}>
            Ubah kata sandi
          </Text>
          <View style={[styles.marginVs]}>
            <Text>password lama</Text>
            <TextView placeholder="masukkan password lama" secure />
          </View>
          <View style={[styles.marginVs]}>
            <Text>password baru</Text>
            <TextView placeholder="masukkan password baru" secure />
          </View>
          <View style={[styles.marginVs]}>
            <Text>Konfirmasi password baru</Text>
            <TextView placeholder="masukkan konfirmasi password baru" secure />
          </View>
          <ButtonView title="ganti password" dark />
          <View style={[styles.alignItems, styles.marginVs]} />
        </View>
        <View style={{marginHorizontal: 16, marginVertical: 12}}>
          <Text style={[styles.text1, styles.textHeader2]}>Hapus akun</Text>
          <View style={[styles.marginVs]}>
            <Text>masukkan password untuk hapus akun</Text>
            <TextView
              placeholder="masukkan password"
              name={secure ? 'eye-off' : 'eye'}
              secure={secure}
              onIconPress={() => setSecure(!secure)}
            />
          </View>
          <View>
            <ButtonView title="Hapus akun" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Setting;
