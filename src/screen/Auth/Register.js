import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StatusBar,
  Image,
} from 'react-native';
import TextView from '../../components/TextView';
import {register} from '../../services/endpoint/auth';
import {styles, colors} from '../../styles/styles';
import ButtonView from '../../components/ButtonView';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Register = props => {
  const [nama, setNama] = useState(null);
  const [email, setEmail] = useState(null);
  const [noHp, setNohp] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setPassword_confirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);

  const onClickRegister = () => {
    if (nama && email && noHp && password && password_confirmation) {
      setLoading(true);
      register(nama, email, noHp, password, password_confirmation)
        .then(res =>
          res.token !== ''
            ? props.navigation.goBack()
            : ToastAndroid.show('gagal Mendaftar', ToastAndroid.LONG),
        )
        .catch(e => ToastAndroid.show(JSON.stringify(e), ToastAndroid.LONG))
        .finally(() => setLoading(false));
    }
  };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  return (
    <ScrollView style={[styles.backgroundLight, styles.flex, styles.padding0]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={{paddingHorizontal: 16, paddingTop: 12}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.primary}/>
        </TouchableOpacity>
      </View>
      <View style={[styles.flex]}>
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
        <View style={{paddingTop: 40, paddingHorizontal: 25}}>
          <Text style={[styles.textHeader2, styles.textHigh1]}>Register</Text>
        </View>
        <View style={{marginVertical: 30, paddingHorizontal: 16}}>
          <View style={[styles.marginVs]}>
            <TextView placeholder="Username" onChangeText={n => setNama(n)} />
          </View>
          <View style={[styles.marginVs]}>
            <TextView placeholder="Email" onChangeText={e => setEmail(e)} />
          </View>
          <View style={[styles.marginVs]}>
            <TextView
              placeholder="Nohp"
              onChangeText={t => setNohp(t)}
              type="number-pad"
            />
          </View>
          <View style={[styles.marginVs]}>
            <TextView
              placeholder="Password"
              name={secure ? 'eye-off' : 'eye'}
              secure={secure}
              onIconPress={() => setSecure(!secure)}
              onChangeText={p => setPassword(p)}
            />
          </View>
          <View style={[styles.marginVs]}>
            <TextView
              placeholder="Password_confirmation"
              name={secure ? 'eye-off' : 'eye'}
              secure={secure}
              onIconPress={() => setSecure(!secure)}
              onChangeText={pc => setPassword_confirmation(pc)}
            />
          </View>
        </View>
        <View style={{marginHorizontal: 16}}>
          <View style={[styles.marginVs]}>
            <ButtonView
              title="Daftar"
              loading={loading}
              dark
              onPress={() => onClickRegister()}
            />
          </View>
          <View style={[styles.row, styles.center, styles.marginVs]}>
            <Text style={[styles.textMedium, styles.textHeader2]}>
              Sudah punya akun?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={[styles.textMedium, styles.textBlue]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
