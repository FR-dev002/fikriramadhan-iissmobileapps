import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default (props) => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <View style={styles.button}>
      <Text style={styles.textButton}>{'Add Review'.toUpperCase()}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F80ED',
    height: 45,
    borderRadius: 18,
  },

  textButton: {
    color: '#ffffff',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.25,
  },
});
