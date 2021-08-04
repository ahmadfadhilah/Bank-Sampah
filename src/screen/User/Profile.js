import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  ToastAndroid,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import TextView from '../../components/TextView';
import ButtonView from '../../components/ButtonView';
import Icon from 'react-native-vector-icons/Ionicons';
import Haha from 'react-native-vector-icons/FontAwesome5';
import {launchImageLibrary} from 'react-native-image-picker';
import {setUser} from '../../redux/Action';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfile, changeAvatar} from '../../services/endpoint/user';
import {styles, colors} from '../../styles/styles';

const Profile = props => {
  const {user} = useSelector(state => state);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [noHp, setNoHp] = useState(user.noHp);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState({uri: user.avatar});
  const [imageLoading, setImageLoading] = useState(false);
  const dispatch = useDispatch();

  const updateData = async () => {
    const res = await profile();
    res !== null ? dispatch(setUser(res.data)) : null;
  };

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response.uri) {
        console.log(response);
        setPhoto(response);
        setImageLoading(true);
        changeAvatar(response)
          .then(result => {
            console.log(result);
            if (result === null) {
              updateData();
              ToastAndroid.show('Photo berhasil diUpdate', ToastAndroid.LONG);
            } else {
              setPhoto({uri: user.avatar});
            }
          })
          .catch(error => {
            console.log(error);
            setPhoto({uri: user.avatar});
          })
          .finally(() => setImageLoading(false));
      }
    });
  };

  const onClickUpdate = async () => {
    if ((name, email, noHp)) {
      setLoading(true);
      try {
        const resUpdate = await updateProfile(name, email, noHp);
        if (resUpdate === '') {
          console.log(resUpdate);
          setLoading(false);
          updateData();
          ToastAndroid.show('Berhasil diupdate', ToastAndroid.LONG);
          navigation.goBack();
        } else {
          ToastAndroid.show('Gagal diupdate', ToastAndroid.LONG);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      ToastAndroid.show('isi yg bener cuy', ToastAndroid.LONG);
    }
  };

  return (
    <>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content" />
      <View style={[styles.flex, styles.marginVM, styles.backgroundWhite]}>
        <View style={[styles.row, styles.center, styles.padding1]}>
          <TouchableOpacity
            style={[styles.row, styles.center]}
            onPress={() => props.navigation.goBack()}>
            <Haha name="chevron-left" size={22} color={colors.secondary} />
          </TouchableOpacity>
          <Text
            style={[
              styles.text1,
              styles.textHeader2,
              styles.flex,
              styles.marginHm,
            ]}>
            Update profile
          </Text>
        </View>
        <View style={{position: 'relative'}}>
          <View style={[styles.center, styles.marginVM]}>
            <Image
              source={photo}
              style={{width: 140, height: 140, borderRadius: 100}}
            />
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              marginTop: 116,
              marginLeft: 220,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              borderColor: '#E8E8E8',
            }}
            onPress={handleChoosePhoto}>
            <Icon name="camera-reverse-sharp" size={30} color="#2EB5E0" />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 16, marginVertical: 12}}>
          <View style={[styles.marginVs]}>
            <Text>Nama Lengkap</Text>
            <TextView
              placeholder="Masukkan nama lengkap"
              value={name}
              onChangeText={inputName => setName(inputName)}
            />
          </View>
          <View style={[styles.marginVs]}>
            <Text>Email</Text>
            <TextView
              placeholder="Masukkan email"
              value={email}
              onChangeText={inputEmail => setEmail(inputEmail)}
            />
          </View>
          <View style={[styles.marginVs]}>
            <Text>Nomer Telepon </Text>
            <TextView
              placeholder="Phone"
              type="number-pad"
              value={noHp}
              onChangeText={inputNohp => setNoHp(inputNohp)}
            />
          </View>
          <View>
            <ButtonView
              title="update Profile"
              onPress={onClickUpdate}
              loading={loading}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
