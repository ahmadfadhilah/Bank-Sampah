import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  RefreshControl,
  Image,
  ActivityIndicator,
} from 'react-native';
import {colors, styles} from '../../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonView from '../../components/ButtonView';
import CenterMenu from '../../components/CenterMenu';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {getSaldo} from '../../services/endpoint/tabungan';
import {
  penarikanNasabah,
  penjemputanNasabah,
  penyetoranNasabah,
} from '../../services/endpoint/nasabah';
import {toDate, toPrice} from '../../services/helper/helper';
import {getSampahCategory} from '../../services/endpoint/sampah';

const DashboardNasabah = ({navigation}) => {
  const [content, setContent] = useState(1);
  const {user} = useSelector((state) => state);
  const [loading, setLoading] = useState(setLoading);
  const [category, setCategory] = useState([]);

  // const getData = () => {
  //   getSaldo(user.Id);
  //   penjemputanNasabah(user.Id);
  //   penyetoranNasabah(user.Id);
  //   penarikanNasabah(user.Id);
  //   getCategory();
  // };

  // const getCategory = () => {
  //   getSampahCategory()
  //     .then((cat) => cat === '' && setCategory(cat.data))
  //     .catch(() => setCategory([]));
  // };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getData();
  //   })
  //   return unsubscribe;
  // }, [navigation]);

  // useEffect(() => {
  //   nasabah.saldo.loading ? setLoading(true) : setLoading(false)
  // })

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={colors.primary}
        barStyle="dark-content"
      />
      <View style={[styles.flex]}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu-sharp" size={27} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DshChat')}>
            <Icon name="chatbubble-ellipses-outline" size={27} color="white" />
          </TouchableOpacity>
        </View>
        <View style={[styles.backgroundPrimary]}>
          <View
            style={[
              styles.marginHm,
              styles.marginVM,
              styles.backgroundPrimary,
            ]}>
            <Text style={[styles.textHigh1, styles.textWhite]}>Hello, {user.name}</Text>
          </View>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
            // refreshing={loading}
            // onRefresh={() => {
            //   getData();
            // }}
            />
          }
          style={[styles.backgroundLight]}>
          <View style={[styles.backgroundPrimary, styles.roundBottom]}>
            <View style={styles.price}>
              <View style={styles.text}>
                <Text style={styles.textBar3}>Saldo anda</Text>
              </View>
              <View style={styles.harga}>
                <Text style={styles.textharga}>Rp. {user.saldo},</Text>
              </View>
            </View>
          </View>
          <View style={[styles.centermenu]}>
            <View
              style={[
                styles.backgroundWhite,
                styles.cardmenu,
                styles.marginHmX,
                styles.row,
                styles.absoluteBottom,
              ]}>
              <CenterMenu
                icon="dump-truck"
                active={content === 1}
                text="Jemput"
                onPress={() => setContent(1)}
              />
              <CenterMenu
                icon="progress-download"
                active={content === 2}
                text="Penarikan"
                onPress={() => setContent(2)}
              />
              <CenterMenu
                icon="cube-send"
                active={content === 3}
                text="Penyetoran"
                onPress={() => setContent(3)}
              />
            </View>
          </View>

          <View style={[styles.container5]}>
            {content === 1 ? (
              <>
                <ButtonView
                  title="Ajukan Penjemputan"
                  dark
                  onPress={() => navigation.navigate('Jemput')}
                />

                <View style={[styles.marginVM]}>
                  <Text>Harga sampah terbaru :</Text>
                  <ScrollView horizontal>
                    <View
                      style={[
                        styles.cardmenu,
                        styles.backgroundWhite,
                        styles.marginHs,
                        styles.marginVs,
                      ]}>
                      <Text>Organik</Text>
                      <Text style={styles.textNote}>Rp. 10.000,-</Text>
                    </View>
                    <View
                      style={[
                        styles.cardmenu,
                        styles.backgroundWhite,
                        styles.marginHs,
                        styles.marginVs,
                      ]}>
                      <Text>Non Organik</Text>
                      <Text style={styles.textNote}>Rp. 10.000,-</Text>
                    </View>
                  </ScrollView>
                </View>

                <Text>Riwayat Penjemputan</Text>

                <TouchableOpacity
                  style={[
                    styles.cardmenu,
                    styles.backgroundWhite,
                    styles.marginVs,
                    styles.row,
                  ]}
                  onPress={() => {
                    navigation.navigate('Jemput');
                  }}>
                  <View style={[styles.flex]}>
                    <Text style={[styles.text, styles.textH3]}>
                      nama pengirim
                    </Text>
                    <Text style={[styles.text]}>lokasi penjemputan</Text>
                    <Text style={[styles.text]}>tgl penjemputan</Text>
                  </View>
                  <View>
                    <MaterialIcon
                      // name={
                      //   jemput.status === 0
                      //     ? 'progress-clock'
                      //     : jemput.status === 1
                      //     ? 'account-check'
                      //     : jemput.status === 2
                      //     ? 'truck-check'
                      //     : jemput.status === 3
                      //     ? 'close-circle'
                      //     : 'progress-clock'
                      // }
                      // name="progress-clock"
                      size={25}
                      color={colors.grey}
                    />
                  </View>
                </TouchableOpacity>
              </>
            ) : content === 2 ? (
              <View
                style={[
                  styles.cardmenu,
                  styles.backgroundWhite,
                  styles.marginVs,
                  styles.row,
                ]}>
                <View style={styles.flex}>
                  <Text style={styles.textNote}>Penarikan: </Text>
                  <Text style={[styles.textH3, styles.text]}>Rp. ,-</Text>
                  <Text style={styles.text}>Tgl</Text>
                </View>
              </View>
            ) : content === 3 ? (
              <Text>Kosong</Text>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DashboardNasabah;
