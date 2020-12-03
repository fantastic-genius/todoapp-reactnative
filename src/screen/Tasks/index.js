import React, { useEffect, useState, useLayoutEffect } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';

//components
import HeaderTitle from '../../components/HeaderTitle';
import Task from '../../components/Task';

//actions
import { getTasks, getTasksCleanup } from '../../store/actions/getTasks';

const Tasks = ({navigation}) => {
  const dispatch = useDispatch();
  const getTasksState = useSelector(s => s.getTasks);
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState({});

  const renderTasks = ({item}) => (
    <Task
      task={item}
      key={item.id}
      handleSelect={() => {
        if(!selected.hasOwnProperty(item.id)){
          setSelected(prev => ({...prev, [item.id]: true}))
        }else{
          setSelected(prev => ({...prev, [item.id]: !selected[item.id]}))
        }
      }}
      checked={selected[item.id]}
    />
  )

  useEffect(() => {
    dispatch(getTasksCleanup());
    dispatch(getTasks());
  },[])

  useEffect(() => {
    if(getTasksState.isSuccessful){
      setTasks(getTasksState.data.tasks)
      dispatch(getTasksCleanup());
    }
  },[getTasksState])

  return (
    <SafeAreaView 
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <Entypo name='menu' size={24} color='#d3d7de' />
        </TouchableOpacity>
        <HeaderTitle title='todo' />
        <TouchableOpacity>
          <FontAwesome name='comment-o' size={24} color='#d3d7de' />
        </TouchableOpacity>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.text}>Tasks</Text>
        <TouchableOpacity style={styles.plusBtn}>
          <Entypo name='plus' size={24} color='white' />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {getTasksState.isLoading ? (
          <ActivityIndicator size='large' color={'#5c677c'} style={styles.loader} />
        ) : (
          <FlatList
            keyExtractor={(item) => item.id}
            data={tasks}
            renderItem={renderTasks}
            ListEmptyComponent={getTasksState.error ? (
              <Text style={styles.text}>
                Something went wrong. Please
                <Text
                  onPress={() => {
                    dispatch(getTasksCleanup());
                    dispatch(getTasks());
                  }}
                  style={styles.retry}
                >
                  {' '}Retry
                </Text>
              </Text>
            ) :( 
              <Text style={styles.text}>No task has been created</Text>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%'
  },
  header: {
    backgroundColor: '#3d4452',
    paddingHorizontal: 15,
    height: 50,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeader: {
    backgroundColor: '#f9fafc',
    paddingHorizontal: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#717171',
    fontSize: 13
  },
  body: {
    backgroundColor: '#f3f5f9',
    padding: 15
  },
  plusBtn: {
    backgroundColor: '#92cf5c',
    height: 30,
    width: 30,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    height: Dimensions.get('window').height * 0.3
  },
  retry: {
    color: 'skyblue'
  }
});

export default Tasks;
