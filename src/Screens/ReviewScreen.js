import React from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import FloatingButton from '../Components/FloatingButton';
import {ScrollView} from 'react-native-gesture-handler';
import TextHeader from './../Components/TextHeader';
import CustomText from '../Components/CustomText';
import CustomPicker from '../Components/CustomPicker';
const ReviewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, maxHeight: 36}}>
        <TextHeader>{'Share Your Feedback'}</TextHeader>
      </View>
      <View style={{flex: 1, marginTop: 25}}>
        <CustomPicker>
          <Picker.Item label="lorem" value="lorem"></Picker.Item>
          <Picker.Item label="lorem 1" value="lorem"></Picker.Item>
          <Picker.Item label="lorem 2" value="lorem"></Picker.Item>
          <Picker.Item label="lorem 3" value="lorem"></Picker.Item>
          <Picker.Item label="lorem 4" value="lorem"></Picker.Item>
        </CustomPicker>
      </View>
      <View style={{flex: 1, marginTop: 25}}>
        <CustomText>{'Doctor Name'}</CustomText>
      </View>
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
});
