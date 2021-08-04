import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Centermenu from '../../components/CenterMenu';
import ButtonView from '../../components/ButtonView';
import {styles, colors} from '../../styles/styles';
import {useSelector} from 'react-redux';
import {
  getDataPenjualan,
  getSaldoPenjualan,
  getStok,
} from '../../services/endpoint/penjual.js';
import {toDate, toPrice} from '../../services/helper/helper';
import {ScrollView} from 'react-native-gesture-handler';

const DashboardPenjualan = ({navigation}) => {
  const [content, setContent] = useState(1);
  const {user} = useSelector(state => state);
  // console.log(penjual.penjualan);

  // const getData = () => {
  //   getSaldoPenjualan();
  //   getStok();
  //   getDataPenjualan();
  // };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getData();
  //   });
  //   return unsubscribe;
  // }, [navigation]);

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
            <Icon name="menu-sharp" size={27} />
          </TouchableOpacity>
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
              <Text style={styles.text1}>Hello, {user.name}</Text>
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
              <Centermenu
                icon="truck-check"
                text="Penjualan"
                active={content === 1}
                onPress={() => setContent(1)}
              />
              <Centermenu
                icon="warehouse"
                text="Belum dijual"
                active={content === 2}
                onPress={() => setContent(2)}
              />
            </View>
          </View>

          <View style={{padding: 18}}>
            <ButtonView
              title="Jual Sampah"
              dark
              onPress={() => navigation.navigate('Jual')}
            />
            {content === 1 ? (
              <View
                style={[
                  styles.cardmenu,
                  styles.row,
                  styles.backgroundWhite,
                  styles.marginVs,
                ]}>
                <View style={[styles.flex]}>
                  <View style={[styles.marginVs]}>
                    <Text style={[styles.text, styles.textH2]}>
                      Organik, 10.000Kg
                    </Text>
                    <Text style={[styles.textNote]}>01/07/2002</Text>
                  </View>
                </View>
                <View style={[styles.center]}>
                  <Text style={[styles.textCenter, styles.textNote]}>
                    Total Penjualan
                  </Text>
                  <Text style={styles.textH3}>Rp. 20.000,-</Text>
                </View>
              </View>
            ) : content === 2 ? (
              <View
                style={[
                  styles.cardmenu,
                  styles.row,
                  styles.backgroundWhite,
                  styles.marginVs,
                ]}>
                <View style={[styles.flex]}>
                  <Text style={[styles.textNote]}>kategori</Text>
                  <Text style={[styles.textH3, styles.text]}>
                    Organik
                  </Text>
                </View>
                <View style={[styles.center]}>
                  <Text style={[styles.textNote]}>Stock</Text>
                  <Text style={[styles.textH3, styles.text]}>Besi, Plastik</Text>
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DashboardPenjualan;
