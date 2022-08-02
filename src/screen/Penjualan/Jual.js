import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import ButtonView from '../../components/ButtonView';
import TextView from '../../components/TextView';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {JualSampah} from '../../services/endpoint/penjual';
import {useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {toPrice} from '../../services/helper/helper';
import {styles, colors} from '../../styles/styles';

const Jual = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  //   const [harga, setHarga] = useState(0);
  //   const [berat, setBerat] = useState(0);
  //   const [selected, setSelected] = useState(0);
  //   const [client, setClient] = useState('');
  //   const [loading, setLoading] = useState(false);
  //   const {user, penjual} = useSelector(state => state);

  // const category = penjual.stok.data;
  // const onClickJual = () => {
  //     if (
  //       harga !== '' ||
  //       harga > 0 ||
  //       berat > 0 ||
  //       berat !== '' ||
  //       client !== '' ||
  //       category.length > 0
  //     ) {
  //       setLoading(true);
  //       jualSampah(user.id, category[selected].id, client, harga, berat)
  //         .then((res) => {
  //           if (res.code === 201) {
  //             ToastAndroid.show('Berhasil memasukan data', ToastAndroid.LONG);
  //             navigation.goBack();
  //           } else {
  //             ToastAndroid.show('Gagal memasukan data', ToastAndroid.LONG);
  //             setLoading(false);
  //           }
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //           ToastAndroid.show('Gagal mengirim data', ToastAndroid.LONG);
  //           setLoading(false);
  //         });
  //     } else {
  //       ToastAndroid.show('Harap isi semua', ToastAndroid.LONG);
  //     }
  //   };

  return (
    <ScrollView style={[styles.backgroundLight, styles.flex]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={[styles.row, styles.center, styles.container5, styles.marginVM]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.primary} />
        </TouchableOpacity>
        <Text
          style={[
            styles.textH3,
            styles.textPrimary,
            styles.flex,
            styles.marginHm,
          ]}>
          Penjualan sampah
        </Text>
      </View>
      <View style={[styles.container5]}>
        <View style={[styles.marginVs]}>
          <Text>Pengepul</Text>
          <TextView
            placeholder="Masukkan name client"
            onChangeText={inputClient => setClient(inputClient)}
          />
        </View>
        <Text>Jenis Sampah</Text>
        <View style={[styles.textInput, styles.backgroundWhite]}>
          <Picker
            mode="dropdown"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
              <Picker.Item label="Organik" value="Java"/>
              <Picker.Item label="Non Organik" value="Js"/>
            </Picker>
        </View>
        <View style={[styles.marginVs]}>
          <Text>Harga Satuan</Text>
          <TextView
            placeholder="Harga Satuan"
            onChangeText={price => setHarga(price)}
          />
        </View>
        <View style={[styles.marginVs]}>
          <Text>Berat sampah</Text>
          <TextView
            placeholder="Masukkan Berat sampah"
            onChangeText={weight => setBerat(weight)}
          />
        </View>
        <View style={[styles.marginVM]}>
          <View style={[styles.row, styles.space]}>
            <Text style={[styles.textH3]}>Total Penjualan</Text>
            <Text style={[styles.textH3]}>Rp. 200.000,-</Text>
          </View>
        </View>
        <ButtonView
          title="Tambah Penjualan"
          // loading={loading}
          dark
          // onPress={onClickJual}
        />
        <View style={[styles.alignItems, styles.marginVs]} />
      </View>
      <View />
    </ScrollView>
  );
};

export default Jual;
