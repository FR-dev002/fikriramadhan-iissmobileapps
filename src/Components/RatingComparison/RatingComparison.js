import React, {Fragment, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TextHeader from '../TextHeader';

const RatingComparison = () => {
  const initialArr = [
    {
      id: 1,
      text: '5',
    },
    {
      id: 2,
      text: '4',
    },
    {
      id: 3,
      text: '3',
    },
    {
      id: 4,
      text: '2',
    },
    {
      id: 5,
      text: '1',
    },
  ];

  return (
    <Fragment>
       <View style={styles.cardHeader}>
        <TextHeader
          style={styles.wrapperTextHeader}
          textStyle={styles.textHeader}>
          <Text>Rating Compiration</Text>
        </TextHeader>
      </View>
      <View style={styles.cardChart}>
        {initialArr.map((val) => {
          return (
            <View style={styles.container}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text>{val.text}</Text>

                <View style={styles.border}></View>
              </View>
            </View>
          );
        })}

        <View style={styles.cardInformation}>
          <View style={styles.wrapperInformation}>
            <View style={styles.contentInformation}>
              <View
                style={[styles.bar, {backgroundColor: '#4339F2', height: 150}]}
              />
              <View>
                <Text>lorem</Text>
              </View>
            </View>
            <View style={styles.contentInformation}>
              <View
                style={[styles.bar, {backgroundColor: '#FF3A29', height: 130}]}
              />
              <View>
                <Text>lorem</Text>
              </View>
            </View>
            <View style={styles.contentInformation}>
              <View
                style={[styles.bar, {backgroundColor: '#FFB200', height: 120}]}
              />
              <View>
                <Text>lorem</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default RatingComparison;

const styles = StyleSheet.create({
  cardChart: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 20,
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    maxHeight: 70,
  },

  wrapperTextHeader: {
    top: 24,
  },

  textHeader: {
    color: '#333333',
    fontSize: 20,
    lineHeight: 26,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#4F4F4F',
  },
  border: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: 20,
    marginTop: 10,
  },

  cardInformation: {
    position: 'absolute',
    flex: 1,
    bottom: 5,
    flexDirection: 'row',
    width: '100%',
  },
  bar: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 20,
    height: 100,
    bottom: 40,
    borderRadius: 18,
  },

  wrapperInformation: {
    flex: 1,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },

  contentInformation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
});
