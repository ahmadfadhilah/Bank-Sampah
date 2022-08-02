// import React from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import {styles, colors} from '../../styles/styles';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Chat = props => {
//   return (
//     <View style={[styles.flex, ]}>
//       <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
//       <View
//         style={[
//           styles.backgroundPrimary,
//           styles.container5,
//           styles.row,
//           styles.space,
//         ]}>
//         <View style={{paddingLeft: 13}}>
//           <Text style={[styles.textHigh, styles.textCenter, styles.textWhite]}>
//             Chat
//           </Text>
//         </View>
//         <View style={{paddingRight: 13}}>
//           <Icon
//             name="plus"
//             size={28}
//             color="white"
//             style={[styles.alignItems]}
//           />
//         </View>
//       </View>
//       <View style={[]}>
//         <ScrollView horizontal={true}>
//           <View
//             style={[styles.row, styles.backgroundPrimary, styles.marginButom0]}>
//             <Listdata
//               name="Ahmad"
//               img={require('../../assets/Image/profile.jpg')}
//             />
//             <Listdata
//               name="bambang"
//               img={require('../../assets/Image/aaa.jpg')}
//             />
//             <Listdata
//               name="Mas adi"
//               img={require('../../assets/Image/user.png')}
//             />
//             <Listdata
//               name="Suminah"
//               img={require('../../assets/Icon/profile.png')}
//             />
//             <Listdata
//               name="Bagus"
//               img={require('../../assets/Icon/7952.jpg')}
//             />
//             <Listdata
//               name="Faris"
//               img={require('../../assets/Icon/profile.png')}
//             />
//             <Listdata
//               name="Bencong"
//               img={require('../../assets/Icon/user.png')}
//             />
//           </View>
//         </ScrollView>
//       </View>
//       <View style={[styles.backgroundPrimary]}>
//         <View
//           style={[
//             styles.container00,
//             styles.backgroundWhite,
//             styles.roundTop,
//             styles.row,
//             styles.space,
//             styles.paddingVs,
//             styles.padding0,
//           ]}>
//           <Text style={[styles.textHigh00]}>Sunday</Text>
//           <Icons name="dots-horizontal" size={26} />
//         </View>
//       </View>
//       <ScrollView style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
//             <Kontak
//               imgK={require('../../assets/Image/profile.jpg')}
//               nameK="Ahmadbebe"
//               tglK="01/07/2002"
//               TerkDil="udh ah males pingin pulang"
//             />
//             <Kontak
//               imgK={require('../../assets/Image/user.png')}
//               nameK="StevenAsep"
//               tglK="01/23/2017"
//               TerkDil="udh ah males pingin pulang"
//             />
//             <Kontak
//               imgK={require('../../assets/Image/aaa.jpg')}
//               nameK="Bambangbb"
//               tglK="05/17/2019"
//               TerkDil="udh ah males pingin pulang"
//             />
//             <Kontak
//               imgK={require('../../assets/Icon/profile.png')}
//               nameK="Suminahmb"
//               tglK="06/16/2020"
//               TerkDil="udh ah males pingin pulang"
//             />
//             <Kontak
//               imgK={require('../../assets/Icon/profile.png')}
//               nameK="Suminahmb"
//               tglK="06/16/2020"
//               TerkDil="udh ah males pingin pulang"
//             />
//             <Kontak
//               imgK={require('../../assets/Icon/profile.png')}
//               nameK="Suminahmb"
//               tglK="06/16/2020"
//               TerkDil="udh ah males pingin pulang"
//             />
//       </ScrollView>
//     </View>
//   );
// };

// export default Chat;

// const Listdata = props => {
//   return (
//     <TouchableOpacity
//       style={{alignItems: 'center', marginRight: 20, paddingVertical: 5}}>
//       <Image
//         source={props.img}
//         style={{width: 60, height: 60, borderRadius: 50}}
//       />
//       <Text style={{maxWidth: 80, textAlign: 'center'}}>{props.name}</Text>
//     </TouchableOpacity>
//   );
// };

// const Kontak = props => {
//   return (
//     <View style={{flexDirection: 'row', padding: 3, backgroundColor: 'white', marginTop: 12}}>
//       <TouchableOpacity onPress={() => console.log('DshChat')}>
//       {/* onPress={() => props.navigation.navigate('DshChat')} */}
//         <Image
//           source={props.imgK}
//           style={{width: 60, height: 60, borderRadius: 50}}
//         />
//       </TouchableOpacity>
//       <View
//         style={{
//           flexDirection: 'row',
//           backgroundColor: 'white',
//           paddingLeft: 10,
//         }}>
//         <TouchableOpacity style={{}} >
//           <View style={{flexDirection: 'row', marginTop: 1, marginBottom: 6}}>
//             <Text style={{fontSize: 18, fontWeight: '700'}}>{props.nameK}</Text>
//             <Text style={{paddingLeft: '27%', paddingTop: 3}}>
//               {props.tglK}
//             </Text>
//           </View>
//           <Text style={{fontSize: 13, paddingTop: 13}}>{props.TerkDil}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

import React from 'react'
import { View, Text } from 'react-native'

const Chat = () => {
  return (
    <View>
      <Text>a</Text>
    </View>
  )
}

export default Chat
