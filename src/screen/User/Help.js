import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {styles, colors} from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Help = (props) => {
    const gotoLink = async () => {
        const supported = await Linking.canOpenURL(
            'https://google.com',
        );

        if (supported) {
            await Linking.OpenURL(
                'https://google.com',
            );
        }   else {
            Alert.alert("Don't know how to open this URL")
        }
    };

    const step = [
        'Nasabah bisa langsung mendaftar via aplikasi, sedangkan akun pengurus dan bendahara akan dibuatkan oleh admin via web',
        'Nasabah dan pengurus bisa langsung login via aplikasi, sedangkan bendahara dan admin akan login melalui web',
        'Nasabah yang ingin dijemput sampah nya bisa meminta penjemputan melalui aplikasi dan memberi keterangan sampah apa yang ingin dijemput',
        'Nasabah bisa membatalkan permintaan penjemputan jika status penjemputan belum dikonfirmasi oleh pengurus',
        'Nasabah bisa menyetorkan langsung sampah ke kantor Basah terdekat, dan dilayani oleh pengurus',
        
    ];

  return (
    <ScrollView style={[styles.backgroundLight, styles.flex, styles.marginVM]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={styles.container5}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={[styles.marginHm]}>
        <View style={[styles.flex, styles.row, styles.center, styles.marginVs]}>
          <Image
            source={require('../../assets/Icon/logo.png')}
            style={{width: 160, height: 80}}
          />
        </View>
        <Text style={[styles.marginVM]}>Cara kerja aplikasi Basah</Text>
        <View style={styles.marginVM}>
            {step.map((item, index) => (
                <Text style={styles.marginVs}>
                    {index + 1}. {item}
                </Text>
            ))} 
        </View>
        <TouchableOpacity onPress={gotoLink}>
            <Text 
                style={[styles.textMedium, styles.textCenter, styles.marginVM]}
            >
                Untuk informasi lanjut bisa cek di web nya
            </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Help;
