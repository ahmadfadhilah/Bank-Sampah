import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonView from '../../components/ButtonView';
import CenterMenu from '../../components/CenterMenu';
import {
  getDataJemputan,
  getDataSetoran,
} from '../../services/endpoint/penyetor';
import {styles, colors} from '../../styles/styles';
import {toDate, toPrice} from '../../services/helper/helper';
import {ScrollView} from 'react-native-gesture-handler';

const DashboardPenyetoran = ({navigation}, props) => {
  const [content, setContent] = useState(1);
  const [loading, setLoading] = useState(false);

  const {user} = useSelector((state) => state);

  // const getData = () => {
  //   try {
  //     getDataJemputan();
  //     getDataSetoran();
  //   } finally {
  //     setLoading(false);
  //   }
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
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <Icon name="chatbubble-ellipses-outline" size={27} />
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
              <CenterMenu
                icon="cube-send"
                text="Penyetoran"
                active={content === 1}
                onPress={() => setContent(1)}
              />
              <CenterMenu
                icon="dump-truck"
                text="Jemput"
                active={content === 2}
                onPress={() => setContent(2)}
              />
            </View>
          </View>

          <View style={{padding: 18}}>
            {content === 1 ? (
              <>
                <ButtonView
                  title="Setor Sampah"
                  dark
                  onPress={() => navigation.navigate('Setoran')}
                />

                <View
                  style={[
                    styles.cardmenu,
                    styles.row,
                    styles.backgroundWhite,
                    styles.marginVs,
                  ]}>
                  <View style={[styles.flex]}>
                    <View style={[styles.marginVs]}>
                      <Text style={[styles.textH3, styles.text]}>
                        Ahmad Fadhilah
                      </Text>
                      <Text style={[styles.text]}>Organik, 25kg</Text>
                      <Text style={[styles.textNote]}>01/07/2002</Text>
                    </View>
                  </View>
                  <View style={[styles.center]}>
                    <Text style={[styles.alignItems, styles.textNote]}>Total pemasukan</Text>
                    <Text style={[styles.textH3]}>Rp setoran debit</Text>
                  </View>
                </View>
              </>
            ) : content === 2 ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('PermintaanJemput')}
                style={[
                  styles.cardmenu,
                  styles.backgroundWhite,
                  styles.marginVs,
                  styles.row,
                ]}>
                <View style={[styles.flex]}>
                  <View style={[styles.marginVs]}>
                    <Text style={[styles.textH3, styles.text]}>
                      Ahmad Fadhilah
                    </Text>
                    <Text style={[styles.text]}>Jl samratulangi Gg bukit no 2</Text>
                    <Text style={[styles.text]}>01-07-2020</Text>
                  </View>
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
                    name="progress-clock"
                    size={24}
                    color={colors.grey}
                  />
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DashboardPenyetoran;
