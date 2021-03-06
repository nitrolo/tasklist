import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

const GoalInput = ({ onCancel, isVisible, onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  const cancelGoalAdditionHandler = () => {
    onCancel();
    setEnteredGoal('');
  };

  return (
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={cancelGoalAdditionHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Note" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
    textAlign: 'center',
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
