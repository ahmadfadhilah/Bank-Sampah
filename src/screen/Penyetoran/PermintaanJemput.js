import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Modal,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import {styles, colors} from '../../styles/styles';
import {batalkanJemput} from '../../services/endpoint/nasabah';
// import {useSelector} from 'react-redux';
import {confirmJemput} from '../../services/endpoint/penyetor';
import ButtonView from '../../components/ButtonView';

const PermintaanJemput = props => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  //   const {user} = useSelector(state => state);
  //   const {penjemputan} = route.params;

  //   const onClickBatalkan = () => {
  //     setLoading(true);
  //     batalkanJemput(penjemputan.id, user.id)
  //       .then(res => {
  //         if (res.code === '') {
  //           setLoading(false);
  //           ToastAndroid.show('Berhasil dibatalkan', ToastAndroid.LONG);
  //           navigation.goBack();
  //         } else {
  //           ToastAndroid.show('Gagal dibatalkan', ToastAndroid.LONG);
  //         }
  //       })
  //       .catch(e => {
  //         console.log(e);
  //         ToastAndroid.show('Kesalahan koneksi', ToastAndroid.LONG);
  //         setLoading(false);
  //       });
  //   };

  //   const onClickConfirm = status => {
  //     setLoading(true);
  //     confirmJemput(penjemputan.id, user.id, status)
  //       .then(res => {
  //         if (res.code === '') {
  //           setLoading(false);
  //           ToastAndroid.show('Berhasil', ToastAndroid.LONG);
  //           navigation.goBack();
  //         } else {
  //           ToastAndroid.show('Gagal', ToastAndroid.LONG);
  //         }
  //       })
  //       .catch(e => {
  //         console.log(e);
  //         ToastAndroid.show('Kesalahan koneksi', ToastAndroid.LONG);
  //         setLoading(false);
  //       });
  //   };
  return (
    <View style={[styles.backgroundLight, styles.flex]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <Modal transparent={true} visible={loading} style={[styles.flex]}>
        <View style={[styles.flex, styles.center, styles.backgroundOpacity]}>
          <View style={[styles.cardmenu, styles.backgroundWhite]}>
            <ActivityIndicator color={colors.primary} size="large" />
            <Text style={[styles.marginHXL, styles.marginVM]}>
              Merubah data
            </Text>
          </View>
        </View>
      </Modal>
      <View style={[styles.row, styles.container5, styles.marginVM]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={26} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.flex} />
      <TouchableOpacity onPress={() => setShow(!show)} style={[styles.center]}>
        <Icon
          name={show ? 'chevron-down' : 'chevron-up'}
          size={26}
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
        <Text style={[styles.textH3, styles.textPrimary]}>Jemput Sampah</Text>
        <View style={[styles.marginVs, styles.row, styles.center]}>
          <View style={[styles.flex]}>
            <Text style={[styles.textMedium]}>Nama pengirim</Text>
            <Text style={[styles.textH3]}>Ahmad</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('DshChat')}>
            <Icons name="chatbubble-ellipses-outline" size={27} color={colors.primary}/>
          </TouchableOpacity>
        </View>
        {show ? (
          <>
            <View style={[styles.marginVs]}>
              <Text style={[styles.textMedium]}>Alamat</Text>
              <Text>Jl. samratulangi, Lampung</Text>
            </View>
            <View style={[styles.marginVs]}>
              <Text style={[styles.textMedium]}>Keterangan</Text>
              <ScrollView style={{maxHeight: 100}}>
                <Text>Saya mau ambil sampah om</Text>
              </ScrollView>
            </View>
          </>
        ) : null}

        <TouchableOpacity style={[styles.row, styles.center]}>
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

        <View style={[styles.center, styles.row]}>
          {/* selesai... */}

          {/* <Text style={[styles.textH3, styles.marginHs]}>
            Selesai Dijemput
          </Text> */}
          {/* status 2 = selesai */}

          {/* <View style={[styles.flex, styles.marginVs]}>
            <ButtonView 
              title="Tandai Selesai"
              dark
              onPress={() => onclickConfirm(2)}
            />
          </View> */}
          {/* status 3 = */}

          <>
            <View style={[styles.marginVs, styles.flex]}>
              <ButtonView title="Batalkan" onPress={() => onClickBatalkan()} />
            </View>
            <View style={[styles.marginVs, styles.marginHs, styles.flex]}>
              <ButtonView
                title="Jemput Sekarang"
                dark
                onPress={() => onClickConfirm(1)}
              />
            </View>
          </>
        </View>
      </View>
    </View>
  );
};

export default PermintaanJemput;
