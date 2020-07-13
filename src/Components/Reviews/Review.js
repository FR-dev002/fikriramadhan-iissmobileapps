import React, {Fragment} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CardView from 'react-native-cardview';
import CustomText from './../../Components/CustomText';
import Icon from 'react-native-ionicons';
const Review = ({style, children, ...props}) => {
  return (
    <Fragment>
      <View style={styles.cardHeader}>
        <View style={styles.contentHeader}>
          <CustomText style={styles.nameText}>Fikri</CustomText>
        </View>

        <View style={[styles.contentHeader, {justifyContent: 'flex-end'}]}>
          <Icon name="star-outline" color="#FFB200" />
          <Icon name="star-outline" color="#FFB200" />
          <Icon name="star-outline" color="#FFB200" />
        </View>
      </View>

      <View style={styles.containerDate}>
        <CustomText style={styles.date}>20 April 2020</CustomText>
      </View>

      <View style={{flex: 1, padding: 20}}>
        <CustomText style={{lineHeight: 22}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          minima distinctio porro, quam soluta dolorum odio necessitatibus a
          impedit eum nemo neque. Iusto eius laborum quas placeat voluptatum
          alias inventore?
        </CustomText>
      </View>
    </Fragment>
  );
};

export default Review;

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
  },

  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 46,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 45,
    paddingTop: 20,
    width: '100%',
  },

  contentHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  nameText: {
    fontSize: 20,
    lineHeight: 18,
    letterSpacing: 0.5,
  },

  containerDate: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 44,
  },

  date: {
    fontSize: 14,
    lineHeight: 22,
    color: '#BDBDBD',
  },
});
