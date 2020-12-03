import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Task = ({ task, checked, handleSelect }) => {

  return (
    <View style={styles.taskCon}>
      <TouchableOpacity 
        onPress={handleSelect}
      >
        {checked ? (
          <Ionicons name='ios-checkbox' size={24} color='#2065ff' />
        ) : (
          <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
        )}
      </TouchableOpacity>
      <Text style={styles.itemText}>{task.name}</Text>
      <Text style={styles.itemText}>{task.due_date}</Text>
      {task.status ===  'done' ? (
        <MaterialCommunityIcons name='progress-check' size={24} color='green' />
      ) : task.status === 'in-progress' ? (
        <MaterialCommunityIcons name='progress-clock' size={24} color='orange' />
      ) : (
        <MaterialCommunityIcons name='progress-alert' size={24} color='red' />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  taskCon: {
    backgroundColor: '#ffffff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15
  },
  itemText: {
    flex: 1,
    color: '#717171',
    fontSize: 13,
    paddingHorizontal: 4
  }
});

export default Task;
