import React, {Fragment} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TextHeader from './TextHeader';

const Chart = () => {
  return (
    <Fragment>
      <View style={styles.cardHeader}>
        <TextHeader
          style={styles.wrapperTextHeader}
          textStyle={styles.textHeader}>
          <Text>Ovral Rating (4.5/5)"</Text>
        </TextHeader>
      </View>
      <View style={styles.cardChart}>
        <Text>TODO</Text>
      </View>
      <View style={styles.cardInformation}>
        <View style={styles.guidence}>
          <View style={[styles.guidenceColor, {backgroundColor: '#FF3A29'}]} />
          <View>
            <Text>1 Start</Text>
          </View>
        </View>

        <View style={styles.guidence}>
          <View style={[styles.guidenceColor, {backgroundColor: '#FFB200'}]} />
          <View>
            <Text>2 Start</Text>
          </View>
        </View>

        <View style={styles.guidence}>
          <View style={[styles.guidenceColor, {backgroundColor: '#4339F2'}]} />
          <View>
            <Text>3 Start</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default Chart;

const styles = StyleSheet.create({
  cardChart: {
    backgroundColor: 'red',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  cardInformation: {
    marginHorizontal: 70,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },

  guidence: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  guidenceColor: {
    flex: 1,
    width: 14,
    height: 14,
    borderRadius: 50,
    right: 8,
  },
});
