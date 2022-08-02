// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   StatusBar,
//   Image,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import {colors, styles} from '../../styles/styles';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Smile from 'react-native-vector-icons/Fontisto';
// import Haha from 'react-native-vector-icons/Ionicons';

// const DshChat = (props) => {
//   return (
//     <ScrollView style={[styles.backgroundLight, styles.flex, styles.marginVM]}>
//       <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
//       <View>
//         <View
//           style={[
//             styles.padding1,
//             styles.backgroundPrimary,
//             styles.marginButom,
//           ]}>
//           <NavBar />
//         </View>
//         <View style={{backgroundColor: '#2EB5E0'}}>
//           <View
//             style={{
//               height: 40,
//               backgroundColor: 'white',
//               borderTopStartRadius: 40,
//               borderTopEndRadius: 40,
//             }}></View>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'white',
//             padding: 12,
//             paddingTop: '80%',
//           }}>
//           <UserChat />
//           <UserClient />
//           <Send />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default DshChat;

// const NavBar = (props) => {
//   return (
//     <View
//       style={[styles.row, styles.alignItems, styles.space, styles.padding4]}>
//       <TouchableOpacity
//         onPress={() => props.navigation.navigate('Chat')}
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginRight: 16,
//         }}>
//         <Icon name="arrowleft" size={25} color="white" />
//       </TouchableOpacity>
//       <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
//         StevenAsep
//       </Text>
//       <TouchableOpacity onPress={() => console.log('anji')}>
//         <Image
//           source={require('../../assets/Image/profile.jpg')}
//           style={{
//             width: 40,
//             height: 40,
//             borderRadius: 50,
//           }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Send = () => {
//   return (
//     <View style={{justifyContent: 'flex-end', flex: 1, backgroundColor: 'white', flexDirection: 'row', marginTop: 35}}>
//       <View style={{position: 'relative', flex: 1}}>
//         <TextInput
//           placeholder="Tulis pesan"
//           style={{
//             borderColor: '#E8E8E8',
//             borderRadius: 10,
//             height: 40,
//             fontSize: 13,
//             paddingLeft: 45,
//             paddingRight: 20,
//             backgroundColor: 'white',
//             marginLeft: 18,
//             borderWidth: 1,
//           }}
//         />
//         <Smile
//           name="smiley"
//           size={23}
//           color="grey"
//           style={{position: 'absolute', left: 30, top: 8}}
//         />
//       </View>
//       <View style={{width: 45, justifyContent: 'center', alignItems: 'center'}}>
//         <Haha name="md-send" size={25}/>
//       </View>
//     </View>
//   );
// };

// const UserChat = () => {
//   return (
//     <View style={{alignItems: 'flex-start'}}>
//       <View style={{backgroundColor: 'grey', }}></View>
//       <View
//         style={{
//           marginHorizontal: 16,
//           borderTopStartRadius: 14,
//           borderTopEndRadius: 14,
//           borderBottomEndRadius: 14,
//           backgroundColor: '#56E8F5',
//           marginBottom: 14,
//           maxWidth: '80%',
//         }}>
//         <Text style={{padding: 12, color: 'white', fontSize: 15}}>Apa asndkassadanskd asdnaksndadadaasdnasddaksdaaksdaksdndkandsandaskasdaksdndndsakdsad</Text>
//       </View>
//     </View>
//   );
// };

// const UserClient = () => {
//   return (
//     <View style={{alignItems: 'flex-end'}}>
//       <View
//         style={{
//           marginHorizontal: 16,
//           borderTopStartRadius: 14,
//           borderTopEndRadius: 14,
//           borderBottomStartRadius: 14,
//           backgroundColor: '#2EB5E0',
//           marginBottom: 14,
//           maxWidth: '80%',
//         }}>
//         <Text style={{padding: 12, color: 'white', fontSize: 15}}>
//           Apa woiaskdefkaefaekfnekanfaeknfa skfasaksnaskfaasfnaksfakfaskfsa
//         </Text>
//       </View>
//     </View>
//   );
// };


import React, {useEffect, useRef, useState} from 'react';
import {
  View, 
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  StatusBar,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors, styles} from '../../styles/styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextView from '../../components/TextView';
// import {useSelector} from 'react-redux';
// import _ from 'lodash';

const DshChat = ({navigation}) => {
  return (
    <View style={[styles.backgroundLight, styles.flex]}>
      <StatusBar backgroundColor={colors.lightBg} barStyle="dark-content"/>
      <View style={[
        styles.row,
        styles.center,
        styles.marginHm,
        styles.marginVs,
        styles.marginTop1
      ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={28} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[
          styles.textH3,
          styles.textPrimary,
          styles.flex,
          styles.textCenter
        ]}>StevenAsep</Text>
        <Image 
          source={require('../../assets/Image/user.png')}
          style={[styles.avatarM]}
        />
      </View>
      <ScrollView>
        <View style={[styles.flex, styles.backgroundLight, styles.marginBot1, ]}>
          <User name="hai sayang"/>
          <Client name="iyah "/>
          <User name="kenapa sayang"/>
          <Client name="gk papap"/>
          <User name="wkwkwkw"/>
          <Client name="wjwwjwjwakdas"/>
          <User name="asdfaskdaldas"/>
          <Client name="123123123"/>
          <User name="helllp"/>
          <Client name="help me"/>
          <User name="corona"/>
          <Client name="cerdads"/>
        </View>
      </ScrollView>
      <View style={[styles.backgroundPrimary]}>
        <View style={{height: 5}}></View>
        <View style={[styles.marginHs, styles.marginVs, styles.row,]}>
          <View style={[styles.flex]}>
            <TextView
              placeholder="Tulis Pesan ..."
            />
          </View>
          <TouchableOpacity 
            style={[styles.center, styles.marginHs]}>
            <MaterialIcon name="send-circle" size={50} color={colors.lightBg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DshChat



const User = (props) => {
  return (
    <View style={[styles.chatFrom]}>
       <View
         style={{
           marginHorizontal: 16,
           borderTopStartRadius: 14,
           borderTopEndRadius: 14,
           borderBottomEndRadius: 14,
           backgroundColor: 'white',
           marginBottom: 14,
           borderWidth: 1,
           borderColor: '#F2F2F2'
         }}>
         <Text style={{padding: 12, color: 'black', fontSize: 15}}>{props.name}</Text>
       </View>
     </View>
  )
}

const Client = (props) => {
  return (
    <View style={[styles.chatTo]}>
       <View
         style={{
           marginHorizontal: 16,
           borderTopStartRadius: 14,
           borderTopEndRadius: 14,
           borderBottomStartRadius: 14,
           backgroundColor: '#56E8F5',
           marginBottom: 14,
         }}>
         <Text style={{padding: 12, color: 'black', fontSize: 15}}>{props.name}</Text>
       </View>
     </View>
  )
}