import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import profile from '../../assets/Image/user.png';
// Tab Icon...
import home from '../../assets/Icon/home.png';
import mail from '../../assets/Icon/scan.png';
import order from '../../assets/Icon/help.png';
import cart from '../../assets/Icon/setting.png';
import exit from '../../assets/Icon/exit.png';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken} from '../../redux/Action';

const DrawerUser = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state);
  const [currentTab, setCurrentTab] = useState('Home');

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={Styles.container}>
        <View
          style={{justifyContent: 'flex-start', padding: 15, marginTop: 20}}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              marginTop: 8,
            }}
            source={{uri: user.avatar}}></Image>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 20,
            }}>
            {user.name}
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                marginTop: 6,
                color: 'white',
              }}>
              {user.noHp}
            </Text>
          </TouchableOpacity>

          <View style={{flexGrow: 1, marginTop: 40}}>
            {
              //Tab bar button
            }
            {TabButton(currentTab, setCurrentTab, 'Profile', home, () =>
              navigation.navigate('Profile'),
            )}
            {TabButton(currentTab, setCurrentTab, 'Qrscreen', mail, () =>
              navigation.navigate('QrScreen'),
            )}
            {TabButton(currentTab, setCurrentTab, 'Help', order, () =>
              navigation.navigate('Help'),
            )}
            {TabButton(currentTab, setCurrentTab, 'Setting', cart, () =>
              navigation.navigate('Setting'),
            )}
          </View>
          <View>
            {TabButton(currentTab, setCurrentTab, 'log out', exit, () =>
              dispatch(clearToken()),
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

// for multiple button
const TabButton = (currentTab, setCurrentTab, title, image, onPress) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress ? onPress() : null;
        // setCurrentTab(title)
        if (title == 'LogOut') {
          //do you stuff
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 40,
          borderRadius: 8,
          marginTop: 10,
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? '#2EB5E0' : 'white',
          }}></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? '#2EB5E0' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerUser;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2EB5E0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
