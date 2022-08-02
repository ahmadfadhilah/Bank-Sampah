import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import ButtonView from '../../components/ButtonView';
import TextView from '../../components/TextView';
import {styles, colors} from '../../styles/styles';
import {useSelector} from 'react-redux';
import {ajukanJemput, batalkanJemput} from '../../services/endpoint/nasabah';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';

const Jemput = (props) => {
  const [show, setShow] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState();


  return (
    <View style={[styles.backgroundLight, styles.flex]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={[styles.row, styles.container5, styles.marginVM]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={23} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.flex} />
      <TouchableOpacity onPress={() => setShow(!show)} style={styles.center}>
        <Icon
          name={show ? 'chevron-down' : 'chevron-up'}
          size={25}
          color={colors.primary}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.container5,
          styles.backgroundLight,
          styles.topBorderCurve,
          styles.elevationR,
        ]}>
        <Text style={[styles.textH3, styles.textPrimary]}>
          Ajukan Penjemputan
        </Text>
        <Image />
        {show ? (
          <>
            <View style={[styles.marginVs]}>
              <Text>Atas Nama</Text>
              <TextView
                placeholder="Masukkan nama anda"
                // value={name}
                onChangeText={inputName => setName(inputName)}
                // editable={!penjemputan}
              />
            </View>
              <Text>Pilih Lokasi</Text>
            <View style={[styles.marginVs, styles.textInput, styles.backgroundWhite]}>
            <Picker
                mode="dropdown"
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Jawa tengah" value="Java" />
                <Picker.Item label="Yogyakarta" value="Js" />
                <Picker.Item label="Jawa Barat" value="Js" />
                <Picker.Item label="Jawa timur" value="Js" />
              </Picker>
            </View>
            <Text>Deskripsi</Text>
            <View
              style={[
                styles.backgroundWhite,
                styles.marginVs,
                styles.textInput,
              ]}>
              <TextInput
                style={[styles.marginHm, {maxHeight: 100}]}
                placeholder="keterangan"
                multiline={true}
                // value={keterangan}
                onChangeText={ket => setKeterangan(ket)}
              />
            </View>
            <Text>Jenis Sampah</Text>
            <View style={[styles.textInput, styles.backgroundWhite, styles.marginVs]}>
              <Picker
                mode="dropdown"
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Besi" value="Java" />
                <Picker.Item label="Plastik" value="Js" />
                <Picker.Item label="Bom" value="Js" />
                <Picker.Item label="Granat" value="Js" />
              </Picker>
            </View>
          </>
        ) : null}

        <View style={[styles.marginVs]}>
          {/* <ButtonView 
              // loading={loading}
              title={'Batalkan'}
              onPress={() => onClickBatalkan()}
            /> */}

          <ButtonView
            // loading={loading}
            title={'Minta Jemput'}
            dark
            onPress={() => onClickJemput()}
          />
        </View>
        <TouchableOpacity style={[styles.row, styles.center, styles.marginHm]}>
          <Icon name="map-marker-alt" size={20} color={colors.primary} />
          <Text
            style={[
              styles.textMedium,
              styles.textPrimary,
              styles.flex,
              styles.marginHm,
            ]}>
            Lokasi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Jemput;
