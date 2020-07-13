import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TextHeader = ({children, style, textStyle}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 36,
    height: 36,
    color: '#000000',
  },
});
