import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ButtonView from '../../components/ButtonView';
import TextView from '../../components/TextView';
import {changeToken, setUser} from '../../redux/Action';
import {login} from '../../services/endpoint/auth';
import {styles, colors} from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onClickLogin = () => {
    setLoading(true);
    login(email, password)
      .then(res => {
        if (res.token !== '') {
          const {role} = res.data;
          console.log(role);
          if (
            role === 'nasabah' ||
            role === 'penyetoran' ||
            role === 'penjualan'
          ) {
            dispatch(setUser(res.data));
            dispatch(changeToken(res.token));
          } else {
            ToastAndroid.show('Ayo loading dulu', ToastAndroid.LONG);
          }
        } else {
          ToastAndroid.show(res.status, ToastAndroid.LONG);
        }
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  };

  return (
    <ScrollView style={[styles.backgroundLight, styles.flex, styles.padding0]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={{paddingHorizontal: 16, paddingTop: 12}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={[styles.flex, styles.padding0]}>
        <View
          style={[
            styles.flex,
            styles.row,
            styles.center,
            styles.marginVs,
            styles.padding0,
          ]}>
          <Image
            source={require('../../assets/Icon/logo.png')}
            style={{width: 150, height: 80}}
          />
        </View>
        <View style={{paddingTop: 30, paddingHorizontal: 25}}>
          <Text style={[styles.textHigh1, styles.textHeader2]}>Login</Text>
        </View>
        <View style={{marginVertical: 30, paddingHorizontal: 16}}>
          <View style={[styles.marginVs]}>
            <TextView
              placeholder="email"
              onChangeText={inputEmail => setEmail(inputEmail)}
            />
          </View>
          <View style={[styles.marginVs]}>
            <TextView
              placeholder="password"
              secure={secure}
              name={secure ? 'eye-off' : 'eye'}
              onIconPress={() => setSecure(!secure)}
              onChangeText={inputPass => setPassword(inputPass)}
            />
          </View>
        </View>
        <View style={{marginHorizontal: 16, paddingTop: 10}}>
          <View style={[styles.marginVn]}>
            <ButtonView
              loading={loading}
              title="Login"
              onPress={() => onClickLogin()}
            />
          </View>
          <View style={[styles.center]}>
            <Text style={[styles.textBlack]}>Atau</Text>
          </View>
          <View style={[styles.marginVn]}>
            <ButtonView
              title="Daftar"
              dark
              onPress={() => props.navigation.navigate('Register')}
            />
          </View>
          <TouchableOpacity style={[styles.center, styles.padding2]}>
            <Text
              onPress={() => props.navigation.navigate('ForgotPassword')}
              style={[styles.textMedium]}>
              Lupa Kata Sandi ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
