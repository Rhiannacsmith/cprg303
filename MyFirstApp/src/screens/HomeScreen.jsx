import React from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from '../layouts/MainLayout';
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

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = React.useState([
        'Do laundry',
       'Go to gym',
         'Walk dog',
     ]);
   
     const addTask = (task) => {
       setTasks([...tasks, task]);
     }

    return (
    <MainLayout>
        <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
        </SafeAreaView>     
        </MainLayout>
    );
}