import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ title }) => {
  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});

export default GoalItem;
