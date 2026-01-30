import { Alert } from 'react-native';
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'tasks';

const useTaskManager = () => {

  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadTasks();
  }, [])

  const loadTasks = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY)
      if (data !== null) {
        setTasks(JSON.parse(data));
      }
    } catch (error) {
      console.log('Error loading tasks:', error);
    }
  }

  const addTask = () => {

    if (!taskText.trim()) return;
    
    if (editingId) {
      const updatedTasks = tasks.map(task =>
        task.id === editingId ? { ...task, title: taskText} : task
      )
      Alert.alert('Confirm Update', 'Are you sure you want to update this task?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            saveTasks(updatedTasks);
            setEditingId(null);
          },
        },
      ]);

    } else {
      const newTask = {
        id: Date.now().toString(),
        title: taskText,
        completed: false,
      }
      saveTasks([ newTask, ...tasks])
    }
    setTaskText('');
  }

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks)) 
      setTasks(newTasks)
    } catch (error) {
      console.log('Error saving tasks:', error);
    }
  }

  const editTask = (task) => {
    setTaskText(task.title);
    setEditingId(task.id);
  }

  const deleteTask = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this task?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel', // iOS only
      },
      {
        text: 'OK',
        onPress: () => {
          const filteredTasks = tasks.filter(task => task.id !== id);
          saveTasks(filteredTasks);
        },
      },
    ]);
  }

  return {
    taskText,
    tasks,
    editingId,
    setTaskText,
    addTask,
    editTask,
    deleteTask,
  }
}

export default useTaskManager