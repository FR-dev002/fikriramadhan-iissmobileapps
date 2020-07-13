import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FloatingButton from './../Components/FloatingButton';
import {ScrollView} from 'react-native-gesture-handler';
import TextHeader from '../Components/TextHeader';
import CustomCard from '../Components/Card';
import Chart from '../Components/Chart';
import RatingComparison from '../Components/RatingComparison/RatingComparison';
import Review from '../Components/Reviews/Review';
import CustomText from '../Components/CustomText';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingHorizontal: 24, marginBottom: 70}}>
          <TextHeader>Dr. Fikri Ramadhan </TextHeader>

          <CustomCard>
            <Chart />
          </CustomCard>

          <CustomCard>
            <RatingComparison />
          </CustomCard>

          <View style={styles.review}>
            <CustomText> Patient Review (10) </CustomText>
          </View>

          {/* list review */}
          <CustomCard style={{minHeight: 125}}>
            <Review />
          </CustomCard>
          <CustomCard style={{minHeight: 125}}>
            <Review />
          </CustomCard>
          <CustomCard style={{minHeight: 125}}>
            <Review />
          </CustomCard>
          <CustomCard style={{minHeight: 125}}>
            <Review />
          </CustomCard>
          <CustomCard style={{minHeight: 125}}>
            <Review />
          </CustomCard>
        </View>
      </ScrollView>

      <FloatingButton
        style={styles.floatinBtn}
        onPress={() => navigation.push('Review')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatinBtn: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10,
    paddingHorizontal: 24,
  },

  review: {
    flex: 1,
    marginTop: 20,
  },
});
