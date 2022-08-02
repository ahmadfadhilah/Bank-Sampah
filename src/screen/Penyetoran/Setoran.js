import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
} from 'react-native';
import {styles, colors} from '../../styles/styles';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextView from '../../components/TextView';
import ButtonView from '../../components/ButtonView';

const Setoran = props => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [isEnabled, setisEnabled] = useState(false);
  const [category, setCategory] = useState([]);
  const [berat, setBerat] = useState(1);
  const [selected, setSelected] = useState(0);
  //   const nasabah = route.params.data;
  const [loading, setLoading] = useState(false);

  //   console.log(nasabah);

  //   const getCategory = () => {
  //     getSampahCategory()
  //       .then(cat => setCategory(cat.data))
  //       .catch(e => setCategory([]));
  //   };

  //   const onClickSetor = () => {
  //     setLoading(true);
  //     addSetor(nasabah.id, category[selected].id, berat, isEnabled)
  //       .then(res => {
  //         if (res.code === '') {
  //           ToastAndroid.show('Berhasil setor', ToastAndroid.LONG);
  //           navigation.navigate('DashboardSetoran');
  //         } else {
  //           ToastAndroid.show('Gagal setor', ToastAndroid.LONG);
  //           setLoading(false);
  //         }
  //       })
  //       .catch(e => {
  //         ToastAndroid.show('Gagal melakukan permintaan', ToastAndroid.LONG);
  //         console.log(e);
  //         setLoading(false);
  //       });
  //   };

  //   useEffect(() => {
  //     getCategory();
  //   }, []);

  return (
    <ScrollView style={[styles.backgroundLight, styles.flex]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View
        style={[styles.row, styles.center, styles.container5, styles.marginVM]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.primary} />
        </TouchableOpacity>
        <Text
          style={[
            styles.textH3,
            styles.flex,
            styles.marginHm,
            styles.textPrimary,
          ]}>
          Setor Sampah Nasabah
        </Text>
      </View>
      <View style={[styles.marginHm]}>
        <View
          style={[
            styles.row,
            styles.center,
            styles.marginVM,
            styles.marginButom0,
          ]}>
          <Image
            source={require('../../assets/Image/profile.jpg')}
            style={{width: 100, height: 100, borderRadius: 100}}
          />
          <Text
            style={[
              styles.marginHs,
              styles.textH3,
              styles.textPrimary,
              styles.flex,
              styles.marginHm,
            ]}>
            Ahmad Fadhilah
          </Text>
        </View>
        <Text>Jenis Sampah</Text>
        <View
          style={[
            styles.textInput,
            styles.backgroundWhite,
            styles.marginVs,
            styles.marginTo,
          ]}>
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
        <View style={[styles.row]}>
          <View style={[styles.marginVs, styles.flex]}>
            <Text>Berat Sampah {'(Kg)'}</Text>
            <TextView
              // value={berat}
              placeholder="Berat Sampah"
              type="numeric"
              onChangeText={i => setBerat(i)}
            />
          </View>
          <View style={[styles.row, styles.center]}>
            <Text style={[styles.marginHm]}>Dijemput</Text>
            <Switch
              trackColor={{false: colors.grey, true: colors.primary}}
              thumbColor={isEnabled ? colors.secondary : colors.white}
              onValueChange={() => setisEnabled(!isEnabled)}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={[styles.marginVM]}>
          <>
          {isEnabled ? (
            <>
            <View style={[styles.row, styles.space]}>
              <Text>Total harga Sampah</Text>
              <Text>Rp 10.000</Text>
            </View>
            <View style={[styles.row, styles.space]}>
              <Text>{'Potongan Jemput (20%)'}</Text>
              <Text>Rp 7.000</Text>
            </View>
            </>
          ) : null}
          </>
        </View>
        <ButtonView
          title="Setor"
          dark
          loading={loading}
          onPress={() => onClickSetor()}
        />
        <View style={[styles.alignItems, styles.marginVs]} />
      </View>
    </ScrollView>
  );
};

export default Setoran;
