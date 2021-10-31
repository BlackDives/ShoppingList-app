import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Milk',
    },
    {
      id: 2,
      text: 'Eggs',
    },
    {
      id: 3,
      text: 'Bread',
    },
    {
      id: 4,
      text: 'Juice',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id);
    });
  };

  const addItem = item => {
    if (!item) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: items.length + 5, text: item}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.containter}>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
