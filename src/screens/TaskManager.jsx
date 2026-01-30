import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native'
import { Lucide } from '@react-native-vector-icons/lucide'
import useTaskManager from '../hooks/useTaskManager';

const TaskManager = () => {

  const {
    taskText,
    tasks,
    editingId,
    setTaskText,
    addTask,
    editTask,
    deleteTask,
  } = useTaskManager();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Enter Task'
          value={taskText}
          onChangeText={setTaskText}
        />

        <Button title={editingId ? 'Update Task' : 'Add Task'} onPress={addTask} />
      </View>

      <FlatList 
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.title}</Text>
            <View style={styles.itemActions}>
              <TouchableOpacity onPress={() => editTask(item)}>
                <Lucide name='pen' size={20} color='#28a056' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Lucide name='trash' size={20} color='#d64242' />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No Tasks Found.</Text>}
        contentContainerStyle={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

export default TaskManager

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: '#2f2f2f',
    fontWeight: '700',
  },
  formContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cfcfcf',
    borderRadius: 6,
    height: 42,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#636363',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#dcdcdc',
    borderRadius: 6,
    marginBottom: 10,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  }
})