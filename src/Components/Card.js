import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CardView from 'react-native-cardview';
import TextHeader from './TextHeader';

const CustomCard = ({style, children, ...props}) => {
  return (
    <View style={styles.MainContainer}>
      <CardView
        cardElevation={7}
        cardMaxElevation={7}
        cornerRadius={10}
        style={[styles.cardViewStyle, style]}>
        {children}
      </CardView>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 1,
    paddingHorizontal: 1,
    marginTop: 20,
  },

  cardViewStyle: {
    width: '100%',
    minHeight: 274,
  },

  cardView_InsideText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginTop: 50,
  },
});
