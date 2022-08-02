import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { colors, styles } from '../styles/styles';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CenterMenu = ({icon, active, onPress, text}) => {
  return (
    <TouchableOpacity 
      style={[styles.flex, styles.center]}
      onPress={() => onPress()}>
      <VectorIcon 
        name={icon}
        size={active ? 35 : 24}
        color={colors.primary}
      />
      <Text
        style={[
            active ? styles.textMedium : null,
            styles.textCenter,
            styles.textPrimary,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CenterMenu;
