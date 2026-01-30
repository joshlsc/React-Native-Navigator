import React, { useEffect, useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Lucide } from '@react-native-vector-icons/lucide'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../config/firebase';

const Test = () => {

  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load tasks when app starts
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      
      // Ordered by createdAt descending
      // const tasksRef = collection(db, 'tasks');
      // const q = query(tasksRef, orderBy('createdAt', 'desc'));
      // const querySnapshot = await getDocs(q);
      
      // Basic version without ordering
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const taskList = [];
      querySnapshot.forEach((doc) => {
        taskList.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setTasks(taskList);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!taskText.trim()) return;

    try {
      await addDoc(collection(db, 'tasks'), {
        title: taskText,
        completed: false,
        createdAt: new Date(),
      });

      ToastAndroid.showWithGravity(
        'Task added successfully!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      setTaskText('');
      fetchTasks();
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };

  const updateTask = async () => {
    if (!editingId) return;

    try {
      const taskRef = doc(db, 'tasks', editingId);

      await updateDoc(taskRef, {
        title: taskText,
      });

      setEditingId(null);
      setTaskText('');
      fetchTasks();
    } catch (error) {
      console.log('Error updating task:', error);
    }
  };

  const editTask = (task) => {
    setTaskText(task.title);
    setEditingId(task.id);
  };

  const deleteTask = async (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this task?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel', // iOS only
      },
      {
        text: 'OK',
        onPress: async () => {
          try {
            await deleteDoc(doc(db, 'tasks', id));
            fetchTasks();
          } catch (error) {
            console.log('Error deleting task:', error);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Task Manager</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={taskText}
          onChangeText={setTaskText}
        />
        <Button title={editingId ? "Update Task" : "Add Task"} onPress={editingId ? updateTask : addTask} />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => editTask(item)}>
              <Lucide name='pencil' size={20} color='#2776ff' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => deleteTask(item.id)}>
              <Lucide name='trash' size={20} color='#e75858' />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No Tasks Found.</Text>}
      />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  taskTitle: {
    flex: 2
  },
  btn: {
    marginStart: 6,
  },
  emptyText: {
    fontSize: 14,
    color: '#636363',
    textAlign: 'center',
  },
});