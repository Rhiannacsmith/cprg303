import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

 export default function ToDoList({tasks}) {

  return( 
  <>
  <ScrollView>
    {tasks.map((task, key) => (
      <Pressable key={key}>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      </Pressable>
    ))}
</ScrollView>
</>
  );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });
