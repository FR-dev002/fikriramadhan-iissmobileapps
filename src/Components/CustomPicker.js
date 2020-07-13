import React from 'react';
import {StyleSheet, Picker} from 'react-native';

const CustomPicker = ({error, style, children, ...props}) => {
  return (
    <Picker style={[styles.text, style]} {...props}>
      {children}
    </Picker>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  text: {
    width: '100%',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
});
