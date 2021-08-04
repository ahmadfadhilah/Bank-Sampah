import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Intro,
  Login,
  Register,
  ForgotPassword,
  DashboardNasabah,
  Jemput,
  DashboardPenyetoran,
  PermintaanJemput,
  DashboardPenjualan,
  Jual,
  DrawerUser,
  Profile,
  Setting,
  Splash,
  Erorr,
  CloseAccount,
  Help,
  Chat,
  DshChat,
  QrScreen,
  Setoran,
  InsertToken
} from '../screen';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {changeToken, setUser} from '../redux/Action';
import {profile} from '../services/endpoint/auth';
import {ToastAndroid} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppRouter = () => {
  const [splash, setSplash] = useState(true);
  const {token, user} = useSelector(state => state);
  const dispatch = useDispatch();

  const getTokenStorage = () => {
    console.log('getting token')
    AsyncStorage.getItem('token')
      .then(data => {
        // console.log(data);
        // console.log(data === null);
        if (data !== null) {
          // console.log('Ada token');
          dispatch(changeToken(data));
          getProfile();
        } else {
          setSplash(false);
        }
      })
      .catch(() => setSplash(false));
  };

  const getProfile = () => {
    profile()
      .then((res) => {
        // console.log(res)  //untuk mengecek setiap data yg masuk
        if (res !== null) {
          dispatch(setUser(res.data));
        }
        setSplash(false);
      })
      .catch((e) => {
        // console.log('hapus')
        console.log(e);
        ToastAndroid.show('kesalahan koneksi', ToastAndroid.LONG);
        setSplash(false);
      });
  };

  useEffect(() => {
    // console.log(user.role)
    setTimeout(() => {
      if (token === null || token === '') {
        getTokenStorage();
      }
    }, 5000);
  }, []);

  if (splash) {
    return <Splash />;
  }
  // console.log(user)
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        screenOptions={{animationEnabled: false}}>
        {token === '' || token === null ? (
          <>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="InsertToken" component={InsertToken} />
          </>
        ) : user.role ? (
          <>
            {user.role === 'nasabah' ? (
              <>
                <Stack.Screen name="Nasabah">
                  {() => (
                    <Drawer.Navigator
                      drawerContent={props => <DrawerUser {...props} />}>
                      <Drawer.Screen
                        name="DashboardNasabah"
                        component={DashboardNasabah}
                      />
                    </Drawer.Navigator>
                  )}
                </Stack.Screen>
                <Stack.Screen name="Jemput" component={Jemput} />
              </>
            ) : user.role === 'penyetoran' ? (
              <>
                <Stack.Screen name="Penyetoran">
                  {() => (
                    <Drawer.Navigator
                      drawerContent={props => <DrawerUser {...props} />}>
                      <Drawer.Screen
                        name="DashboardPenyetoran"
                        component={DashboardPenyetoran}
                      />
                    </Drawer.Navigator>
                  )}
                </Stack.Screen>
                <Stack.Screen
                  name="PermintaanJemput"
                  component={PermintaanJemput}
                />
              </>
            ) : user.role === 'penjualan' ? (
              <>
                <Stack.Screen name="Penjualan">
                  {() => (
                    <Drawer.Navigator
                      drawerContent={props => <DrawerUser {...props} />}>
                      <Drawer.Screen
                        name="DashboardPenjualan"
                        component={DashboardPenjualan}
                      />
                    </Drawer.Navigator>
                  )}
                </Stack.Screen>
                <Stack.Screen name="Jual" component={Jual} />
              </>
            ) : null}
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="DshChat" component={DshChat} />
            <Stack.Screen name="CloseAccount" component={CloseAccount} />
            <Stack.Screen name="QrScreen" component={QrScreen} />
            <Stack.Screen name="Setoran" component={Setoran} />
          </>
        ) : (
          <Stack.Screen name="Erorr" component={Erorr} />
        )}

        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
