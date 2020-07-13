import React from 'react';
import {View, StyleSheet} from 'react-native';
import Loading from './../Components/Loading';

const SplashScreen = () => {
  return (
    <View style={[styles.container, {backgroundColor: 'grey'}]}>
      <Loading loading={true} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
