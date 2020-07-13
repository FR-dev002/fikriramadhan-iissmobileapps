import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = ({style, children, ...props}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#4f4f4f',
  },

});
