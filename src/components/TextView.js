import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, colors } from '../styles/styles';

const TextView = ({
  placeholder,
  name,
  onIconPress,
  secure,
  value,
  onChangeText,
  type,
  editable,
}) => {
  return (
    <View style={[styles.textInput, styles.row]}>
      <TextInput 
        editable={editable}
        secureTextEntry={secure}
        placeholder={placeholder}
        style={[styles.flex, styles.marginHm]}
        value={value}
        onChangeText={(i) => (onChangeText ? onChangeText(i) : null)}
        keyboardType={type}
      />
      {name ? ( 
        <TouchableOpacity
            onPress={() => onIconPress()}
            style={[styles.center, styles.marginHs]}
        >
            <Icon name={name} size={24} color={colors.primary}/>
        </TouchableOpacity>
      ) : null}
    </View>
  )
};

export default TextView;
