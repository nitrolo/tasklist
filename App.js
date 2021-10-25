import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 100 }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          placeholder="Add Goal"
          style={{
            textAlign: 'center',
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            padding: 10,
            width: '80%',
          }}
        />
        <Button title="+" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
