import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isInputVisible, setIsInputVisible] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsInputVisible(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(
      courseGoals.filter((item) => {
        return item.id !== goalId;
      })
    );
  };

  const cancelGoalAdditionHandler = () => {
    setIsInputVisible(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => setIsInputVisible(!isInputVisible)}
      />
      <GoalInput
        onCancel={cancelGoalAdditionHandler}
        isVisible={isInputVisible}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 100,
  },
});
