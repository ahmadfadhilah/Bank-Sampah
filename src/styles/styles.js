import {Dimensions, StyleSheet} from 'react-native';

export const widthScreen = Dimensions.get('screen').width

export const colors = {
  primary: '#2EB5E0',
  secondary: '#56E8F5',
  tertiary: '#a3ebb1',
  lightBg: '#fff',
  white: '#fefefe',
  lightGrey: '#fafafa',
  grey: '#5F5F5F',
  black: '#1f1f1f',
  opacity: '#1f1f1f99',
};

export const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    padding1: {
      padding: 14
    },
    avatarM: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    button: {
      borderRadius: 8,
      paddingVertical: 16,
      alignItems: 'center',
      elevation: 5,
    },
    space: {
      justifyContent: 'space-between',
    },
    container5: {padding: 16},
    container00: {padding: 18},
    containerV0: {paddingVertical: 10},
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    textPrimary: {color: colors.primary},
    backgroundLight: {
      backgroundColor: colors.lightBg,
    },
    backgroundWhite: {
      backgroundColor: colors.white,
    },
    backgroundPrimary: {
      backgroundColor: colors.primary,
    },
    backgroundOpacity: {
      backgroundColor: colors.opacity,
    },
    backgroundSecondary: {
      backgroundColor: colors.secondary,
    },
    lottieButton: {width: 19, height: 19},
    textMedium: {
      fontWeight: '700',
      fontSize: 15,
    },
    textUppercase: {textTransform: 'uppercase'},
    textCenter: {
      textAlign: 'center',
    },
    textWhite: {
      color: colors.white,
    },
    alignItems: {
      alignItems: 'center'
    },
    textHigh: {
      fontSize: 24
    },
    textHigh00: {
      fontSize: 22
    },
    textNote: {
      fontSize: 12,
      color: colors.grey,
    },
    textHigh1: {
      fontSize: 23,
      fontWeight: 'bold'
    },
    marginHm: {
      marginHorizontal: 16
    },
    marginHs: {
      marginHorizontal: 8
    },
    marginHXL: {
      marginHorizontal: 25,
    },
    marginVM: {
      marginVertical: 16,
    },
    marginVs: { 
      marginVertical: 8,
    },
    marginVn: { 
      marginVertical: 15,
    },
    marginBot: {
      marginTop: 13
    },
    marginTo: {
      marginBottom: 13
    },
    marginTop: {
      marginTop: '10%'
    },
    marginTop1: {
      marginTop: '8%'
    },
    marginBot1: {
      marginTop: 25
    },
    marginButom: {
      paddingBottom: '9%'
    },
    marginButom0: {
      paddingBottom: 15
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    textBlue: {
      color: colors.secondary
    },
    textBlack: {
      color: colors.black,
      fontSize: 14,
      fontWeight: '600' 
    },
    textHeader: {
      color: '#5359d1'
    },
    textHeader2: {
      color: '#2EB5E0'
    },
    textInput: {
      borderRadius: 10,
      elevation: 3,
      backgroundColor: colors.lightGrey,
    },
    textH3: {
      fontWeight: 'bold',
      fontSize: 17,
    },
    textH2: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    text: {
      color: colors.black,
    },
    row: {
      flexDirection: 'row'
    },
    padding5: {
      paddingTop: 12
    },
    padding4: {
      paddingTop: 6
    },
    padding0: {
      paddingTop: 20
    },
    padding2: {
      paddingTop: 3
    },
    centermenu: {position: 'relative', height: 42},
    absoluteBottom: {position: 'absolute', bottom: 0},
    cardmenu: {
      padding: 16,
      borderRadius: 10,
      elevation: 4,
    },
    marginHmX: {
      marginHorizontal: 18,
    },


    // khusus Dashboard
    head: {
      paddingTop: '8%',
      paddingHorizontal: 18,
      backgroundColor: '#2EB5E0',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      elevation: 4,
      justifyContent: 'space-between',
      padding: 12,
      marginHorizontal: 18,
      marginTop: 30,
      marginBottom: '22%' ,
      borderColor: '#fff',
      color: 'white',
      backgroundColor: 'white',
      borderRadius: 3,
      flexDirection: 'row'
    },
    text1: {
      fontSize: 17,
      fontWeight: '700',
    },
    text2: {
      fontSize: 12,
    },
    textharga: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 7,
    },
    scrollheader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
      marginHorizontal: 20,
      marginBottom: -15,
    },
    promosi: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    roundBottom: {
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
    },
    roundBottom1: {
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    roundTop: {
      borderTopStartRadius: 35,
      borderTopEndRadius: 35
    },
    chatTo: {
      maxWidth: '80%',
      alignSelf: 'flex-end',
    },
    chatFrom: {
      maxWidth: '80%',
      alignSelf: 'flex-start',
    },
  
    // bar utama
  
    bar: {
      flexDirection: 'row',
      width: '100%',
      marginTop: '10%',
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    barUta: {
      width: '25%',
      alignItems: 'center',
    },
    barUta1: {
      width: '36%',
      alignItems: 'center',
    },
    imageBar: {
      borderWidth: 1,
      width: 70,
      height: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
      backgroundColor: 'green',
    },
    imageBar1: {
      borderWidth: 1,
      width: 70,
      height: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
      backgroundColor: 'yellow',
    },
    imageBar2: {
      borderWidth: 1,
      width: 70,
      height: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
      backgroundColor: 'skyblue',
    },
    textBar: {},
    textBar1: {
      fontSize: 14,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 6,
      color: 'yellow',
    },
    textBar2: {
      fontSize: 14,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 6,
      color: 'skyblue',
    },
    textBar3: {
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 6,
      color: 'black',
    },
    imagerBarr: {
      width: 45,
      height: 45,
    },
    pemisah: {
      alignItems: 'center',
      paddingRight: 70
    },
    mapContainer: {
      elevation: 3,
      width: widthScreen - 32,
      height: widthScreen - 32,
    },
    marginBottom: {
      marginBottom: 22
    },
    circle: {
      borderRadius: 50
    },
    paddingVs: {
      paddingHorizontal: 32
    },
    paddingHn: {
      paddingVertical: 32
    },
    topBorderCurve: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    elevationR: {
      elevation: 5
    },
});
