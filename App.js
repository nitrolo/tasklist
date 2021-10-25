import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 100 }}>
      <View>
        <TextInput
          placeholder="Add Goal"
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            padding: 10,
          }}
        />
        <Button title="+" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
