/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

 export default function App() {
  const [tasks, setTasks] = React.useState([
     'Do laundry',
    'Go to gym',
      'Walk dog',
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}


